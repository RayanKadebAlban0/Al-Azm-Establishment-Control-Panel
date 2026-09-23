import React, { useState } from 'react'
import { ErrorMessage, Field, Formik, Form } from 'formik';
import * as yup from "yup"
import { useDispatch } from 'react-redux';
import { setPorfileData } from '../../store/slice/profile-slice/ProfileSlice';
import { Styles } from './style';
import { FaCheck } from "react-icons/fa";
import { CiCircleChevLeft } from "react-icons/ci";
import { postRequest } from '../../services/https.services';
import { useNavigate } from 'react-router-dom';

const LogInComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validationSchema = yup.object({
    name: yup.string().required("ادخل الاسم او الايميل"),
    password: yup.string()
      .min(5, "ادخل عالاقل 5 أحرف")
      .required("ادخل ال password "),
  });

  const [check, setCheck] = useState(false);
  const handleChecked = (e) => {
    setCheck(e.target.checked)
  }

  return (
    <Styles>
      <CiCircleChevLeft />
      <Formik
        initialValues={{ name: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const formData = new FormData();
            formData.append('login', values.name);
            formData.append('password', values.password);

            const response = await postRequest('/admin/auth/login', formData);

            if (response.status === "Success" && response.data) {
              const { token, admin } = response.data;

              // تحديد الصلاحيات
              const mappedRole = admin.username === "superadmin" ? "superAdmin" : "volunteerAdmin";

              const userProfile = {
                id: admin.id,
                name: admin.username,
                email: admin.email,
                Permission: mappedRole
              };

              // حفظ البيانات
              localStorage.setItem('token', token);
              localStorage.setItem('userToken', token); 
              localStorage.setItem('userRole', mappedRole); 
              localStorage.setItem('profileData', JSON.stringify(userProfile));
              if (!check) {
                dispatch(setPorfileData(userProfile));
                alert("تم تسجيل الدخول بنجاح!");
                navigate('/ControlPanel');
              } else {
                localStorage.setItem('profileData', JSON.stringify(userProfile));
                dispatch(setPorfileData(userProfile));
                alert("تم حفظ البيانات وتثبيت الجلسة!");
                navigate('/ControlPanel');
              }
            } else {
              alert("فشل تسجيل الدخول: بيانات غير متطابقة.");
            }
          } catch (error) {
            const errorMsg = error.response?.data?.message || "فشل الاتصال بالسيرفر، يرجى المحاولة لاحقاً.";
            alert(errorMsg);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit} className='class_form' dir='rtl'>
            <div className="class_img_logo "><img src="logo.jpg" alt="logo"></img></div>
            <h1>مؤسسة العزم</h1>
            <h3>مرحباً بعودتك!</h3>

            <label>اسم المستخدم</label>
            <div className='class_container_field' dir='rtl'>
              <Field name='name' placeholder="أدخل الايميل أو اسم المستخدم" className="class_field" />
              {/* <FaCheck /> */}
            </div>
            <ErrorMessage name='name' component="div" className='error_massage' />

            <label>كلمة السر</label>
            <Field name='password' type="password" dir='rlt' className="class_field_password" />

            <div className='class_container_password'>
              <ErrorMessage name='password' component="div" className='error_massage' />
              <div className="class_checkbox ">
                <label>تذكرني</label>
                <Field name="rememberMe" type="checkbox" checked={check} onChange={(e) => {
                  handleChecked(e);
                }} />
              </div>
            </div>

            <button type="submit" disabled={isSubmitting} className='class_button'>
              {isSubmitting ? "جاري التحقق..." : "تسجيل الدخول"}
            </button>
            <p>نسيت كلمة السر؟</p>
          </Form>
        )}
      </Formik>
    </Styles>
  );
}

export default LogInComponent;