import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Styles } from "./style";

import CurrentAdmin from "./current_admin/CurrentAdmin";
import AddAdmin from "./add_admin/AddAdmin";

const AddAdminOrCurrentAdminComponent = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("current");

  return (
    <Styles dir="rtl">
      <div className="admin-page">

        {/* Tabs */}
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