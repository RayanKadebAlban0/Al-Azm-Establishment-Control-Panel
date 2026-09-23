import React from "react";
import GenderComponent from "../gender-component/GenderComponent";
import DatePicker from "react-datepicker";
import { ErrorMessage, Field,useFormikContext } from "formik";
import { CiCamera } from "react-icons/ci";
import { useState } from "react";
const InformationPersonality = () => {
  const [birth_date, setBirth_date] = useState(null);
  const [fileImage,setFileImage]=useState(null);
     const [previewImage,setPreviewImage]=useState(null)
     const { setFieldValue } = useFormikContext();   
     const handleAddImage=(e)=>{
            const file=e.target.files[0];
            if(file){
             setFileImage(file)
             setPreviewImage(URL.createObjectURL(file))
             setFieldValue("image",file)
             
            }
           }
  return (
    <div className="class_data">
      <h5 className="sub_title">المعلومات الشخصية</h5>
      <div className="container_data">
        <div className="right_container_data">
          <div className="container_row">
            <div className="class_field">
              <label name="first_name">الاسم الأول</label>
              <Field name="first_name" className="input" />
              <ErrorMessage
                name="first_name"
                component="div"
                className="error_massage"
              />
            </div>

            <div className="class_field">
              {" "}
              <label name="last_name"> الكنية</label>
              <Field name="last_name" className="input" />
              <ErrorMessage
                name="last_name"
                component="div"
                className="error_massage"
              />
            </div>
          </div>
          <div className="container_row">
            <div className="class_field">
              <label name="father_name">اسم الأب</label>
              <Field name="father_name" className="input" />
              <ErrorMessage
                name="father_name"
                component="div"
                className="error_massage"
              />
            </div>

            <div className="class_field">
              {" "}
              <label name="mother_full_name"> اسم وكنية الأم</label>
              <Field name="mother_full_name" className="input" />
              <ErrorMessage
                name="mother_full_name"
                component="div"
                className="error_massage"
              />
            </div>
          </div>

          <div className="bottom_right_container_data">
            <div className="class_field_gender">
              <label>الجنس</label>

              <div className="class_gender">
                <GenderComponent />
              </div>
              <ErrorMessage
                name="gender"
                component="div"
                className="error_massage"
              />
            </div>

            <div className="class_data_of_birth class_field">
              <label>تاريخ الميلاد</label>
              <DatePicker
                selected={birth_date} // التاريخ الحالي
                onChange={(date) =>{ setBirth_date(date);
                 setFieldValue("birth_date", date.toISOString().split("T")[0]);

}
                } // تحديث التاريخ
                dateFormat="MM/dd/yyyy" // تنسيق التاريخ
                placeholderText="mm/dd/yyyy"
                showMonthDropdown // قائمة اختيار الشهر
                showYearDropdown // قائمة اختيار السنة
                scrollableYearDropdown // تمرير السنوات
                className="class_date"
              />
              <ErrorMessage
                name="birth_date"
                component="div"
                className="error_massage"
              />
            </div>
          </div>
        </div>

        <div className="left_container_data">
          <label className='image_cross' htmlFor='image'>
                              {!fileImage?(<>
                                      <p className="des">اختياري (JPG,PNG)</p>

          <b className="title"> رفع صورة الملف الشحصي</b>
          <div className="container_camera">
            {" "}
            <CiCamera className="camera" />
          </div>   
                              </>):(
                                  <><img src={previewImage} alt="صورة الشارة" className='image'/></>
                              )}
                                           
                                          </label>
                                           </div>
                                             <input type='file' id='image' className="input_file" onChange={handleAddImage} style={{display:"none"}}/>
                                        
         
     
      </div>
    </div>
  );
};

export default InformationPersonality;
