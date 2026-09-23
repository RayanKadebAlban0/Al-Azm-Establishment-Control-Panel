import React, { useEffect, useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";
import { Styles } from "./style";
import {
  getRequest,
  postRequest,
} from "../../services/https.services";

const getUpdatePointsUrl = (role, userId) => {
  if (!userId) return "";
  
  const isYouth = role === "youth" || role === "يافع";
  const userType = isYouth ? "youth" : "volunteer";

  return `/admin/users/${userType}/${userId}`;
};

const ROLE_PERMISSIONS = {
  "super-admin": ["youth", "volunteer"],
  "superadmin": ["youth", "volunteer"],
  "youth-supervisor": ["youth"],
  "youth_supervisor": ["youth"],
  "youth-admin": ["youth"],
  "youth_admin": ["youth"],
  "volunteer-supervisor": ["volunteer"],
  "volunteer_supervisor": ["volunteer"],
  "volunteer-admin": ["volunteer"],
  "volunteer_admin": ["volunteer"],
};

const ROLE_LABELS = {
  youth: "يافع",
  volunteer: "متطوع",
  "super-admin": "Super Admin",
  superadmin: "Super Admin",
  "youth-supervisor": "مشرف اليافعين",
  youth_supervisor: "مشرف اليافعين",
  "youth-admin": "مشرف اليافعين",
  youth_admin: "مشرف اليافعين",
  "volunteer-supervisor": "مشرف المتطوعين",
  volunteer_supervisor: "مشرف المتطوعين",
  "volunteer-admin": "مشرف المتطوعين",
  volunteer_admin: "مشرف المتطوعين",
};

const normalizeRole = (role) => {
  return String(role || "")
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, "-");
};

const getCurrentAdminRole = () => {
  if (typeof window === "undefined") return null;
  const stores = [window.localStorage, window.sessionStorage];

  for (const store of stores) {
    try {
      const directRole =
        store.getItem("userRole") ||
        store.getItem("role") ||
        store.getItem("adminRole");
      if (directRole) return normalizeRole(directRole);

      for (let index = 0; index < store.length; index += 1) {
        const key = store.key(index);
        if (!key || (key !== "userRole" && /access_token|refresh_token|^token$/i.test(key))) {
          continue;
        }

        const value = store.getItem(key);
        if (!value) continue;

        let parsedValue;
        try {
          parsedValue = JSON.parse(value);
        } catch {
          if (typeof value === "string" && value.length < 50) {
            return normalizeRole(value);
            
          }
          continue;
        }

        const role =
          parsedValue?.role ||
          parsedValue?.userRole ||
          parsedValue?.name ||
          parsedValue?.data?.admin?.roles?.[0] ||
          parsedValue?.data?.role;

        if (role) return normalizeRole(role);
      }
    } catch (error) {
      console.error("خطأ في قراءة دور الأدمن:", error);
    }
  }
  return null;
};

const getRoleLabel = (role) => {
  const normalizedRole = normalizeRole(role);
  return (
    ROLE_LABELS[normalizedRole] ||
    ROLE_LABELS[role] ||
    role ||
    "غير معروف"
  );
};

const canManageUser = (adminRole, userRole) => {
  const normalizedAdminRole = normalizeRole(adminRole);
  const normalizedUserRole = String(userRole || "").trim().toLowerCase();

  if (normalizedAdminRole === "super-admin") return true;
  const allowedGroups = ROLE_PERMISSIONS[normalizedAdminRole] || [];
  return allowedGroups.includes(normalizedUserRole);
};

const safeString = (val, fallback = "غير مدخل") => {
  if (val === null || val === undefined) return fallback;
  const cleaned = String(val).replace(/^"|"$/g, "").trim();
  return cleaned === "" ? fallback : cleaned;
};

const mapUser = (user) => {
  const rawPoints = user?.total_points ?? user?.points ?? user?.current_points;
  const parsedPoints = Number(rawPoints);
  const currentPoints =
    rawPoints !== null &&
    rawPoints !== undefined &&
    rawPoints !== "" &&
    Number.isFinite(parsedPoints)
      ? parsedPoints
      : 0;

  return {
    ...user,
    id: user.id,
    name: user.name || `${user.first_name || ""} ${user.last_name || ""}`.trim(),
    username: user.username,
    email: user.email,
    phone: user.phone,
    status: user.is_active ? "نشط" : "غير نشط",
    avatar:
      user.photo_url ||
      user.image ||
      user.avatar ||
      "https://via.placeholder.com/150",
    currentPoints,
    group: String(user?.role || "volunteer").trim().toLowerCase(),
  };
};

const ManagePoint = () => {
  const [searchUser, setSearchUser] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [adminNotes, setAdminNotes] = useState("");
  const [userReason, setUserReason] = useState("");
  const [actionType, setActionType] = useState("add");
  const [pointsAmount, setPointsAmount] = useState(50);
  const [sendNotification, setSendNotification] = useState(true);
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [adminRole] = useState(() => getCurrentAdminRole());

  const canManageSelectedUser =
    Boolean(selectedUser) &&
    canManageUser(adminRole, selectedUser.group);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchUser.trim().length > 1) {
        fetchUsers(searchUser.trim());
      } else {
        setSelectedUser(null);
        setSearchResults([]);
      }
    }, 400);
    return () => clearTimeout(delayDebounceFn);
  }, [searchUser]);

  const fetchUsers = async (query) => {
    try {
      setSearchLoading(true);
      const response = await getRequest(
        `/admin/users/search?q=${encodeURIComponent(query)}`
      );

      const usersList = Array.isArray(response)
        ? response
        : response?.data || [];

      setSearchResults(usersList);

      if (usersList.length > 0) {
        const exactMatch = usersList.find(
          (u) =>
            u.username?.toLowerCase() === query.toLowerCase() ||
            u.email?.toLowerCase() === query.toLowerCase()
        );

        const targetUser = exactMatch || usersList[0];
        await loadUserDetails(targetUser);
      } else {
        setSelectedUser(null);
      }
    } catch (error) {
      console.error("خطأ في جلب بيانات المستخدمين:", error);
      setSelectedUser(null);
    } finally {
      setSearchLoading(false);
    }
  };


const formatDateToISO = (val) => {
  if (!val) return "2000-01-01";
  
  if (typeof val === "number" || (!isNaN(val) && !String(val).includes("-"))) {
    const timestamp = Number(val) < 10000000000 ? Number(val) * 1000 : Number(val);
    const dateObj = new Date(timestamp);
    if (!isNaN(dateObj.getTime())) {
      return dateObj.toISOString().split("T")[0];
    }
  }

  const dateObj = new Date(val);
  if (!isNaN(dateObj.getTime())) {
    return dateObj.toISOString().split("T")[0];
  }

  return "2000-01-01";
};

const loadUserDetails = async (targetUser) => {
  try {
    const detailRes = await getRequest(`/admin/users/${targetUser.id}`);
    const fullData = detailRes?.data || detailRes || targetUser;
    setSelectedUser(mapUser(fullData));
  } catch (error) {
    console.error("خطأ في جلب التفاصيل:", error);
    setSelectedUser(mapUser(targetUser));
  }
};

  const handleIncrement = () => setPointsAmount((prev) => prev + 1);
  const handleDecrement = () => setPointsAmount((prev) => (prev > 1 ? prev - 1 : 1));

  const handlePointsChange = (event) => {
    const value = Number(event.target.value);
    setPointsAmount(Number.isFinite(value) && value >= 1 ? Math.floor(value) : 1);
  };

const handleSubmit = async (event) => {
  event.preventDefault();

  if (!selectedUser) {
    alert("الرجاء اختيار مستخدم أولًا");
    return;
  }
  if (!adminRole) {
    alert("لم يتم العثور على دور الأدمن. تأكد من حفظ بيانات تسجيل الدخول.");
    return;
  }
  if (!canManageSelectedUser) {
    alert("ليس لديك صلاحية لتعديل نقاط هذا النوع من المستخدمين.");
    return;
  }

  const amount = Number(pointsAmount);
  if (!Number.isInteger(amount) || amount < 1) {
    alert("الرجاء إدخال عدد نقاط صحيح.");
    return;
  }

  const calculatedPoints =
    actionType === "add"
      ? selectedUser.currentPoints + amount
      : Math.max(0, selectedUser.currentPoints - amount);

  const updateUrl = getUpdatePointsUrl(selectedUser.group, selectedUser.id);

  const payload = {
    first_name: safeString(selectedUser.first_name || selectedUser.name?.split(" ")[0]),
    last_name: safeString(selectedUser.last_name || selectedUser.name?.split(" ").slice(1).join(" ")),
    father_name: safeString(selectedUser.father_name, ""),
    mother_full_name: safeString(selectedUser.mother_full_name, ""),
    birth_date: formatDateToISO(selectedUser.birth_date),
    email: safeString(selectedUser.email, "user@example.com"),
    phone: safeString(selectedUser.phone, "0000000000"),
    username: safeString(selectedUser.username),
    gender: selectedUser.gender || "male",
    mother_phone: safeString(selectedUser.mother_phone, ""),
    father_phone: safeString(selectedUser.father_phone, ""),
    backup_phone: safeString(selectedUser.backup_phone, ""),
    landline_phone: safeString(selectedUser.landline_phone, ""),
    address: safeString(selectedUser.address, ""),
    total_points: calculatedPoints,
    points: calculatedPoints,
    admin_notes: adminNotes,
    reason: userReason,
    send_notification: sendNotification ? 1 : 0,
  };

  try {
    setLoading(true);

    const responseData = await postRequest(updateUrl, payload);

    alert(responseData?.message || "تم تعديل النقاط بنجاح!");

    await loadUserDetails(selectedUser);

    setAdminNotes("");
    setUserReason("");
  } catch (error) {
    console.error("تفاصيل الخطأ:", error?.response?.data || error);
    alert(
      error?.response?.data?.message || "حدث خطأ أثناء تعديل النقاط!"
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <Styles>
      <h2 className="page_title">تعديل النقاط</h2>
      <div className="admin_role_hint">
        صلاحيتك الحالية: <strong>{getRoleLabel(adminRole)}</strong>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="main_grid">
          <div className="search_section">
            <label className="label">البحث عن مستخدم:</label>
            <div className="search_input_wrapper">
              <LiaSearchSolid className="class_search_icon" />
              <input
                type="text"
                placeholder="أدخل اسم المستخدم (مثال: volunteer123106)"
                value={searchUser}
                onChange={(event) => setSearchUser(event.target.value)}
              />
            </div>
            {searchLoading && <p>جاري البحث...</p>}

            {searchResults.length > 1 && (
              <div className="search_dropdown" style={{ marginTop: "8px" }}>
                <small>اختر من نتائج البحث:</small>
                <select
                  onChange={(e) => {
                    const u = searchResults.find((item) => item.id === Number(e.target.value));
                    if (u) loadUserDetails(u);
                  }}
                  value={selectedUser?.id || ""}
                >
                  {searchResults.map((u) => (
                    <option key={u.id} value={u.id}>
                      {u.name} ({u.username})
                    </option>
                  ))}
                </select>
              </div>
            )}

            {selectedUser && (
              <div className="user_card">
                <div className="user_info">
                  <img src={selectedUser.avatar} alt={selectedUser.name} />
                  <div className="details">
                    <div className="name">{selectedUser.name}</div>
                    <div className="status">اسم المستخدم: {selectedUser.username}</div>
                    <div className="status">الحالة: {selectedUser.status}</div>
                    <div className="status">
                      النوع: {getRoleLabel(selectedUser.group)}
                    </div>
                  </div>
                </div>
                <div className="points_badge">
                  عدد النقاط الحالي:
                  <span>
                    {selectedUser.currentPoints === null
                      ? "غير متاح"
                      : `${selectedUser.currentPoints} نقطة`}
                  </span>
                </div>
              </div>
            )}

            {selectedUser && !canManageSelectedUser && (
              <p className="permission_error">
                لا تملك صلاحية تعديل نقاط هذا المستخدم.
              </p>
            )}

            <div className="action_type_buttons">
              <button
                type="button"
                className={actionType === "add" ? "active" : ""}
                disabled={!canManageSelectedUser || loading}
                onClick={() => setActionType("add")}
              >
                إضافة نقاط
              </button>
              <button
                type="button"
                className={actionType === "subtract" ? "active" : ""}
                disabled={!canManageSelectedUser || loading}
                onClick={() => setActionType("subtract")}
              >
                حسم نقاط
              </button>
            </div>

            <div className="counter_wrapper">
              <button
                type="button"
                className="counter_btn"
                onClick={handleDecrement}
                disabled={!canManageSelectedUser || loading}
              >
                -
              </button>
              <input
                type="number"
                min="1"
                className="points_input"
                value={pointsAmount}
                disabled={!canManageSelectedUser || loading}
                onChange={handlePointsChange}
              />
              <button
                type="button"
                className="counter_btn"
                onClick={handleIncrement}
                disabled={!canManageSelectedUser || loading}
              >
                +
              </button>
            </div>
          </div>

          <div>
            <div className="textarea_group">
              <label>ملاحظات خاصة بالأدمن</label>
              <div className="textarea_wrapper">
                <textarea
                  maxLength={600}
                  value={adminNotes}
                  onChange={(event) => setAdminNotes(event.target.value)}
                />
                <span className="char_count">{adminNotes.length} / 600</span>
              </div>
            </div>
          </div>
        </div>

        <div className="textarea_group" style={{ marginTop: "20px" }}>
          <label>سبب التعديل: (سيتم إرساله للمستخدم)</label>
          <div className="textarea_wrapper">
            <textarea
              maxLength={600}
              value={userReason}
              onChange={(event) => setUserReason(event.target.value)}
              placeholder="سبب التعديل..."
            />
            <span className="char_count">{userReason.length} / 600</span>
          </div>
        </div>

        <div className="bottom_actions">
          <div className="toggle_wrapper">
            <label className="switch">
              <input
                type="checkbox"
                checked={sendNotification}
                onChange={(event) => setSendNotification(event.target.checked)}
              />
              <span className="slider"></span>
            </label>
            <span className="toggle_label">إرسال إشعار</span>
          </div>
          <button
            type="submit"
            className="submit_btn"
            disabled={loading || !canManageSelectedUser}
          >
            {loading ? "جاري الإرسال..." : "إرسال التعديل"}
          </button>
        </div>
      </form>
    </Styles>
  );
};

export default ManagePoint;