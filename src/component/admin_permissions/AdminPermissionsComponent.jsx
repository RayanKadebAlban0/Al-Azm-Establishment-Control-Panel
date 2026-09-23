import React, { useState } from "react";
import { Styles } from "./style";
import CurrentAdmin from "./add_admin_or_current_admin/current_admin/CurrentAdmin";
import AddAdmin from "./add_admin_or_current_admin/add_admin/AddAdmin";



const AddAdminOrCurrentAdminComponent = () => {
  const [activeTab, setActiveTab] = useState("current");

  return (
    <Styles dir="rtl">
      <div className="admin-page">

        <div className="tabs-container">
          <button
            type="button"
            className={`tab-btn ${
              activeTab === "current" ? "active" : ""
            }`}
            onClick={() => setActiveTab("current")}
          >
            الأدمن الحالي
          </button>

          <button
            type="button"
            className={`tab-btn ${
              activeTab === "add" ? "active" : ""
            }`}
            onClick={() => setActiveTab("add")}
          >
            إضافة أدمن
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "current" ? (
            <CurrentAdmin />
          ) : (
            <AddAdmin />
          )}
        </div>

      </div>
    </Styles>
  );
};

export default AddAdminOrCurrentAdminComponent;