import React, { Suspense, useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import i18next from "i18next";
import { initReactI18next } from 'react-i18next';

import Loader from "../main-loader/index";
import Navbar from "../Navbar/index";
import SideBar from "../dashboard/side-bar/SideBar";
import BreadcrumbComponent from '../common/breadcrumbs';
import { resources } from '../../assets/locals';
import { Styles } from './styles';

const projectTitle = "مؤسسة العزم";

i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: "ar",
  resources: resources,
});

const getPageTitle = (pathname) => {
  if (pathname.startsWith("/viewprofile")) {
    return "ملف المشرف الشخصي";
  }

  switch (pathname) {
    case "/controlpanel":
      return "لوحة التحكم";
    case "/manageActivite":
      return "إدارة الأنشطة ";
    case "/addActivite":
      return "إضافة نشاط جديد";
    case "/editActivite":
      return "تعديل النشاط";
    case "/detailsActivite":
      return "تفاصيل النشاط";
    case "/requirmentUnactivite":
      return "مراجعة الطلبات المعلقة";
    case "/confirm":
      return "تسجيل حضور";
    case "/manageusers":
      return "إدارة المستخدمين";
    case "/addUser":
      return "إضافة مستخدم جديد";
    case "/viewFileUser":
      return "ملف المستخدم";
    case "/ManagePoint":
      return "إدارة النقاط";
    case "/manageNotification":
      return "إدارة الإشعارات";
    case "/adminPersinality":
      return "صلاحيات المسؤولين";
    case "/addAdminOrCrrentAdmin":
      return "إدارة المشرفين";
    default:
      return "الرئيسية";
  }
};

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const language = useSelector((state) => state.student1?.language);
  const location = useLocation();

  useEffect(() => {
    if (language) {
      i18next.changeLanguage(language);
    }
  }, [language]);

  return (
    <Suspense fallback={<Loader />}>
      <Helmet>
        <title>{`${projectTitle} | ${getPageTitle(location.pathname)}`}</title>
      </Helmet>

      <Styles $isSidebarOpen={isSidebarOpen}>
        <Navbar />

        <div className="main_wrapper">
          <SideBar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

          <main className="page_container">
            <BreadcrumbComponent />
            <div className="outlet_container">
              <Outlet />
            </div>
          </main>
        </div>
      </Styles>
    </Suspense>
  );
};

export default Layout;