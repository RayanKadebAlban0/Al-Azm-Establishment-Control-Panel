import React from 'react'
import Photo from "../../../assets/images/photo.jpg"
import { Styles } from '../style';
import Button from 'react-bootstrap/Button';
import { IoClose } from "react-icons/io5";
const ReviewOrders = ({close}) => {
  return (
   <Styles>
      <div className='update_user_requests'>
     <IoClose onClick={close} className='close'/>
       <h3>مراجعة طلبات الساعات  :</h3>
       <p>المبادرة :حملة تشجير</p>
        <p>إجمالي الطلبات المعلقة :3 طلبات</p>
      <div  className='card_item'>
      
         <img src={Photo} alt="profile" className='img'/>
      <div className='description'><h6> محمد أحمد</h6>
        <p>25 كانون الثاني </p>
           <p>ساعات مقدمة</p> </div>
        
        <div className='button'> <Button  className='yes'>أعتماد</Button>
        <Button className='no'>رفض</Button></div>
       <button className="state">تم الاعتماد</button>
  
   </div>
   <div  className='card_item'>
     <img src={Photo} alt="profile" className='img'/>
      <div className='description'><h6> محمد أحمد</h6>
        <p>25 كانون الثاني </p>
           <p>ساعات مقدمة</p> </div>
            <button className="state">بانتظار الموافقة</button>
     
     
        
        <div className='button'> <Button  className='yes'>أعتماد</Button>
        <Button className='no'>رفض</Button></div>
      
  
   </div>
   <div  className='card_item'>
      
        <img src={Photo} alt="profile" className='img'/>
      <div className='description'><h6> محمد أحمد</h6>
        <p>25 كانون الثاني </p>
           <p>ساعات مقدمة</p> </div>
        <input placeholder="ادخل سبب الرفض" className="input"/>
        <div className='button'> <Button  className='yes'>أعتماد</Button>
        <Button className='no'>رفض</Button></div>
       <button className="state">تم الرفض</button>
  
   </div>
    </div>
    </Styles>

  )
}

export default ReviewOrders
