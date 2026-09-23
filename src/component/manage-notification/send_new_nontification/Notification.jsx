import React, { useEffect } from 'react'
import SendToCount from '../../../services/notification-admin/SendToCount'

import { ErrorMessage, Field, Formik, Form} from "formik";
import { Styles } from '../style';
import CheckboxOption from '../../Manage-users/information-contact/checkbox-option/CheckboxOption';
import Select from 'react-select';
import {Send} from "../../../services/notification-admin/Send"
import { SendMulti } from '../../../services/notification-admin/Send';
import GetUsersSearch from '../../../services/user/get-users/GetUsersSearch'
import * as yup from "yup";
import CustomRadio from '../../common/custom-radio/CustomRadio';
 import DatePicker from "react-datepicker";
 import GetActivitySearch from '../../../services/activity/get-activity-search/GetActivitySearch';
import { useState } from "react";
const User = ({state,user_id}) => {
 
const maxLength=600;
    const [selected,setSelected]=useState("")
     const [selectedDate, setSelectedDate] = useState(null);
     const[inputValue,setInputValue]=useState("");
     const[selectCategorie,setSelectCategorie]=useState("1");
     const [selectFile,setSelectFile]=useState("")
    const [activity,setActivity]=useState([])
    const [selectActivity,setSelectActivity]=useState([])
   
        const [selectUsers,setSelectUsers]=useState([])

    const[users,setUsers]=useState([])
const getActivity=async()=>{
    const response= await GetActivitySearch();
 setActivity(response.data)

  }
  const getUsers=async()=>{
    const response= await GetUsersSearch();
 setUsers(response.data)

  }
  useEffect(()=>{
getActivity()
  getUsers()
  },[])
  const newOptions=activity.map((item,index)=>{
   
    return {value:item.id,label:item.name}
  })
  

  const newUsers=users.map((item,index)=>{
   
    return {value:item.id,label:item.username}
  })

     const categorie=[
      {id:"youth",title:"يافعين"},
      {id:"volunteer",title:"متطوعين"}
     ]
     const handleInputValue=(e)=>{
setInputValue(e.target.value)
     }
     const handleSelectCategorie=(e)=>{
setSelectCategorie(e.target.value)
     }
      const validationSchema = yup.object({
       
      });
  return (
    <Styles>
          <Formik
                    initialValues={{ 
                      channels:[],
                      title:"",
                      content:"",
                      attachment_link:"",
scheduled_at:"",
attachment:"",
activity_ids: [],
  user_ids: [],
  role: "",
  target_type:"",
                     }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                      const formData=new FormData();
                      if(selected==="all"){
values.channels=["database","mail"];
console.log(values.channels)
                      }
                      else{
values.channels=[selected];
console.log(values.channels)
                     } 
                     values.content=inputValue;
                 
const ids=selectActivity.map((item)=>{
        
                    return item.value
                  }) ;
                   const users_ids=selectUsers.map((item)=>{
                      return item.value
                  })
                 
                 
                if(!values.attachment)  {
 if(state==="all") {
                  Send({delivery_methods:values.channels,title:values.title,content:values.content,scheduled_at:values.scheduled_at,link:values.attachment_link,state:state});
 
                 }  
                 else if(state==="activity"){
              Send({activity_ids:ids,delivery_methods:values.channels,title:values.title,content:values.content,scheduled_at:values.scheduled_at,link:values.attachment_link,state:state});
    
                 } 
                 else if (state==="users")  {
                   Send({user_ids:users_ids,delivery_methods:values.channels,title:values.title,content:values.content,scheduled_at:values.scheduled_at,link:values.attachment_link,state:state});
            }
                else{
                  Send({role:selectCategorie,delivery_methods:values.channels,title:values.title,content:values.content,scheduled_at:values.scheduled_at,link:values.attachment_link,state:state});
    
                }
                  
                }
                else{
values.channels.forEach(method => {
  formData.append("delivery_methods[]", method);
});

                   formData.append("title",values.title);
                   formData.append("content",values.content);
                  formData.append("link",values.attachment_link);
                  formData.append("attachment",values.attachment);
                  formData.append("target_type",state)
                  const scheduled = new Date(values.scheduled_at);

// تأكد أنه بعد الآن
if (scheduled <= new Date()) {
  scheduled.setMinutes(scheduled.getMinutes() + 1);
}

formData.append("scheduled_at", scheduled.toISOString());

                   if(state==="all") {

                  SendMulti(formData)
                 }  
                 else if(state==="activity"){
                  formData.append("activity_ids",values.activity_ids);
              SendMulti(formData) }
                 else if (state==="users")  {
                    formData.append("user_ids",values.user_ids);
                   SendMulti(formData)    
                   }
                else{
                    formData.append("role",values.selectCategorie);
                  SendMulti(formData)
                }
                }
                 
                
                   
                    }}
                  >
                    {({setFieldValue, handleSubmit, isSubmitting }) => (
                      <Form onSubmit={handleSubmit} className="class_form">
                         <div className='container_row'>
           
              <div className='container_columns'>
                <label name="type">نوع الإشعار</label>
             <select name="type" value={selected} onChange={(e)=>{setSelected(e.target.value)
             
             }} className='input select_type'>
                <option value="all">push Notification+Email</option>
                 <option value="push">push Notification</option>
                 <option value="email">Email</option>
             </select>
                        <ErrorMessage
                          name="type"
                          component="div"
                          className="error_massage"
                        />
            </div>
            {state==="activity"?(<div className='container_columns'>
                <label name="name" >النشاط</label>
                    <Select
            name="office_ids"
            options={newOptions}
           onChange={(selected) => {
          setSelectActivity(selected); // تحديث الواجهة
          setFieldValue("activity_ids", selected.map(i => i.value)); // تحديث الفورميك
        }}  
            isSearchable={true}
value={selectActivity}

            isMulti
            components={{ Option: CheckboxOption, }}
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
            }
          
        }
          />
                        <ErrorMessage
                          name="type"
                          component="div"
                          className="error_massage"
                        />
            </div>):( 
              state==="group"?(<CustomRadio data={categorie} state={selectCategorie} handle={handleSelectCategorie} title="الفئة المستهدفة"/>
     ):(
      state==="users"?(<div className='container_columns'>
                <label name="users_ids" >المستخدمين المحددين </label>
                    <Select
            name="user_ids"
            options={newUsers}
           onChange={(selected) => {
          setSelectUsers(selected); // تحديث الواجهة
          setFieldValue("user_ids", selected.map(i => i.value)); // تحديث الفورميك
        }}
            isSearchable={true}
value={selectUsers}
            isMulti
            components={{ Option: CheckboxOption, }}
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
            }
          
        }
          />
                        <ErrorMessage
                          name="users_ids"
                          component="div"
                          className="error_massage"
                        />
            </div>):(<></>)
     )
            
                     )}
           
        </div>
           <div className='container_row'>
             <div className='container_columns'>
                <label name="title"> عنوان الإشعار</label>
               <Field name="title"  className='input'/>
                        <ErrorMessage
                          name="title"
                          component="div"
                          className="error_massage"
                        />
            </div>
             <div className='container_columns' dir='rtl'>
 <label name="date_and_time">التاريخ والوقت</label>
                                           <DatePicker 
                                           name="date_and_time"
                       selected={selectedDate} // التاريخ الحالي
                       onChange={(date) => {setSelectedDate(date);
 setFieldValue("scheduled_at",date)
                       }} // تحديث التاريخ
                     showTimeInput
                       dateFormat="MM/dd/yyyy, h:mm aa  " // تنسيق التاريخ
                      timeFormat='HH:mm aa'
                     
                    placeholderText=" --  -- :--,mm/dd/yyyy"
                       
                       showMonthDropdown // قائمة اختيار الشهر
                       showYearDropdown // قائمة اختيار السنة
                       scrollableYearDropdown // تمرير السنوات
                       className='input date_and_time'
                     />
            </div>
           
           </div>
          
             <div className='container_coulmn_content_notificat'>  <label name="content">محتوى الإشعار:</label>
             <div className='container_input'>
                          <textarea name='content' value={inputValue} onChange={(e)=>{handleInputValue(e)
                          
                          }}  maxLength={maxLength} className='content_notification'/>
                            <hr style={{margin:'0px'}}></hr>
            <div className='counter'>{maxLength}/{inputValue.length}</div>
             </div>
</div>
          
          
           <div className=' single_childreen'>
          
              <div className='container_columns'> 
            <label className='add_optional'>
            <b>
 إضافات  إختيارية

            </b>
           
            </label>
             <div className='container_row  option'>
                        
              <div className='container_columns'>   
<label name="attachment_link"> نسخ رابط</label>
               <Field name="attachment_link" className="input" placeholder="https://www.hhhh.com"/>
              
                        <ErrorMessage
                          name="attachment_link"
                          component="div"
                          className="error_massage"
                        />
                        </div>
                        
                          <div className='container_columns'>        
                <label name="attachment" > إرفاق ملف</label>
               <label  name="attachment" className="input">
                <input type='file' name='attachment' onChange={(e)=>{setSelectFile(e.target.files[0]);setFieldValue("attachment",e.target.files[0])}}  style={{display:'none'}}/>
                {selectFile?<p style={{textAlign:'right'}}>الملف المختار:{selectFile.name}</p>:<></>}
                <div  className='icon'><b>
+
                </b>
                  </div>
               </label>
                
                        <ErrorMessage
                          name="location"
                          component="div"
                          className="error_massage"
                        />
          
             </div>
             </div>
             
            </div>
          
           </div>
        
          <div className='container_button_send'>
             <button className='send_notification' type='submit'>
                    <b>
                       إرسال الإشعار
                   
        </b>
                    </button> 
          </div>
                   
                     
                      </Form>
                    )}
                  </Formik>
        <div style={{display:'flex',justifyContent:'space-between',width:"96%",marginBottom:"40px",position:"absolute",top:"-80px"}}>
           <h3>إرسال إشعار جديد:</h3>
          {
                   state==="users"?(<></>):(<button className='send' onClick={async()=>{
                    
                       if(state==="group"){
                       const response= await SendToCount({"target_type": "group", "group_role":selectCategorie,})
                        console.log( response)}
                        else if(state==="activity"){
                          const ids=selectActivity.map((item)=>{
        
                    return item.value
                  }) ;
                  
                          const response=await SendToCount({ target_type:state,activity_ids:ids})
                         console.log("activites_ids",ids)
                        }
                        else{
                           const response=await SendToCount({ target_type:state})
                         console.log( response)
                        }
                    
                     }
                   }>
                      سيتم الإرسال إلى 
                     {state==="group"?(<>
                     <b> 50 </b>
                             مجموعة
                    </>
                                     ):(state==="activity"||state==="all"?( 
                                       <>
                                       <b> 60 ألف  </b>
                             مستخدم
                  </>
                                    ):(<></>))}
                             </button>  )
                  }
         </div>
         
       
      
    </Styles>
  )
}

export default User
