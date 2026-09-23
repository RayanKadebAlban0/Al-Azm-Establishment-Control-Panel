import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Styles } from "./styles";

const BREADCRUMB_CONFIG = {
  "/controlpanel": {
    title: "الرئيسية",
    parent: null,
  },

  // أنشطة
  "/manageActivite": {
    title: "إدارة الأنشطة",
    parent: "/controlpanel",
  },
  "/addActivite": {
    title: "إضافة نشاط",
    parent: "/manageActivite",
  },
  "/editActivite/:id": {
    title: "تعديل نشاط",
    parent: "/manageActivite",
  },
  "/DetailsActivite/:id": {
    title: "تفاصيل النشاط",
    parent: "/manageActivite",
  },
  "/confirm": {
    title: "تأكيد النشاط",
    parent: "/manageActivite",
  },
  "/confirm/:id": {
    title: "تأكيد النشاط",
    parent: "/manageActivite",
  },
  "/requirmentUnactivite": {
    title: "طلبات إلغاء النشاط",
    parent: "/manageActivite",
  },

  // مستخدمين
  "/manageusers": {
    title: "إدارة المستخدمين",
    parent: "/controlpanel",
  },
  "/addUser": {
    title: "إضافة مستخدم",
    parent: "/manageusers",
  },
  "/editUser/:id": {
    title: "تعديل مستخدم",
    parent: "/manageusers",
  },
  "/viewFileUser": {
    title: "ملف المستخدم",
    parent: "/manageusers",
  },
  "/viewFileUser/:id": {
    title: "ملف المستخدم",
    parent: "/manageusers",
  },

  // باقي الصفحات
  "/manageNotification": {
    title: "إدارة الإشعارات",
    parent: "/controlpanel",
  },
  "/ManagePoint": {
    title: "إدارة النقاط",
    parent: "/controlpanel",
  },
  "/adminPersinality": {
    title: "صلاحيات المسؤول",
    parent: "/controlpanel",
  },
  "/addAdminOrCrrentAdmin": {
    title: "الأدمن الحالي",
    parent: "/adminPersinality",
  },
  "/notificaton": {
    title: "الإشعارات",
    parent: "/controlpanel",
  },
};

const BreadcrumbComponent = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // مطابقة المسار الحالي مع مفاتيح الإعدادات
  const matchRoute = (configPath, actualPath) => {
    const configParts = configPath.split("/").filter(Boolean);
    const actualParts = actualPath.split("/").filter(Boolean);

    if (configParts.length !== actualParts.length) return false;

    return configParts.every((part, index) => {
      if (part.startsWith(":")) return true;
      return part.toLowerCase() === actualParts[index].toLowerCase();
    });
  };

  const findConfigKey = (path) => {
    return Object.keys(BREADCRUMB_CONFIG).find((key) => matchRoute(key, path));
  };

  const buildActualPath = (configPath, originalPath) => {
    if (!configPath.includes(":")) return configPath;

    const configParts = configPath.split("/").filter(Boolean);
    const originalParts = originalPath.split("/").filter(Boolean);

    const result = configParts.map((part, index) => {
      if (part.startsWith(":")) {
        return originalParts[index] || "";
      }
      return part;
    });

    return `/${result.join("/")}`;
  };

  const getBreadcrumbChain = (path) => {
    const chain = [];
    let currentKey = findConfigKey(path);

    while (currentKey && BREADCRUMB_CONFIG[currentKey]) {
      const routeInfo = BREADCRUMB_CONFIG[currentKey];

      chain.unshift({
        path: buildActualPath(currentKey, path),
        title: routeInfo.title,
      });

      currentKey = routeInfo.parent;
    }

    return chain;
  };

  const breadcrumbChain = getBreadcrumbChain(currentPath);

  if (breadcrumbChain.length <= 1) {
    return null;
  }

  return (
    <Styles>
      {breadcrumbChain.map((item, index) => {
        const isLast = index === breadcrumbChain.length - 1;

        return (
          <React.Fragment key={`${item.path}-${index}`}>
            {index > 0 && <span className="breadcrumb_separator">&lt;</span>}

            {isLast ? (
              <span className="breadcrumb_active">{item.title}</span>
            ) : (
              <Link to={item.path} className="breadcrumb_link">
                {item.title}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </Styles>
  );
};

export default BreadcrumbComponent;