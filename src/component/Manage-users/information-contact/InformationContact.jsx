import React, { useState } from 'react';
import { ErrorMessage, Field, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import Select from 'react-select';
import CheckboxOption from './checkbox-option/CheckboxOption';

const InformationContact = ({selectedOption,isEdit}) => {
  const [startDate, setStartDate] = useState(null);
  const { setFieldValue,setFieldTouched ,errors,touched} = useFormikContext();

  const options = [
    { value: '0', label: 'لا يوجد' },
    { value: '1', label: 'المكتب الرئيسي' },
    { value: '2', label: 'المكتب الإعلامي' },
    { value: '3', label: 'المكتب التدريبي' }
  ];

  const handleChange = (selected) => {
    const ids = selected.map(option => Number(option.value));
    setFieldValue("office_ids", ids);
     setFieldTouched("office_ids", true);
  };

  return (
    <>
    {console.log("select",selectedOption)}
      {/* البريد ورقم الأم */}
      <div className='class_data_phone'>
        <div className="class_field class_email">
          <label>البريد الإلكتروني</label>
          <Field name='email' className="input" />

          <ErrorMessage name='email' component="div" className='error_massage' />
        </div>

        <div className="class_field">
          <label>
            {selectedOption==="younth"?"رقم جوال الأم":"رقم الجوال"}
                </label>
          <div className='container_phone' style={{marginBottom:"0px",padding:"0px"}}>
            <Field name={selectedOption==="younth"?"mother_phone":"phone"} type="tel" placeholder="9xxxxxxxx" className="class_phone" />
            <p className='id_phone'>963+</p>
          </div>
           <ErrorMessage  name={selectedOption==="younth"?"mother_phone":"phone"} component="div" className='error_massage'  />
           
        </div>
      </div>

      {/* واتساب + احتياطي */}
      <div className='class_data_phone'>
        <div className="class_field">
          <label>
            {selectedOption==="younth"?"رقم  جوال الأم":"رقم الجوال"}
            (يكون عليه واتساب)
             </label>
          <div className='container_phone'>
            <Field name='whatsapp_phone' placeholder="9xxxxxxxx" className="class_phone" />
            <ErrorMessage name='whatsapp_phone' component="div" className='error_massage' />
            <p className='id_phone'>963+</p>
          </div>
        </div>

        <div className="class_field">
          <label>رقم جوال احتياطي شخصي</label>
          <div className='container_phone'>
            <Field name='backup_phone' placeholder="9xxxxxxxx" className="class_phone" />
            <ErrorMessage name='backup_phone' component="div" className='error_massage' />
            <p className='id_phone'>963+</p>
          </div>
        </div>
      </div>

      {/* كلمة السر + العنوان */}
      <div className='class_password_location'>
        {/* <div className="class_field">
          <label>كلمة السر</label>
          <Field name="temp_password" className="input" />
          <ErrorMessage name="temp_password" component="div" className="error_massage" />
        </div> */}

        <div className="class_field" >
          <label>العنوان</label>
          <Field name="address" className="input" />
          <ErrorMessage name="address" component="div" className="error_massage" />
        </div>
      </div>

      {/* رقم الأب */}
      {selectedOption==="younth"?(<div className='class_data_phone'>
        <div className="class_field">
          <label>رقم جوال الأب</label>
          <div className='container_phone'>
            <Field name='father_phone' placeholder="9xxxxxxxx" className="class_phone" />
            <ErrorMessage name='father_phone' component="div" className='error_massage' />
            <p className='id_phone'>963+</p>
          </div>
        </div>
        <div className="class_field">
          <label>رقم جوال الأب(واتساب)</label>
          <div className='container_phone'>
            <Field name='phone' placeholder="9xxxxxxxx" className="class_phone" />
            <ErrorMessage name='phone' component="div" className='error_massage' />
            <p className='id_phone'>963+</p>
          </div>
        </div>
      </div>):(<></>)}
      

      {/* اسم المستخدم + الهاتف الأرضي */}
      <div className='class_data_phone'>
        <div className="class_field" style={{width:isEdit?"100%":"45%"}}>
          <label>اسم المستخدم</label>
          <Field name="username" className="input" />
          <ErrorMessage name="username" component="div" className="error_massage" />
          <small>سيستخدم لتسجيل الدخول إلى المنصة</small>
        </div>
{isEdit?(<></>):( <div className="class_field">
          <label>رقم الهاتف الأرضي</label>
          <div className='container_phone'>
            <Field name='landline_phone' placeholder="011xxxxxxx" className="class_telephone" />
            <ErrorMessage name='landline_phone' component="div" className='error_massage' />
            <p className='id_telephone'>012</p>
          </div>
        </div>)}
       
      </div>

      {/* المكتب + تاريخ الانضمام */}
      <div className="bottom_container">
        <div className="class_field">
          <label>المكتب</label>
          <Select
            name="office_ids"
            options={options}
            onChange={handleChange}
            onBlur={() => setFieldTouched("office_ids", true)}  
 
            isMulti
            components={{ Option: CheckboxOption }}
            isRtl={true}
            styles={{
              indicatorsContainer: (provided) => ({
                ...provided,
                flexDirection: 'row-reverse',
              }),
              control: (baseStyles) => ({
                ...baseStyles,
                direction: 'rtl',
                height: '38.6px',
                borderRadius: '10px',
                backgroundColor: 'transparent',
                borderColor: 'black',
                boxShadow: 'none',
                '&:hover': { borderColor: 'black' }
              }),
              menu: (provided) => ({
                ...provided,
                border: '1px solid black',
                borderRadius: '10px',
                textAlign: 'right'
              }),
              option: (provided) => ({
                ...provided,
                cursor: 'pointer'
              })
            }}
          />
         {touched.office_ids && errors.office_ids && (
  <div className="error_massage">{errors.office_ids}</div>
)}

      
        </div>

        <div className="class_field">
          <label>تاريخ الانضمام</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              setFieldValue("start_date", Math.floor(new Date(date).getTime() / 1000));
            }}
            dateFormat="MM/dd/yyyy"
            placeholderText="mm/dd/yyyy"
            showMonthDropdown
            showYearDropdown
            scrollableYearDropdown
            className="class_date input"
          />
        </div>
      </div>
    </>
  );
};

export default InformationContact;
