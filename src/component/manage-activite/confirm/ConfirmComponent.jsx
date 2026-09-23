import React, { useEffect, useMemo, useState } from "react";
import { Styles } from "./style";
import { IoClose } from "react-icons/io5";
import BaseDataTable from "../../common/tabel/base_data_table/BaseDataTable";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";
import { useParams } from "react-router-dom";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASEURL;

const USER_TYPE_MAP = {
  youth: "يافع",
  volunteer: "متطوع",
};

const REGISTRATION_STATUS_MAP = {
  applying: "قيد التقديم",
  pending: "قيد الانتظار",
  accepted: "مقبول",
  rejected: "مرفوض",
  in_progress: "جاري التنفيذ",
  completed: "مكتمل",
  cancelled: "ملغى",
};

const ConfirmComponent = () => {
  const { id } = useParams();

  const options = [
    { id: "all", title: "الكل" },
    { id: "present", title: "حضر" },
    { id: "absent", title: "لم يحضر" },
  ];

  const [selectedOption, setSelectedOption] = useState("all");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activityDetails, setActivityDetails] = useState(null);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 5;

  // =====================================
  //  جلب بيانات التسجيلات
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        const headers = { Authorization: `Bearer ${token}` };

        const registrationsEndpoint = id
          ? `${BASE_URL}/api/admin/activities/${id}/registrations`
          : `${BASE_URL}/api/admin/registrations`;

        const [activityRes, registrationsRes] = await Promise.all([
          id ? axios.get(`${BASE_URL}/api/admin/activities/${id}`, { headers }).catch(() => null) : null,
          axios.get(registrationsEndpoint, {
            params: { page: currentPage },
            headers,
          }),
        ]);

        if (activityRes?.data?.data) {
          setActivityDetails(activityRes.data.data);
        }

        const registrations = Array.isArray(registrationsRes?.data?.data)
          ? registrationsRes.data.data
          : [];

        const formattedData = registrations.map((item) => ({
          registration_id: item.id,
          user_id: item.user?.id,
          الاسم: item.user?.name || "غير محدد",
          البريد: item.user?.email || "",
          الهاتف: item.user?.phone || "",
          نوع_المستخدم: USER_TYPE_MAP[item.user?.user_type] || item.user?.user_type || "غير محدد",
          حالة_التسجيل: REGISTRATION_STATUS_MAP[item.status] || item.status || "غير محدد",
          attended: item.attended ?? (item.status === "accepted" || item.status === "completed"),
          hours: item.hours || 0,
          send_badge: item.send_badge ?? false,
          send_notification: item.send_notification ?? true,
          created_at: item.applied_at || item.created_at,
        }));

        setData(formattedData);
      } catch (error) {
        // alert(error.userMessage || "حدث خطأ أثناء الحفظ");
        console.error("خطأ أثناء جلب الطلبات والتسجيلات:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, currentPage]);


  const updateRow = (userId, field, value) => {
    setData((prev) =>
      prev.map((item) =>
        item.user_id === userId ? { ...item, [field]: value } : item
      )
    );
  };

  
  const filteredData = useMemo(() => {
    if (selectedOption === "present") {
      return data.filter((item) => item.attended === true);
    }
    if (selectedOption === "absent") {
      return data.filter((item) => item.attended === false);
    }
    return data;
  }, [data, selectedOption]);

  
  const totalRows = filteredData.length;
  const totalPages = Math.max(1, Math.ceil(totalRows / rowsPerPage));

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    return filteredData.slice(start, start + rowsPerPage);
  }, [filteredData, currentPage]);

  const startItem = totalRows === 0 ? 0 : (currentPage - 1) * rowsPerPage + 1;
  const endItem = Math.min(currentPage * rowsPerPage, totalRows);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };


  const handleSave = async () => {
    try {
      setSaving(true);
      const token = localStorage.getItem("token");

      const participants = data
        .filter((item) => item.user_id)
        .map((item) => ({
          user_id: Number(item.user_id),
          attended: Boolean(item.attended),
          hours: Number(item.hours) || 0,
          send_badge: Boolean(item.send_badge),
          send_notification: Boolean(item.send_notification),
        }));

      const saveEndpoint = id
        ? `${BASE_URL}/api/admin/activities/${id}/attendance/bulk`
        : `${BASE_URL}/api/admin/attendance/bulk`;

      await axios.post(
        saveEndpoint,
        { participants },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      alert("تم حفظ حالات الحضور بنجاح");
    } catch (error) {
      console.error("Attendance save error:", error);
      // alert(error.response?.data?.message || "حدث خطأ أثناء حفظ الحضور");
    } finally {
      setSaving(false);
    }
  };


  const columns = [
    {
      name: "الاسم",
      cell: (row) => <span>{row.الاسم}</span>,
    },
    {
      name: "نوع العضوية",
      selector: (row) => row.نوع_المستخدم,
    },
    {
      name: "حالة الحضور",
      cell: (row) => (
        <select
          className="table_select"
          value={row.attended ? "present" : "absent"}
          onChange={(e) =>
            updateRow(row.user_id, "attended", e.target.value === "present")
          }
        >
          <option value="present">حضر</option>
          <option value="absent">لم يحضر</option>
        </select>
      ),
    },
    {
      name: "إرسال إشعار",
      cell: (row) => (
        <label className="mini_switch">
          <input
            type="checkbox"
            checked={row.send_notification}
            onChange={(e) =>
              updateRow(row.user_id, "send_notification", e.target.checked)
            }
          />
          <span className="slider" />
        </label>
      ),
    },
    {
      name: "إرسال شارة",
      cell: (row) => (
        <label className="mini_switch">
          <input
            type="checkbox"
            checked={row.send_badge}
            onChange={(e) =>
              updateRow(row.user_id, "send_badge", e.target.checked)
            }
          />
          <span className="slider" />
        </label>
      ),
    },
    {
      name: "عدد الساعات",
      cell: (row) => (
        <input
          type="text"
          className="hours_input"
          value={`${row.hours}/${activityDetails?.hours || 10}`}
          onChange={(e) => {
            const val = e.target.value.split("/")[0];
            updateRow(row.user_id, "hours", val);
          }}
        />
      ),
    },
    {
      name: "التاريخ",
      cell: (row) => {
        if (!row.created_at) return "-";
        // التعامل مع تاريخ بصيغة Timestamp أو ISO Date String
        const date = typeof row.created_at === "number"
          ? new Date(row.created_at * 1000)
          : new Date(row.created_at);
        return isNaN(date.getTime()) ? "-" : date.toLocaleDateString("en-GB");
      },
    },
  ];

  if (loading) {
    return <div style={{ textAlign: "center", padding: "50px" }}>جاري تحميل البيانات...</div>;
  }

  return (
    <Styles>
      <h4 className="page_title">تأكيد حضور المتدربين / المتطوعين</h4>

      {/* تفاصيل النشاط ) */}
      <div className="activity_header">
        <div className="activity_image">
          <IoClose className="icon_close" />
        </div>

        <div className="activity_info">
          <p>
            <strong>الاسم:</strong>{" "}
            <span>{activityDetails?.title || (id ? `النشاط رقم ${id}` : "كافة طلبات الحضور العامة")}</span>
          </p>
          <p>
            <strong>الوصف:</strong>{" "}
            <span>{activityDetails?.description || "-"}</span>
          </p>
          <p>
            <strong>التاريخ:</strong>{" "}
            <span>{activityDetails?.start_date || "-"}</span>
          </p>
          <p>
            <strong>المدة:</strong>{" "}
            <span>{activityDetails?.hours ? `${activityDetails.hours} ساعة` : "-"}</span>
          </p>
          <p>
            <strong>المكتب:</strong>{" "}
            <span>{activityDetails?.office?.name || "-"}</span>
          </p>
        </div>
      </div>

      <div className="list_title">
        قائمة المتدربين: <strong>({data.length} متدرب)</strong>
      </div>

      {/* خيارات الفلترة */}
      <div className="attendance_filter">
        {options.map((item) => {
          const active = selectedOption === item.id;
          return (
            <label
              key={item.id}
              className={`attendance_card ${active ? "active" : ""}`}
            >
              <input
                type="radio"
                value={item.id}
                checked={active}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                  setCurrentPage(1);
                }}
              />
              <span>{item.title}</span>
              <span className="radio_icon">
                {active ? <MdRadioButtonChecked /> : <MdRadioButtonUnchecked />}
              </span>
            </label>
          );
        })}
      </div>

      {/* الجدول */}
      <div className="table_wrapper">
        <BaseDataTable
          columns={columns}
          data={paginatedData}
          selectableRows
          className="table_confirm"
        />
      </div>

      {/* زر الحفظ */}
      <div className="save_container">
        <button
          className="save_button"
          onClick={handleSave}
          disabled={saving}
        >
          {saving ? "جاري الحفظ..." : "حفظ الحالات"}
        </button>
      </div>

      {/* الترقيم (Pagination) */}
      <div className="custom_pagination">
        <div className="pagination_buttons">
          <button
            type="button"
            className="page_arrow"
            disabled={currentPage === 1}
            onClick={() => goToPage(currentPage - 1)}
          >
            ‹
          </button>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                type="button"
                key={page}
                className={`page_number ${currentPage === page ? "active" : ""}`}
                onClick={() => goToPage(page)}
              >
                {page}
              </button>
            )
          )}

          <button
            type="button"
            className="page_arrow"
            disabled={currentPage === totalPages || totalRows === 0}
            onClick={() => goToPage(currentPage + 1)}
          >
            ›
          </button>
        </div>
        <div className="pagination_info">
          عرض {startItem}-{endItem} من أصل {totalRows} مستخدم
        </div>
      </div>
    </Styles>
  );
};

export default ConfirmComponent;