import React, { useState, useRef } from 'react';
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";
import { CiCamera } from "react-icons/ci";
import { createAdmin } from '../../../../services/admin-service/adminService';

const AddAdmin = () => {
  const options = [
    { id: "volunteer-admin", title: "مشرف متطوعين", desc: "إدارة شؤون المتطوعين من القبول وتوزيع المهام وأعتماد الساعات" },
    { id: "youth-admin", title: "مشرف يافعين", desc: "التخطيط للأنشطة الموجهة لليافعين وإدارة حضورهم" },
    { id: "super-admin", title: "مشرف عام", desc: "إدارة إعدادات المنصة والتحكم بصلاحيات المشرفين" },
  ];

  const [office, setOffice] = useState("");
  const [selectedOption, setSelectedOption] = useState("volunteer-admin");
  const [selectedDate, setSelectedDate] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const fileInputRef = useRef(null);

  const validationSchema = yup.object({
    supervisorfullname: yup
      .string()
      .required("اسم المشرف الكامل مطلوب")
      .min(3, "يجب أن يتكون الاسم من 3 محارف على الأقل"),
    username: yup
      .string()
      .required("اسم المستخدم مطلوب")
      .min(3, "اسم المستخدم يجب أن يكون 3 محارف على الأقل"),
    email: yup
      .string()
      .email("البريد الإلكتروني غير صالح")
      .required("البريد الإلكتروني مطلوب"),
    phone: yup
      .string()
      .required("رقم الهاتف مطلوب"),
    password: yup
      .string()
      .required("كلمة السر مطلوبة")
      .min(8, "كلمة السر يجب أن تحتوي على 8 محارف على الأقل")
  });

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmitForm = async (values, { setSubmitting, resetForm, setErrors }) => {
    try {
      const formData = new FormData();
      formData.append("supervisorfullname", values.supervisorfullname);
      formData.append("username", values.username);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("password", values.password);

      if (office) {
        formData.append("office_id", office);
      }

      formData.append("roles[]", selectedOption);

      if (selectedDate) {
        const year = selectedDate.getFullYear();
        const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
        const day = String(selectedDate.getDate()).padStart(2, '0');
        formData.append("joining_date", `${year}-${month}-${day}`);
      }

      if (imageFile) {
        formData.append("image", imageFile);
      }

      const response = await createAdmin(formData);

      if (response?.status === "Success" || response?.data) {
        alert("تمت إضافة الأدمن بنجاح");
        resetForm();
        setSelectedDate(null);
        setImageFile(null);
        setOffice("");
      }
    } catch (error) {
      console.error("Validation Error Details:", error.response?.data);

      const apiValidationErrors = error.response?.data?.validationErrors;
      if (apiValidationErrors) {
        const formattedErrors = {};
        Object.keys(apiValidationErrors).forEach((key) => {
          // أخذ أول رسالة خطأ للحقل
          formattedErrors[key] = Array.isArray(apiValidationErrors[key])
            ? apiValidationErrors[key][0]
            : apiValidationErrors[key];
        });
        setErrors(formattedErrors);
      } else {
        const errorMessage = error.response?.data?.message || "حدث خطأ أثناء إضافة الأدمن، يرجى التأكد من البيانات المدخلة";
        alert(errorMessage);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className='add-admin'>
      <div className='p1'>
        <h4>إضافة أدمن جديد</h4>
        <p className='description'>قم بتعبئة البيانات أدناه لإضافة أدمن جديد في النظام. تأكد من دقة المعلومات المدخلة لضمان وصولها بشكل صحيح.</p>
      </div>

      <Formik
        initialValues={{
          supervisorfullname: "",
          username: "",
          email: "",
          phone: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmitForm}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit} className="class_form">
            <div className='container_data'>
              <div className='right_container_data'>
                <div className="class_field">
                  <label htmlFor="supervisorfullname">اسم المشرف الكامل</label>
                  <Field id="supervisorfullname" name="supervisorfullname" className="input" />
                  <ErrorMessage name="supervisorfullname" component="div" className="error_massage" />
                </div>
                <div className="class_field">
                  <label htmlFor="username">اسم المستخدم</label>
                  <Field id="username" name="username" className="input" />
                  <ErrorMessage name="username" component="div" className="error_massage" />
                </div>
              </div>

              <div className='left_container_data'>
                <p className='title'>رفع صورة <span className='optional'>(اختياري)</span></p>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <div
                  className='container_camera'
                  onClick={() => fileInputRef.current && fileInputRef.current.click()}
                >
                  {imageFile ? (
                    <img
                      src={URL.createObjectURL(imageFile)}
                      alt="Preview"
                      style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
                    />
                  ) : (
                    <CiCamera className='camera' />
                  )}
                </div>
              </div>
            </div>

            <div className='type_and_offic'>
              <div className='class_field class_offic'>
                <label htmlFor="office">المكتب</label>
                <select
                  id="office"
                  value={office}
                  onChange={(e) => setOffice(e.target.value)}
                  className='input'
                >
                  <option value="">اختر المكتب...</option>
                  <option value="1">المكتب الرئيسي</option>
                  <option value="2">المكتب التدريبي</option>
                  <option value="3">المكتب الإعلامي</option>
                </select>
              </div>

              <div className="class_field">
                <label>تاريخ الانضمام</label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="dd/MM/yyyy"
                  showMonthDropdown
                  showYearDropdown
                  scrollableYearDropdown
                  className='input'
                />
              </div>
            </div>

            <div className='email_and_phone'>
              <div className="class_field">
                <label htmlFor="email">* البريد الإلكتروني</label>
                <Field id="email" name='email' className="input" />
                <ErrorMessage name='email' component="div" className='error_massage' />
              </div>

              <div className="class_field">
                <label htmlFor="phone">رقم الهاتف</label>
                <Field id="phone" name='phone' className="input" />
                <ErrorMessage name='phone' component="div" className='error_massage' />
              </div>
            </div>

            <div className="class_password">
              <div className="class_field">
                <label htmlFor="password">كلمة السر</label>
                <Field id="password" name="password" type="password" className="input" placeholder="   8 محارف على الأقل   " />
                <ErrorMessage name="password" component="div" className="error_massage" />
              </div>
            </div>

            <p className='title_radio'>الصلاحيات الممنوحة:</p>
            <div className='class_type_user'>
              {options.map((item) => (
                <label key={item.id} className={`card ${selectedOption === item.id ? "activite" : ""}`}>
                  <input
                    type='radio'
                    name="roleOption"
                    value={item.id}
                    checked={selectedOption === item.id}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                  <div className='icon_and_title'>
                    <span className='icon'>
                      {selectedOption === item.id ? <MdRadioButtonChecked /> : <MdRadioButtonUnchecked />}
                    </span>
                    <h6>{item.title}</h6>
                    <p>{item.desc}</p>
                  </div>
                </label>
              ))}
            </div>

            <div className='container_button'>
              <button type="submit" disabled={isSubmitting} className='button'>
                {isSubmitting ? "جاري الإضافة..." : "إضافة"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddAdmin;