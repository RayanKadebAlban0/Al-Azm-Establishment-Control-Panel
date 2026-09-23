import React, { useEffect, useState } from "react";
import { Styles } from "./styles";

import * as yup from "yup";
import {
  Formik,
  Form,
  ErrorMessage,
  Field,
} from "formik";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { PiWarningCircle } from "react-icons/pi";
import { CiCamera } from "react-icons/ci";

import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASEURL;

const AddActiviteComponent = ({ mode = "add" }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const isAddMode = mode === "add";
  const isEditMode = mode === "edit";
  const isViewMode = mode === "view";

  const [loading, setLoading] = useState(!isAddMode);
  const [activity, setActivity] = useState(null);

  const [time, setTime] = useState("");
  const [typeActivite, setTypeActivite] = useState("");
  const [office, setOffice] = useState("");

  const [selectedOptions, setSelectedOptions] =
    useState(["volunteer"]);

  const handleTargetAudienceChange = (value) => {
    setSelectedOptions((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      }

      return [...prev, value];
    });
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [activityImage, setActivityImage] = useState(null);
  const [activityImagePreview, setActivityImagePreview] =
    useState("");

  const [badgeImage, setBadgeImage] = useState(null);

  const initialValues = {
    name: "",
    description: "",
    required_count: "",
    location: "",
    manage: "",
    link: "",
    google: "",
    requirements: "",
    completion_points: "",
  };

  const [formInitialValues, setFormInitialValues] =
    useState(initialValues);

  const options = [
    {
      id: "youth",
      value: "youth",
      title: "يافعين",
    },
    {
      id: "volunteer",
      value: "volunteer",
      title: "متطوعين",
    },
  ];


  const timestampToDate = (value) => {
    if (!value) return null;

    let date;

    if (
      typeof value === "number" ||
      /^\d+$/.test(String(value))
    ) {
      date = new Date(Number(value) * 1000);
    } else {
      date = new Date(value);
    }

    return Number.isNaN(date.getTime()) ? null : date;
  };

  const formatDate = (date) => {
    if (!date) return "";

    const year = date.getFullYear();

    const month = String(
      date.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
      date.getDate()
    ).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const normalizeImageUrl = (url) => {
    if (!url) return "";

    if (url.startsWith("http://")) {
      return url.replace("http://", "https://");
    }

    if (url.startsWith("https://")) {
      return url;
    }

    return `${BASE_URL}/${url.replace(/^\/+/, "")}`;
  };

  useEffect(() => {
    if (isAddMode) {
      setLoading(false);
      return;
    }

    const fetchActivity = async () => {
      try {
        setLoading(true);

        const token = localStorage.getItem("token");

        const response = await axios.get(
          `${BASE_URL}/api/admin/activities/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = response.data?.data;

        if (!data) {
          throw new Error("Activity data not found");
        }

        console.log("Activity details:", data);

        setActivity(data);


    setFormInitialValues({
          name: data.name || "",
          description: data.description || "",
          required_count:
            data.capacity !== null && data.capacity !== undefined
              ? data.capacity
              : "",
          completion_points: data.completion_points || "", // 👈 جلب قيمتها إن وجدت
          location: data.location_name || "",
          manage: data.coordinator_id || "",
          link: data.location_url || "",
          google: data.google_form_url || "",
          requirements: data.requirements || "",
        });

        setTypeActivite(data.activity_type || "");

        if (data.target_audience === "both") {
          setSelectedOptions(["youth", "volunteer"]);
        } else if (data.target_audience === "youth") {
          setSelectedOptions(["youth"]);
        } else if (data.target_audience === "volunteer") {
          setSelectedOptions(["volunteer"]);
        } else {
          setSelectedOptions(["volunteer"]);
        }
        setOffice(
          data.office_id
            ? String(data.office_id)
            : ""
        );

        setTime(
          data.start_time
            ? data.start_time.substring(0, 5)
            : ""
        );

        setSelectedDate(
          timestampToDate(data.start_date)
        );

        setEndDate(
          timestampToDate(data.end_date)
        );

        const imageUrl = data.image_url || data.image;

        if (imageUrl) {
          console.log("IMAGE URL:", imageUrl);

          setActivityImagePreview(
            normalizeImageUrl(imageUrl)
          );
        }
      } catch (error) {
        console.error(
          "خطأ أثناء جلب النشاط:",
          error
        );

        alert("تعذر تحميل بيانات النشاط");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchActivity();
    }
  }, [id, isAddMode]);

  const validationSchema = yup.object({
    name: yup
      .string()
      .required("ادخل اسم النشاط")
      .min(
        3,
        "يجب أن يكون الاسم أكثر من حرفين"
      ),

    description: yup
      .string()
      .required("ادخل وصف النشاط"),
  });


  const handleActivityImageChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setActivityImage(file);

    const previewUrl =
      URL.createObjectURL(file);

    setActivityImagePreview(previewUrl);
  };

  const submitActivity = (values) => {
    
    if (isAddMode && !activityImage) {
      alert("يرجى رفع صورة النشاط");
      return null;
    }

    if (!typeActivite) {
      alert("يرجى اختيار نوع النشاط");
      return null;
      
    }

    if (!selectedDate) {
      alert("يرجى اختيار تاريخ بداية النشاط");
      return null;
    }

    if (!time) {
      alert("يرجى اختيار الوقت");
      return null;
    }

    if (!office) {
      alert("يرجى اختيار المكتب");
      return null;
    }
    console.log("selectedOptions:", selectedOptions);
    const formData = new FormData();

    formData.append("name", values.name);
    formData.append("description", values.description);

    formData.append(
      "activity_type",
      typeActivite
    );

    // selectedOptions.forEach((item) => {
    //   formData.append("target_audience[]", item);
    // });

    let targetAudience = "";

    if (
      selectedOptions.includes("youth") &&
      selectedOptions.includes("volunteer")
    ) {
      targetAudience = "both";
    } else if (selectedOptions.includes("youth")) {
      targetAudience = "youth";
    } else if (selectedOptions.includes("volunteer")) {
      targetAudience = "volunteer";
    }

    if (!targetAudience) {
      alert("يرجى اختيار الفئة المستهدفة");
      return null;
    }

    formData.append(
      "target_audience",
      targetAudience
    );

    console.log("target_audience:", targetAudience);

    formData.append(
      "start_date",
      formatDate(selectedDate)
    );

    if (endDate) {
      formData.append(
        "end_date",
        formatDate(endDate)
      );
    } else if (isEditMode) {
      formData.append("end_date", "");
    }

    let formattedTime = time;

    if (formattedTime.length === 5) {
      formattedTime = `${formattedTime}:00`;
    }

    formData.append(
      "start_time",
      formattedTime
    );

    formData.append(
      "office_id",
      office
    );

    formData.append(
      "location_name",
      values.location || ""
    );

    formData.append(
      "location_url",
      values.link || ""
    );

    formData.append(
      "google_form_url",
      values.google || ""
    );

    formData.append(
      "capacity",
      values.required_count || ""
    );

    formData.append(
      "requirements",
      values.requirements || ""
    );
if (typeActivite === "training" && values.completion_points) {
      formData.append("completion_points", values.completion_points);
    }

    if (activityImage instanceof File) {
      formData.append(
        "image",
        activityImage
      );
    }

    if (badgeImage instanceof File) {
      formData.append(
        "new_badges[0][icon]",
        badgeImage
      );

      formData.append(
        "new_badges[0][name]",
        values.name || "شارة النشاط"
      );
    }

    //  البيانات المرسلة
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }

    return formData;
  };

  const handleSave = async (values, { setSubmitting }) => {
    try {
      const formData = submitActivity(values);
if (values.completion_points) {
  formData.append("completion_points", values.completion_points);
}
      if (!formData) {
        setSubmitting(false);
        return;
      }
      if (!formData) return;

      const token = localStorage.getItem("token");

      let response;

      if (isEditMode) {
        response = await axios.post(
          `${BASE_URL}/api/admin/activities/${id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Update response:", response.data);

        alert("تم تحديث بيانات النشاط بنجاح");

        navigate(`/DetailsActivite/${id}`);
      } else {
        response = await axios.post(
          `${BASE_URL}/api/admin/activities`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Create response:", response.data);

        alert("تم إضافة النشاط بنجاح");

        navigate("/manageActivite");
      }
    } catch (error) {
      console.error("Activity save error:", error);
      console.error("Backend response:", error.response?.data);

      const backendData = error.response?.data;

      if (backendData?.validationErrors) {
        alert(
          "خطأ في البيانات:\n" +
          JSON.stringify(backendData.validationErrors, null, 2)
        );
      } else if (backendData?.errors) {
        alert(
          "خطأ في البيانات:\n" +
          JSON.stringify(backendData.errors, null, 2)
        );
      } else {
        alert(
          backendData?.message ||
          "حدث خطأ أثناء حفظ بيانات النشاط"
        );
      }
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "50px",
        }}
      >
        جاري تحميل بيانات النشاط...
      </div>
    );
  }

  return (
    <Styles>
      <Formik
        initialValues={formInitialValues}
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={handleSave}
      >
        {({
          handleSubmit,
          isSubmitting,
        }) => (
          <Form
            onSubmit={handleSubmit}
            className="class_form_grid"
          >
            {/* // ========================== */}


            <div className="part1">
              <div className="partRight">
                <div className="class_field">
                  <label>
                    اسم النشاط
                  </label>

                  <Field
                    name="name"
                    className="input"
                    disabled={isViewMode}
                  />

                  {!isViewMode && (
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error_massage"
                    />
                  )}
                </div>

                <div className="class_field textarea_field">
                  <label>
                    وصف النشاط
                  </label>

                  <Field
                    name="description"
                    as="textarea"
                    className="input textarea_input"
                    disabled={isViewMode}
                  />

                  {!isViewMode && (
                    <ErrorMessage
                      name="description"
                      component="div"
                      className="error_massage"
                    />
                  )}
                </div>
              </div>

              {/* الصور */}

              <div className="partLeft">
                <div className="upload_section_row">
                  <div className="upload_box_wrapper">
                    <p className="title">
                      رفع صورة النشاط
                    </p>

                    <label
                      htmlFor={
                        !isViewMode
                          ? "activity-upload"
                          : undefined
                      }
                      className={`container_camera ${isViewMode
                        ? "disabled_upload"
                        : ""
                        }`}
                    >
                      {activityImagePreview ? (
                        <img
                          src={
                            activityImagePreview
                          }
                          alt="activity"
                          className="activity_image_preview"
                        />
                      ) : (
                        <div className="camera">
                          <CiCamera />
                        </div>
                      )}

                      {!isViewMode && (
                        <input
                          id="activity-upload"
                          type="file"
                          accept="image/*"
                          style={{
                            display: "none",
                          }}
                          onChange={
                            handleActivityImageChange
                          }
                        />
                      )}
                    </label>
                  </div>

                  <div className="upload_box_wrapper">
                    <p className="title">
                      رفع صورة الشارة
                    </p>

                    <label
                      htmlFor={
                        !isViewMode
                          ? "badge-upload"
                          : undefined
                      }
                      className="container_camera"
                    >
                      <div className="camera">
                        <CiCamera />
                      </div>

                      {!isViewMode && (
                        <input
                          id="badge-upload"
                          type="file"
                          accept="image/*"
                          style={{
                            display: "none",
                          }}
                          onChange={(e) =>
                            setBadgeImage(
                              e.target
                                .files?.[0] ||
                              null
                            )
                          }
                        />
                      )}
                    </label>

                    {badgeImage && (
                      <p className="file_name_preview">
                        {badgeImage.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* // ========================== */}

            <div className="part2">
              <div className="class_field">
                <label>
                  نوع النشاط
                </label>

                <select
                  value={typeActivite}
                  onChange={(e) =>
                    setTypeActivite(
                      e.target.value
                    )
                  }
                  className="input"
                  disabled={isViewMode}
                >
                  <option value="">
                    اختر نوع النشاط
                  </option>

                  <option value="initiative">
                    مبادرة
                  </option>

                  <option value="training">
                    تدريب
                  </option>

                  <option value="event">
                    فعالية
                  </option>
                </select>

                {/* //اضافة النقاط */}
                 {/* <div className="class_field">
                <label>العدد المطلوب</label>
                <Field
                  name="required_count"
                  type="number"
                  className="input"
                  disabled={isViewMode}
                />
              </div> */}

              {/*  يظهر حقل النقاط فقط عند اختيار "تدريب" */}
              {typeActivite === "training" && (
                <div className="class_field">
                  <label>نقاط الإنجاز (نقاط التدريب)</label>
                  <Field
                    name="completion_points"
                    type="number"
                    placeholder="أدخل عدد النقاط"
                    className="input"
                    disabled={isViewMode}
                  />
                </div>
              )}
          
              </div>

              <div className="class_field">
                <label>
                  الفئة المستهدفة
                </label>

                <div className="class_type_user_row">
                  {options.map((item) => {
                    const isSelected = selectedOptions.includes(item.value);

                    return (
                      <label
                        key={item.id}
                        className={`card_radio ${isSelected ? "activite" : ""
                          }`}
                      >
                        <input
                          type="checkbox"
                          value={item.value}
                          checked={isSelected}
                          disabled={isViewMode}
                          onChange={() =>
                            handleTargetAudienceChange(item.value)
                          }
                        />

                        <div className="icon_and_title">
                          <h6>{item.title}</h6>

                          <span
                            className={`toggle_switch ${isSelected ? "active" : ""
                              }`}
                          >
                            <span className="toggle_circle" />
                          </span>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* العدد */}

            <div className="class_field full_width_row">
              <label>
                العدد المطلوب
              </label>

              <Field
                name="required_count"
                type="number"
                className="input"
                disabled={isViewMode}
              />
            </div>

            {/* //========================== */}


            <div className="part3">
              <div className="class_field">
                <label>
                  تاريخ بداية النشاط
                </label>

                <DatePicker
                  selected={selectedDate}
                  onChange={
                    setSelectedDate
                  }
                  dateFormat="yyyy-MM-dd"
                  placeholderText="yyyy-MM-dd"
                  className="input"
                  disabled={isViewMode}
                />
              </div>

              <div className="class_field">
                <label>
                  تاريخ نهاية النشاط
                </label>

                <DatePicker
                  selected={endDate}
                  onChange={setEndDate}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="yyyy-MM-dd"
                  className="input"
                  disabled={isViewMode}
                />
              </div>
            </div>

            {/* // ========================== */}
            <div className="part4">
              <div className="class_field">
                <label>
                  الوقت
                </label>

                <input
                  type="time"
                  value={time}
                  disabled={isViewMode}
                  onChange={(e) =>
                    setTime(
                      e.target.value
                    )
                  }
                  className="input"
                />
              </div>

              <div className="class_field">
                <label>
                  الموقع
                </label>

                <Field
                  name="location"
                  className="input"
                  disabled={isViewMode}
                />
              </div>
            </div>

            {/* // ========================== */}
            <div className="part5">
              <div className="class_field">
                <label>
                  منسق النشاط
                </label>

                <Field
                  name="manage"
                  className="input"
                  disabled={isViewMode}
                />
              </div>

              <div className="class_field">
                <label>
                  المكتب
                </label>

                <select
                  value={office}
                  disabled={isViewMode}
                  onChange={(e) =>
                    setOffice(
                      e.target.value
                    )
                  }
                  className="input"
                >
                  <option value="">
                    اختر المكتب
                  </option>

                  <option value="1">
                    المكتب الرئيسي
                  </option>

                  <option value="2">
                    المكتب التدريبي
                  </option>

                  <option value="3">
                    المكتب الإعلامي
                  </option>
                </select>
              </div>
            </div>

            {/* المتطلبات */}

            <div className="class_field full_width_row">
              <label>
                متطلبات النشاط
              </label>

              <Field
                name="requirements"
                className="input"
                disabled={isViewMode}
              />
            </div>

            {/* رابط الموقع */}

            <div className="class_field full_width_row">
              <label>
                رابط الموقع
              </label>

              <Field
                name="link"
                className="input"
                disabled={isViewMode}
              />
            </div>

            {/* Google Form */}

            <div className="class_field full_width_row">
              <label>
                رابط Google Form
              </label>

              <Field
                name="google"
                className="input"
                disabled={isViewMode}
              />

              <div className="massage_warning">
                <PiWarningCircle />

                لا يمكن إرفاق Google Form مع الفعاليات
              </div>
            </div>

            {/* //============== */}

            <div className="container_button">
              {isViewMode ? (
                <button
                  type="button"
                  className="button"
                  onClick={() =>
                    navigate(
                      `/editActivite/${id}`
                    )
                  }
                >
                  تعديل
                </button>
              ) : (
                <button
                  type="submit"
                  className="button"
                  disabled={isSubmitting}
                >
                  {isEditMode
                    ? "حفظ التعديل"
                    : "إرسال للمراجعة"}
                </button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </Styles>
  );
};

export default AddActiviteComponent;