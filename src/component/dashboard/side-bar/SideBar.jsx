import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { MdDashboard } from "react-icons/md";
import { IoNotificationsOutline, IoLogOutOutline } from "react-icons/io5";
import { FaUsers, FaClipboardList, FaRegAddressCard } from "react-icons/fa6";
import { FaFlag } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import { Styles } from "./style";
import { postRequest } from "../../../services/https.services";

const SideBar = ({ isOpen: externalIsOpen, setIsOpen: externalSetIsOpen }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await postRequest("auth/logout");
    } catch (error) {
      console.warn("تعذر إبلاغ السيرفر بتسجيل الخروج، سيتم مسح الجلسة محلياً:", error);
    } finally {
      localStorage.clear();
      sessionStorage.clear();

      navigate("/login", { replace: true });
    }
  };

  const [internalIsOpen, setInternalIsOpen] = useState(true);
  const isSidebarOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;

  const toggleSidebar = () => {
    if (typeof externalSetIsOpen === "function") {
      externalSetIsOpen(!isSidebarOpen);
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
  };

  return (
    <Styles isOpen={isSidebarOpen} dir="rtl">
      <div className="toggle_btn" onClick={toggleSidebar}>
        <HiOutlineMenuAlt3 />
      </div>

      <nav className="nav_list">
        {/* الرئيسية / لوحة التحكم */}
        <NavLink
          to="/controlpanel"
          className={({ isActive }) => (isActive ? "nav_link active" : "nav_link")}
        >
          <div className="class_icon"><MdDashboard /></div>
          {isSidebarOpen && <span>الرئيسية</span>}
        </NavLink>

        {/* إدارة المستخدمين */}
        <NavLink
          to="/manageusers"
          className={({ isActive }) => (isActive ? "nav_link active" : "nav_link")}
        >
          <div className="class_icon"><FaUsers /></div>
          {isSidebarOpen && <span>إدارة المستخدمين</span>}
        </NavLink>

        {/* إدارة الأنشطة */}
        <NavLink
          to="/manageActivite"
          className={({ isActive }) => (isActive ? "nav_link active" : "nav_link")}
        >
          <div className="class_icon"><FaClipboardList /></div>
          {isSidebarOpen && <span>إدارة الأنشطة</span>}
        </NavLink>

        {/* إدارة النقاط */}
        <NavLink
          to="/ManagePoint"
          className={({ isActive }) => (isActive ? "nav_link active" : "nav_link")}
        >
          <div className="class_icon"><FaFlag /></div>
          {isSidebarOpen && <span>إدارة النقاط</span>}
        </NavLink>

        {/* إدارة الإشعارات */}
        <NavLink
          to="/manageNotification"
          className={({ isActive }) => (isActive ? "nav_link active" : "nav_link")}
        >
          <div className="class_icon"><IoNotificationsOutline /></div>
          {isSidebarOpen && <span>إدارة الإشعارات</span>}
        </NavLink>

        {/* صلاحيات المسؤول */}
        <NavLink
          to="/adminPersinality"
          className={({ isActive }) => (isActive ? "nav_link active" : "nav_link")}
        >
          <div className="class_icon"><FaRegAddressCard /></div>
          {isSidebarOpen && <span>صلاحيات المسؤول</span>}
        </NavLink>
      </nav>

      {/* زر تسجيل الخروج */}
      <div className="logout_container">
        <button className="logout_btn" onClick={handleLogout} title="تسجيل الخروج">
          <div className="class_icon">
            <IoLogOutOutline />
          </div>
          {isSidebarOpen && <span>تسجيل الخروج</span>}
        </button>
      </div>
    </Styles>
  );
};

export default SideBar;