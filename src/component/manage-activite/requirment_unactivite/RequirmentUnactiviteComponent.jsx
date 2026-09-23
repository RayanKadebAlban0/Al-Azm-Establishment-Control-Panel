import React from 'react'
import { Styles } from './style';
import CardComponent from '../../common/card_component/CardComponent'
import BaseDataTable from "../../common/tabel/base_data_table/BaseDataTable";
import { useState } from 'react';
 import { LiaSearchSolid } from "react-icons/lia";
import { IoMdTrendingUp } from "react-icons/io";
import { IoMdTrendingDown } from "react-icons/io";
import { GrFormView } from "react-icons/gr";
const RequirmentUnactiviteComponent = () => {
    const [search,setSearch]=useState("")
    const [selected,setSelected]=useState("")
     const dataCard=[
        { title:" عدد الأنشطة المعلقة",
           descrition1:"10 نشاط",
            descrition2:"+5 نشاط ",
             icon:<IoMdTrendingUp className='icon_increase'/>},
             { title:"طلبات اليوم",
           descrition1:"5 طلبات",
            descrition2:"-2 طلب ",
             icon:<IoMdTrendingDown className='icon_decrease'/>}
            ,
           
             { title: "عدد التدريبات المعلقة",
           descrition1:"5 طلبات",
            descrition2:"+3 طلبات",
             icon:<IoMdTrendingUp className='icon_increase'/>}];
             const columns = [
  {
    name: "اسم النشاط",
    selector: (row) => row.اسم,
  },
  {
    name: "نوعه",
    selector: (row) => row.نوعه,
  },
  {
    name: "الفئة",
    selector: (row) => row.الفئة,
  },
  {
    name: "المنسق",
    selector: (row) => row.المنسق,
  },
  {
    name: "التاريخ",
    selector: (row) => row.التاريخ,
  },
  {
    name: "الاجراء",
    selector: (row) => row.الاجراء,
     
  },
  {
    name: "تفاصيل النشاط",
    selector: (row) => row.تفاصيل,
  },
 
];
 const [data, setData] = useState([
     {
      id: 1,
      اسم: "مهالرات القيادة",
      نوعه: "تدريب",
      الفئة: "يافعين",
      المنسق: " لين حسن",
      التاريخ: "10",
      الاجراء: "12",
   
    },
     {
      id: 2,
      اسم: "مهالرات القيادة",
      نوعه: "تدريب",
      الفئة: "يافعين",
      المنسق: " لين حسن",
      التاريخ: "10",
      
    }
    ,
     {
      id: 3,
      اسم: "مهالرات القيادة",
      نوعه: "تدريب",
      الفئة: "يافعين",
      المنسق: " لين حسن",
      التاريخ: "10",
     
    }
   
  ]);
  const newData=data.map((item,index)=>{ 
   
 const newItem= {...item,"الاجراء":<select value={selected} onChange={(e)=>{setSelected(e.target.value)}}><option className='option_non_display'> </option>
 <option value="oo">ooo</option>
 <option value="hhh"></option>
 </select>,
 "تفاصيل":<div>
  <GrFormView/>
  "عرض"
 </div>}
 return newItem
}) 
  return (
    <Styles>
    <div className='container_card'>  
               {dataCard.map((item,index)=>{return <CardComponent key={index} data={item}/>})}</div>
                <div className="class_search">
               <LiaSearchSolid  className='class_search_icon'/>
                             <input
                               type="text"
                               value={search}
                               onChange={(e) => {
                                 setSearch(e.target.value);
                               }}
                               placeholder="ابحث عن نشاط /منسق"
                               className='class_search_input'
                             />
                             <div className='class_search_container_p'> <p className='class_search_p'>بحث</p></div>
                             
                            
                             </div>
                              <div className='container_filter'>
        
        <div className='class_type_activite'>
            <p>نوع النشاط</p>
            <select>
                <option>الكل</option>
                <option></option>
                <option></option>
                <option></option>
            </select>
        </div>
          <div className='class_offic'>
            <p>المكتب</p>
            <select>
                <option> مكتب الأنشطة </option>
                <option></option>
                <option></option>
                <option></option>
            </select>
        </div>
         <div className='class_categorie'>
            <p>الفئة المستهدفة </p>
            <select>
                <option> كل الفئات </option>
                <option></option>
                <option></option>
                <option></option>
            </select>
        </div>
        <div className='class_activite'>
            <p>منسق النشاط </p>
              <select>
                <option>جميع المنسقين</option>
                <option></option>
                <option></option>
                <option></option>
            </select>
        </div>
        <div className='class_button_app_filter'>
            <button>تطبيق فلتر</button>
        </div>
        <div className='class_button_reapp_filter'>
            <button>اعادة تعيين </button>
        </div>

    </div>
    <BaseDataTable
           
            columns={columns}
            data={newData}
           
          
          />
    </Styles>
  )
}

export default RequirmentUnactiviteComponent
