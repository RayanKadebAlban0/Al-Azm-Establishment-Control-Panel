import React from 'react'
import { useFormikContext } from 'formik';
import { useState } from 'react'
import { CgGenderMale } from "react-icons/cg";
import { CgGenderFemale } from "react-icons/cg";
const GenderComponent = () => {
    const {setFieldValue}=useFormikContext()
    const[gender,setGender]=useState("")
    const options=[
        {id:"male",title:"ذكر"},
        {id:"female",title:"انثى"}
    ]
  return (
    <>
{options.map((item,index)=>{return(<label key={index} className={`card_gender ${gender===item.id?"activite_gender":""} ${item.id==="option1"?"gender_male":""}`}>
<input type='radio' name='group' checked={gender===item.id} onChange={()=>{setGender(item.id)
    setFieldValue("gender",item.id)
}}/>
<span className="icon_gender">{item.id==="option1"?<CgGenderMale/>:<CgGenderFemale/>}</span>
{item.title}
    </label>)
    
})}
    </>
  )
}

export default GenderComponent
