import React from 'react'
import { MdRadioButtonUnchecked } from "react-icons/md";
import { MdRadioButtonChecked } from "react-icons/md";
const CustomRadio = ({state,title,data,handle}) => {
  return (
    <div className="class_filed">
                 <p className='title_header'>{title}</p>
                 <div className="container_row radio">
                    {data.map((item, index) => {
                     return (
                       <label
                         key={index}
                         className={`container_radio ${state === item.id ? "activite" : ""}`}
                       >
                         <input
                           type="radio"
                           value={item.id}
                           checked={state === item.id}
                           onChange={(e) => {
                            handle(e);
                           }}
                         />
                        
                           <div className='radio_state'>
                                                         <span className='icon'>{state===item.id?<MdRadioButtonChecked/>:<MdRadioButtonUnchecked/>}</span>
                                                    <p className='text'>{item.title}</p>
                                                    </div>
                         
                       </label>
                     );
                   })}
               </div>
               </div>
               
  )
}

export default CustomRadio
