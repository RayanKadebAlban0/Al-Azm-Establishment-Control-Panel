import React from 'react'
import { useState } from 'react'
import { Styles } from './style';
import Notification from './send_new_nontification/Notification';
   import { MdRadioButtonChecked } from "react-icons/md";
   import { MdRadioButtonUnchecked } from "react-icons/md";
    import { useLocation } from 'react-router-dom';
   
const ManageNotificationComponent = () => {
   const location = useLocation();
  const state = location.state?.target ||"all";
const user_id=location.state?.user_id||null;
const options=[
  {id:"all",title:"الجميع"},
  {id:"activity",title:"أعضاء نشاط محدد"},
  {id:"users",title:"مستخدمين محددين"},
   {id:"group",title:"مجموعة محددة"}
];
const [selectedOption,setSelectedOption]=useState(state)

  return (
<Styles style={{ position:"relative",marginTop:"120px"}}>
 

                                                                          <div className='class_type_user'> 
                                        {options.map((item,index)=>{return <label key={index} className={`label ${selectedOption===item.id?"activite":""}`}>
                <input type='radio'  value={item.id} checked={selectedOption===item.id} onChange={(e)=>{setSelectedOption(e.target.value)}}/>
                              
                                <div className='icon_and_title'>
                                     <span className='icon'>{selectedOption===item.id?<MdRadioButtonChecked/>:<MdRadioButtonUnchecked/>}</span>
                                <h6 className="text">{item.title}</h6>
                                </div>
                               </label>
                                        })}
                                        </div>
                                 <Notification state={selectedOption} user_id={user_id}/>
                                
                              
</Styles>
  )
}

export default ManageNotificationComponent;
