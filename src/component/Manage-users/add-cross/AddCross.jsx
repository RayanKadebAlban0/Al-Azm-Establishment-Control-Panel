import React, { useEffect } from 'react'
import { CiCamera } from "react-icons/ci";
import { useState } from 'react';
import * as yup from "yup";
import { Formik } from "formik";
import { Field ,ErrorMessage } from 'formik';
import ShowActivity from "../../../services/activity/show-activity/ShowActivity"
import ImageCross from "../../../services/image-cross/ImageCross"

const AddCross = ({ handleClose,id}) => {
    const [fileImage,setFileImage]=useState(null);
     const [previewImage,setPreviewImage]=useState(null)
     const [badges,setBadges]=useState([])
    
     useEffect(() => {
        const fetchBadges = async () => {
            const response = await ShowActivity(id);  
            setBadges(response.data.badges);
        };
        fetchBadges();
    }, []);

      const validationSchema = yup.object({
         name: yup
           .string()
           .required("ادخل اسم الشارة")
           
           })
     const handleAddImage=(e)=>{
       const file=e.target.files[0];
       if(file){
        setFileImage(file)
        setPreviewImage(URL.createObjectURL(file))
       }
     }
    
  return (
    
    <Formik
            initialValues={{
              name: "",
              
            }}
            validationSchema={validationSchema}
            onSubmit={async(values, {resetForm}) => {
                 handleClose()
                     const formData =new FormData();
       if(!fileImage){
           
            setFileImage("../../../assets/images/traning.png")
        } 
    
   const index=badges.length+1;
      
        formData.append(`new_badges[${index}][icon]`,fileImage);
       formData.append(`new_badges[${index}][name]`,values.name);
       
       const response=await ImageCross(formData,id)
        console.log("response cross add ",response,id)
       
        }}
          >
            {({ handleSubmit, isSubmitting }) => (
    <div className='container_cross' >
        <div className='content'>
                   <label className='image_cross' htmlFor='image'>
                    {!fileImage?(<>
                     <b className='title'> رفع صورة الشارة
                                    <span className="note">(اختيارية)</span>
                                  </b>
                                
                                 <div className='container_camera'>   <CiCamera className='camera'/></div>
                              
                    </>):(
                        <><img src={previewImage} alt="صورة الشارة" className='image'/></>
                    )}
                                 
                                </label>
                                <input type='file' id='image' className="input_file" onChange={handleAddImage}/>
                                <h3 className='title'>ادخل اسم الشارة:</h3>
                                <Field name="name" className='input_name_cross' />
                                <ErrorMessage name="name"
                                          component="div"
                                          className="error_massage"/>
                                <samll >في حال عدم رفع صورة للشارة سيتم وضع صورة افتراضية</samll>
                                <div className='buttons_cross'>
                                    <button className='button' onClick={handleSubmit}>
                                        <b>
إضافة الشارة
                                        </b>
                                    </button >
                                     <button onClick={ handleClose} className='button'>
                                        <b>
إلغاء
                                        </b>
                                    </button>
                                </div>
        </div>
                                 
    </div>
            )}
            </Formik>
      

              
  )
}

export default AddCross
