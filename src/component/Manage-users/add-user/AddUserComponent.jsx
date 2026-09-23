import React, { useState } from "react";
import { Styles } from "./style";
import CustomRadio from "../../common/custom-radio/CustomRadio";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { Field,ErrorMessage } from "formik";

import { PiWarningCircle } from "react-icons/pi";
import { MdInstallMobile } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { MdRadioButtonChecked } from "react-icons/md";
import PostVolunteer from "../../../services/user/post-volunteer/PostVolunteer.js"
   import PostYounth from "../../../services/user/post-younth/PostYounth.js";
import InformationPersonality from "../information-personality/InformationPersonality";
import InformationContact from "../information-contact/InformationContact";
import Switch from '@mui/material/Switch';
import { useParams } from "react-router-dom";
import PostEditVolunteer from "../../../services/user/post-volunteer/PostEditVolunteer.js";
import {BlockUser} from "../../../services/user/block-user/BlockUser"

const AddUserComponent = ({isEdit}) => {
const {id}=useParams();

  const [selectedOption, setSelectedOption] = useState("volunteer");
const [selectState,setSelectState]=useState("1")
const [selectjob,setSelectJob]=useState("1")
const [selectStateParents,setSelectStateParents]=useState("1")
const [selectPresenceParents,setSelectPresenceParents]=useState("1")

const [isActive, setIsActive] = useState(true); 
  const handleBlock=async()=>{
    const response=await  BlockUser(id)

    alert("تم تعطيل الحساب بنجاح")
    console.log (`block user id${id}`,response)
  }
    const handleToggle = () => {
        setIsActive(!isActive); 
    };


const PostAddvolunteer=async(values)=>{
 const response=await PostVolunteer(values);
console.log("post volunteer",response)
}
  const options = [
   
    {
      id: "volunteer",
      title: "متطوع",
      desc: "مخصص للأعمار الاكبر ضمن برامج المتطوعين",
    },
     {
      id: "younth",
      title: "يافع",
      desc: "مخصص للأعمار الاصغر ضمن برامج اليافعين",
    },
  ];
  const stateScholastic=[{
    id:"dropped_out",title:"منقطع"},
   {id:"continuing",title:"مستمر"}];

   const job=[{
    id:"1",title:"نعم"},
   {id:"0",title:"لا"}];

   const stateParents=[{
    id:"separated",title:"منفصلان"},
   {id:"together",title:"غير منفصلان"}];
 
    const PresenceParents=[{
       id:"father_only",title:"الأب فقط"},
   {id:"mother_only",title:"الأم فقط"},
  { id:"both",title:"كلاهما موجدان"},
   {id:"none",title:"كلاهما غير موجدان"}]
   const handleCheckedState=(e)=>{
    setSelectState(e.target.value)
    
   }
   const handleCheckedJob=(e)=>{
    setSelectJob(e.target.value)
   }
   const handleCheckedStateParents=(e)=>{
    setSelectStateParents(e.target.value)
   }
   const handleCheckedPresenceParents=(e)=>{
    setSelectPresenceParents(e.target.value)
   }
 
  const validationSchema = yup.object({
   first_name: yup
      .string()
      .required("ادخل الاسم الأول")
      .test("ادخل الاسم الأول بحيث عدد المحارف اكبر من  2", function (value) {
        return value.length > 2;
      }),
        last_name: yup
      .string()
      .required("ادخل الكنية")
      .test("ادخل الكنية بحيث عدد المحارف اكبر من 2", function (value) {
        return value.length > 2;
      }),

       father_name: yup
      .string()
      .required("ادخل اسم الأب")
      .test("ادخل اسم الأب بحيث عدد المحارف اكبر من 2", function (value) {
        return value.length > 2;
      }),
       mother_full_name : yup
      .string()
      .required("ادخل  اسم الأم كامل ")
      .test("ادخل اسم الأم كامل  بحيث عدد المحارف اكبر من 2", function (value) {
        return value.length > 2;
      }),
       gender : yup
      .string()
      .required("اختار الجنس")
     ,
  birth_date: yup
      .string()
      .required("ادخل تاريخ الميلاد")
      ,
        phone: yup
      .string()
      .required("ادخل رقم الجوال")
      ,
    email: yup
      .string()
      .required("ادخل البريد الإلكتروني")
      .test("دخل الايميل بشكل صحيح", function (value) {
        const isEmail = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/.test(value);

        return isEmail;
      }),
      office_ids: yup
  .array()
  .min(1, "اختار المكتب")
  .required("اختار المكتب"),

          address: yup
      .string()
      .required("اختار العنوان")
      ,
       username: yup
      .string()
      .required("ادخل الاسم المستخدم")
      .test("ادخل الاسم المستخدم بحيث عدد المحارف اكبر من  2", function (value) {
        return value.length > 2;
      }),

 });
  return (
    <Styles>

      <h4>
      {isEdit?"تعديل بيانات مستخدم":" إضافة مستخدم جديد"}
        </h4>
      <Formik
        initialValues={{
          first_name: "",
  last_name: "",
  father_name: "",
  mother_full_name: "",
  birth_date: "",
  address: "",
  backup_phone: "",
  email: "",
  father_phone: "",
  mother_phone:"",
  phone: "",
  start_date: "",
  temp_password: "",
  username: "",
  whatsapp_phone: "",
  landline_phone: "",
  office_ids: [],
  gender: "",
image:"",
start_date:"",
is_active:"",
educational_status:"",
parents_living_status:"",
educational_grade:"",
        }}
        validationSchema={isEdit?"":validationSchema}
       onSubmit={async (values) => {

  const formData = new FormData();

  // دالة ذكية لإرسال الحقول فقط إذا لها قيمة
  const appendIfExists = (key, value) => {
    if (value !== null && value !== undefined && value !== "") {
      formData.append(key, value);
    }
  };

  // الحقول الأساسية (تُرسل دائمًا لأنها مطلوبة)
  appendIfExists("first_name", values.first_name);
  appendIfExists("last_name", values.last_name);
  appendIfExists("father_name", values.father_name);
  appendIfExists("mother_full_name", values.mother_full_name);
  appendIfExists("birth_date", values.birth_date);
  appendIfExists("address", values.address);
  appendIfExists("gender", values.gender || "female");
  appendIfExists("username", values.username);

  // الصورة إذا موجودة
  appendIfExists("image", values.image);

  // المكتب
  const officeIds = values.office_ids?.length ? values.office_ids : [1];
  officeIds.forEach((id, index) => {
    formData.append(`office_ids[${index}]`, id);
  });

  // الحقول التي تُرسل فقط إذا لها قيمة
  appendIfExists("email", values.email);
  appendIfExists("phone", values.phone);
  appendIfExists("mother_phone", values.mother_phone);
  appendIfExists("father_phone", values.father_phone);
  appendIfExists("backup_phone", values.backup_phone);
  appendIfExists("whatsapp_phone", values.whatsapp_phone);
  appendIfExists("landline_phone", values.landline_phone);
  appendIfExists("start_date", values.start_date);
  appendIfExists("temp_password", values.temp_password);

  // حالة اليافعين فقط
  if (selectedOption === "younth") {
    appendIfExists("educational_status", selectState);
    appendIfExists("is_working", selectjob);
    appendIfExists("parents_marital_status", selectStateParents);
    appendIfExists("parents_living_status", selectPresenceParents);

    appendIfExists("educational_grade", values.educational_grade);

    await PostYounth(formData);
  }

  // حالة المتطوع
  else {
    if (isEdit) {
      
      if(!isActive){
        handleBlock()
      }
      else{
formData.append("is_active",yup.boolean(true))
      }
      await PostEditVolunteer(formData, id);
      
    } else {
      await PostVolunteer(formData);
    }
  }

}}

      >
        {({ handleSubmit, isSubmitting,resetForm ,errors,touched,setFieldTouched}) => (
          <Form onSubmit={handleSubmit} className="class_form">
             <h5 className="sub_title">العضوية</h5>
            <div className="class_field">
              {" "}
              <label className="title_categorie"> الفئة</label>
              <div className="class_type_user">
                {options.map((item, index) => {
                  return (
                    <label
                      key={index}
                      className={`card ${selectedOption === item.id ? "activite" : ""}`}
                    >
                      <input
                        type="radio"
                        value={item.id}
                        checked={selectedOption === item.id}
                        onChange={(e) => {
                          setSelectedOption(e.target.value);
                        }}
                      />
                      <div className="content">
                        <div className="" dir="ltr">
                          <span className="icon">
                            {selectedOption === item.id ? (
                              <FaRegCheckCircle />
                            ) : (
                              <MdRadioButtonUnchecked />
                            )}
                              </span>
                          <p className="title_role">{item.title}</p>
                        </div>

                        <p className="description">{item.desc}</p>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
            <InformationPersonality className="personality" />
            {selectedOption==="younth"?(
              <><div className="container_row_custom_radio">
                       
<CustomRadio state={selectState} title="الحالة التعليمية" data={stateScholastic} handle={handleCheckedState}/>
<CustomRadio state={selectjob} title="هل يعمل" data={job} handle={handleCheckedJob}/>

            </div>
            <div className="container_row_custom_radio">
               <div className="class_filed">
                  <label name='educational_grade' className="label">الصف الدراسي</label>
                                                   <Field name='educational_grade' className="input"/>
                                                   <ErrorMessage name='educational_grade' component="div" className='error_massage' />
                                                   </div>
                                                   <CustomRadio state={selectStateParents} title="حالة العلاقة الزوجية للوالدان" data={stateParents} handle={handleCheckedStateParents}/>

            </div>  <div className="container_presence_parents">
              
   <CustomRadio state={selectPresenceParents} title="هل الوالدان موجدان؟" data={PresenceParents} handle={handleCheckedPresenceParents}/>

            </div>
</> 
             
            ):(<></>)}
          
   

            <h5 className="sub_title">بيانات الاتصال</h5>
            <InformationContact selectedOption={selectedOption}  isEdit={isEdit}/>

           {isEdit?(<div className="state_acount" style={{display:"flex",justifyContent:"space-between" ,width:"90%",border:"1px solid black",borderRadius:"10px",padding:"10px",marginTop:"40px"}}>
<div className="right_container">
<div className="row_container" style={{display:"flex",gap:"10px"}}>
<b>حالة الحساب</b>
<div className="state" style={{borderRadius:"10px",backgroundColor:isActive?"green":"red",padding:"2px 5px"}}>
 <small>
  {isActive?" نشط الأن":"غير نشط"}
   
  </small> 
</div>
</div>
<small style={{color:"gray"}}> عند التعطيل لن يتمكن المستخدم من تسجيل الدخول لكن بياناته ستبقى محفوظة </small>

</div>
 <div className="left_container" style={{ display: "flex", marginTop: "20px", padding: "10px" }}>
            <Switch checked={isActive} onChange={handleToggle} style={{color:isActive? "green" : "red" }} />
            <p style={{ color: isActive ? "green" : "red" }}>
                {isActive ? "الحساب نشط" : "الحساب غير نشط"}
            </p>
        </div>
           </div>):(
 <div className="massage_warning">
              <PiWarningCircle />
              سيتم إنشاء كلمة مرور مؤقتة تلقائياً. سيطلب من المستخدم تغيرها عند أول 
               تسجيل دخول لضمان أمان الحساب
            </div>
           )}
           <div style={{display:"flex",justifyContent:"space-between",width:"90%"}}>
<div className={isEdit?"edit_account":"add_account" }>
              {" "}
              <button className="button" type="submit"  disabled={isSubmitting}>
                <MdInstallMobile />
                {isEdit?("حفظ التعديلات"):(" إنشاء حساب")}
                 </button>
              <button className="button" type="button" onClick={()=>{resetForm()}}>
              
                إلغاء
              </button>
              {/* {isEdit?(<></>):(<button className="button" type="button">
                <MdInstallMobile />
                حفظ كمسودة
              </button>)}
               */}
            </div>
                         {/* {isEdit?(<button style={{color:"red",backgroundColor:"transparent",border:"none"}}>حذف الحساب نهائيا</button>):(<></>)} */}

           </div>
            
          </Form>
        )}
      </Formik>
    </Styles>
  );
};

export default AddUserComponent;
