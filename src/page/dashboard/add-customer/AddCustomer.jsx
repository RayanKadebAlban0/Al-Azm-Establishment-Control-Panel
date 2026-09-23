import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { useSelector } from "react-redux";
import { Styles } from "./style";
import * as yup from "yup";
import { v4 as uuid } from "uuid";
import { useState } from "react";
const AddCustomer = ({ data, setData, setDisplay, add }) => {
  const profileData=useSelector((state)=>state.student2.profileData)
  // const [title, setTitle] = useState("444");
  const [domainYear,setDomainYear]=useState("ادمن");
  const handleAdd = async (values) => {
    const newData = [...data];

    const firstName = values.firstName;
  const lastName=values.lastName;
    const email = values.email;
    const year = values.year;
   
    const typeUser=domainYear;
alert(typeUser)
    newData.push({ id: uuid(), firstName,lastName, email,typeUser, year });

    await setData(newData);
  };

  const validationSchema = yup.object({
    firstName: yup
      .string()
      .required("ادخل الاسم")
      .test("ادخل  العنوان الصحيح", function (value) {
        return value.length > 2;
      }),
      lastName: yup
      .string()
      .required("ادخل الاسم")
      .test("ادخل  العنوان الصحيح", function (value) {
        return value.length > 2;
      }),
     
    email: yup
      .string()
      .required("ادخل الايميل")
      .test("دخل الايميل بشكل صحيح", function (value) {
        const isEmail = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/.test(value);

        return isEmail;
      }),
        year: yup.string("").required("ادخل ال عمر ")
        .test("العمر غير صحيح يجب ان يتوافق مع نوع المستخدم",function(value){
          if(domainYear==="ادمن"|| domainYear==="متطوع"||domainYear==="ادمن متطوعين" ||domainYear==="ادمن يافعين"){
            return value>18;
        }
    else {
       return value<18;
    }
  }
        ),
  
       
      password: yup.string()
      .required("ادخل كلمة المرور")
      .min(8, "ادخل عالاقل 8 احرف").matches(/^[A-Z]+[a-z]+[0-9]+[!@#$%?*]{1,}$/
        ,"كلمة المرور التي ادخلتها سهلة  ادخل كلمة تحوي ع حرف كبير وحرف صغير ورقم  ورمز خاص ع الاقل")
      .required("ادخل ال password "),
      confirmPassword: yup.string()
      .required("ادخل  تاكيد كلمة المرور")
      .min(8, "ادخل عالاقل 8 احرف")
      .oneOf([yup.ref('password'),null],"كلمة المرور والتاكيد غيلر متطابقان"),
  
  });

  return (
    <Styles>
      <Card sx={{ maxWidth: 700 }} className="class_card_add" dir='rtl' >
        <CardActions>
          <Formik
            initialValues={{ name: "",lastName:"" ,typEUser:"",email: "", year: "",password:"", confirmPassword:"" }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              handleAdd(values);
              resetForm();
            }}
          >
            {({ handleSubmit, isSubmitting }) => (
              <Form onSubmit={handleSubmit} className="class_form">
                <div className="class_name_user" >
                  <div className="class_field"> <label name="firstName">* الاسم</label>
                <Field name="firstName" />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="error_massage"
                /></div>
                <div className="class_field"><label name="lastName">* اسم العائلة</label>
                <Field name="lastName" />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="error_massage"
                /></div>
                 </div>
                   <div className="class_field"><label name='email'>* البريد الالكتلروني</label>
                                     <Field name='email' />
                                     <ErrorMessage name='email' component="div" className='error_massage' /></div>
                                     {profileData.Permission==="*"?(<div className="class_field" ><label name="typeUser">* نوع المستخدم</label>
                <select value={domainYear} onChange={(e)=>{setDomainYear(e.target.value)}}>
                  <option value="ادمن">
                 super Admin
                  </option>
                  <option value="متطوع">
                   volunteer

                  </option>
                  <option vlaue="يافع">
                     youth
                  
                  </option>
                    <option value= "ادمن يافعين">
          youth Admin
                  </option>
                  <option value="ادمن متطوعين">
                   volunteer Admin

                  </option>
                  </select>
                  
 
                  </div>):(profileData.Permission==="youthAdmin"?(setDomainYear("يافع")):(setDomainYear("متطوع")))}
               
                  <div className="class_field">  <label name="year">*العمر</label>
                <Field name="year" type="password" />
                <ErrorMessage
                  name="year"
                  component="div"
                  className="error_massage"
                /></div>
               
              
                <div className="class_password" > 
                   <div className="class_field"> <label name="password">* كلمة المرور</label>
                <Field name="password" />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error_massage"
                /></div>
                  
                 <div className="class_field"><label name="confirmPassword">* تاكيد كلمة المرور</label>
                <Field name="confirmPassword" />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="error_massage"
                /></div>
                 </div>
                
                <div className="class_container_button" dir="ltr">
                  {" "}
                  <button className="class_button button_add">add</button>
                  <button
                    onClick={() => {
                      setDisplay(false);
                    }}
                    className="class_button"
                  >
                    close
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </CardActions>
      </Card>
    </Styles>
  );
};
export default AddCustomer;
