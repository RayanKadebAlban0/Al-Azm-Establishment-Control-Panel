import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {
  const token =
    localStorage.getItem("token") || localStorage.getItem("userToken");

  const profileData = JSON.parse(localStorage.getItem("profileData") || "{}");
  const userRole = profileData.Permission || localStorage.getItem("userRole");

  // إذا كان غير مسجل دخول
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // إذا لم يمتلك الصلاحية المناسبة
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }

  // عرض المحتوى إذا كان مسجل دخول وله صلاحية
  return <Outlet />;
};

export default ProtectedRoute;
