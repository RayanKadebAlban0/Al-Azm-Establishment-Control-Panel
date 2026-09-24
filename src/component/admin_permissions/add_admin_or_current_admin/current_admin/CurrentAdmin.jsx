import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import axios from "axios";
import {
  FiEye,
  FiChevronLeft,
  FiChevronRight,
  FiCheck,
} from "react-icons/fi";


const CurrentAdmin = () => {
  const [admins, setAdmins] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [total, setTotal] = useState(0);

  const getAdmins = async (page = 1) => {
    try {
      setLoading(true);
      setError("");

      const token = localStorage.getItem("token");

      const response = await axios.get(
        `${process.env.REACT_APP_API_BASEURL}/admin/admins`,
        {
          params: {
            page,
          },

          headers: {
            Authorization: token
              ? `Bearer ${token}`
              : undefined,

            Accept: "application/json",
          },
        }
      );

      console.log("GET ADMINS:", response.data);

      const result = response.data;

      setAdmins(result?.data || []);
      setCurrentPage(result?.currentPage || 1);
      setLastPage(result?.lastPage || 1);
      setTotal(result?.total || 0);
    } catch (error) {
      console.error(
        "Get Admins Error:",
        error.response?.data || error.message
      );

      setError(
        error.response?.data?.message ||
        "حدث خطأ أثناء جلب بيانات الأدمن"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAdmins(1);
  }, []);


  const getRoleName = (roles = []) => {
    if (!roles.length) {
      return "بدون صلاحية";
    }

    const role = roles[0];

    const roleNames = {
      "super-admin": "مشرف عام",
      "volunteer-admin": "مشرف متطوعين",
      "youth-admin": "مشرف يافعين",

      "volunteer-supervisor": "مشرف متطوعين",
      "youth-supervisor": "مشرف يافعين",
    };

    return roleNames[role] || role;
  };

  const getJobTitle = (admin) => {
    return getRoleName(admin?.roles);
  };


  const isAdminActive = () => {
    return true;
  };

 const navigate = useNavigate();

  const handleViewAdmin = (admin) => {
    console.log("Admin:", admin);
    navigate(`/viewprofile/${admin.id}`);
  };

  /*
   * بناء أرقام الصفحات.
   */
  const renderPagination = () => {
    return Array.from(
      { length: lastPage },
      (_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            type="button"
            className={`page-number ${currentPage === page
                ? "active"
                : ""
              }`}
            onClick={() => getAdmins(page)}
          >
            {page}
          </button>
        );
      }
    );
  };

  if (loading) {
    return (
      <div className="admins-state">
        جاري تحميل بيانات المشرفين...
      </div>
    );
  }

  if (error) {
    return (
      <div className="admins-state error-state">
        <p>{error}</p>

        <button
          type="button"
          onClick={() =>
            getAdmins(currentPage)
          }
        >
          إعادة المحاولة
        </button>
      </div>
    );
  }

  return (
   
      <div className="current-admin-container">
        <div className="admins-table-wrapper">

          <table className="admins-table">

            <thead>
              <tr>
                <th>اسم الأدمن</th>

                <th>
                  البريد الإلكتروني
                </th>

                <th>
                  المنصب الوظيفي
                </th>

                <th>
                  رقم الهاتف
                </th>

                <th>
                  تاريخ الانضمام
                </th>

                <th>
                  العضوية
                </th>

                <th>
                  الحالة
                </th>

                <th>
                  تعديل الصلاحيات
                </th>
              </tr>
            </thead>

            <tbody>

              {admins.length > 0 ? (
                admins.map((admin) => {
                  const active =
                    isAdminActive(admin);

                  return (
                    <tr key={admin.id}>


                      <td className="admin-name">
                        {admin.username || "-"}
                      </td>



                      <td>
                        {admin.email || "-"}
                      </td>



                      <td>
                        {getJobTitle(admin)}
                      </td>


                      

                      <td dir="ltr">
                        {admin.phone || "-"}
                      </td>


                    

                      <td>
                        -
                      </td>


                  

                      <td>
                        {getRoleName(
                          admin.roles
                        )}
                      </td>



                      <td>

                        <div
                          className={`status-control ${active
                              ? "status-active"
                              : "status-inactive"
                            }`}
                        >

                          <span className="status-icon">
                            <FiCheck />
                          </span>

                          <span className="status-lines">
                            |||
                          </span>

                        </div>

                      </td>



                      <td>
<button
    type="button"
    className="view-button"
    onClick={() => handleViewAdmin(admin)}
  >
    <FiEye />
    <div className="view-button-text">
      <span>عرض</span>
    </div>
  </button>

                      </td>

                    </tr>
                  );
                })
              ) : (

                <tr>

                  <td
                    colSpan="8"
                    className="empty-table"
                  >
                    لا يوجد مشرفون حاليًا
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>


        {/* Pagination */}

        <div className="table-footer">

          <div className="pagination">

            <button
              type="button"
              className="arrow-button"
              disabled={
                currentPage <= 1
              }
              onClick={() =>
                getAdmins(
                  currentPage - 1
                )
              }
            >
              <FiChevronLeft />
            </button>


            {renderPagination()}


            <button
              type="button"
              className="arrow-button"
              disabled={
                currentPage >= lastPage
              }
              onClick={() =>
                getAdmins(
                  currentPage + 1
                )
              }
            >
              <FiChevronRight />
            </button>

          </div>


          <p className="table-result">

            عرض{" "}

            {admins.length}

            {" "}من أصل{" "}

            {total}

            {" "}طلب

          </p>

        </div>

      </div>
  
  );
};

export default CurrentAdmin;