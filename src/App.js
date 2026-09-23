import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { routes } from "./routers";
import { I18nextProvider, useTranslation } from "react-i18next";
import React from "react";
import ProtectedRoute from "./services/ProtectedRoute";

const LogIn = React.lazy(() => import("./page/log-in/LogIn"));
const Layout = React.lazy(() => import("./component/Layout"));
const PageNotFound = React.lazy(() => import("./page/page-not-found"));

function App() {
  const { i18n } = useTranslation();

  const router = createBrowserRouter([
    {
      path: "/login",
      element: (
        <React.Suspense fallback={<div>Loading...</div>}>
          <LogIn />
        </React.Suspense>
      ),
      errorElement: <PageNotFound />,
    },
    {
      path: "/",
      element: <Navigate to="/login" replace />,
    },

    {
      element: (
        <ProtectedRoute
          allowedRoles={["superAdmin", "volunteerAdmin", "youthAdmin"]}
        />
      ),
      children: [
        {
          element: <Layout />,
          errorElement: <PageNotFound />,
          children: routes,
        },
      ],
    },
  ]);

  return (
    <I18nextProvider i18next={i18n}>
      <div dir="rtl">
        <RouterProvider router={router} />
      </div>
    </I18nextProvider>
  );
}

export default App;