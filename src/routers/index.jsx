import React from "react";
import PageNotFound from "../page/page-not-found";

const EditActivite = React.lazy(() => import('../page/manage-activite/edit_activite/EditActivite'));
const ViewProfile = React.lazy(() => import('../page/admin_permissions/view-profile-admin'));
const Confirm = React.lazy(() => import('../page/manage-activite/confirm/Confirm'));
const RequirmentUnactivite = React.lazy(() => import('../page/manage-activite/requirment_unactivite/RequirmentUnactivite'));
const DetailsAtivite = React.lazy(() => import('../page/manage-activite/details_activite/DetailsActivite'));
const AddActivite = React.lazy(() => import('../page/manage-activite/add_activite/AddActivite'));
const ManagePoint = React.lazy(() => import('../page/manage-point/index'));
const AdminPersonality = React.lazy(() => import('../page/admin_permissions/AdminPermissions'));
const AddUser = React.lazy(() => import('../page/manage-users/add-user/addUser'));
const EditUser = React.lazy(() => import('../page/manage-users/edit-user/EditUser'));
const ViewFileUser = React.lazy(() => import('../page/manage-users/view_file_user/ViewFileUser'));
const ControlPanel = React.lazy(() => import('../page/control_panel/ControlPanel'));
const Notification = React.lazy(() => import('../page/control_panel/control-panel-notification/Notification'));
const Dashboard = React.lazy(() => import('../page/control_panel/ControlPanel'));
const AddAdminOrCurrentAdmin = React.lazy(() => import('../page/admin_permissions/add_admin_or_current_admin/AddAdminOrCurrentAdmin'));
const ManageUsers = React.lazy(() => import('../page/manage-users/ManageUsers'));
const ManageNotification = React.lazy(() => import('../page/manage-notification/ManageNotification'));
const ManageActivite = React.lazy(() => import('../page/manage-activite/ManageActivite'));

export const routes = [
    { path: "/controlpanel", element: <Dashboard /> },
    { path: "/addUser", element: <AddUser /> },
    { path: "/viewFileUser", element: <ViewFileUser /> },
    { path: "/viewFileUser/:id", element: <ViewFileUser /> },
    { path: "/DetailsActivite/:id", element: <DetailsAtivite /> },
    { path: "/requirmentUnactivite", element: <RequirmentUnactivite /> },
    { path: "/editActivite/:id", element: <EditActivite /> },
    { path: "/confirm", element: <Confirm /> },
    { path: "/confirm/:id", element: <Confirm /> },
    { path: "/adminPersinality", element: <AdminPersonality /> },
    { path: "/addAdminOrCrrentAdmin", element: <AddAdminOrCurrentAdmin /> },
    { path: "/addActivite", element: <AddActivite /> },
    { path: "/manageNotification", element: <ManageNotification /> },
    { path: "/ManagePoint", element: <ManagePoint /> },
    { path: "/manageusers", element: <ManageUsers /> },
    { path: "/manageActivite", element: <ManageActivite /> },
    { path: "/editUser/:id", element: <EditUser /> },
    { path: "/notificaton", element: <Notification /> },

    { path: "/viewprofile", element: <ViewProfile /> },
    { path: "/viewprofile/:id", element: <ViewProfile /> },

    { path: "*", element: <PageNotFound /> }
];