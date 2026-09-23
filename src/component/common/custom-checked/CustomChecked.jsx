import React from 'react'
import { FaRegCheckCircle } from "react-icons/fa";
import { MdRadioButtonUnchecked } from "react-icons/md";
 import { useState } from 'react';
 import { Styles } from './style';
const CustomChecked = ({data,dir}) => {
 const [selectedOption, setSelectedOption] = useState("option2");
  return (
    <Styles>
         {data.map((item, index) => {
                  return (
                    <label
                      key={index}
                      className={`card ${selectedOption === item.id ? "selected" : ""}`}
                    >
                      <input
                        type="radio"
                        value={item.id}
                        checked={selectedOption === item.id}
                        onChange={(e) => {
                          setSelectedOption(e.target.value);
                        }}
                      />
                     
                        <div className="icon_and_title" dir="rtl">
                          <span className="icon">
                            {selectedOption === item.id ? (
                              <FaRegCheckCircle />
                            ) : (
                              <MdRadioButtonUnchecked />
                            )}
                          </span>
                          <h6>{item.title}</h6>
                        </div>

                        <p className="description">{item.desc}</p>
                    
                    </label>
                  );
                })}
             
    </Styles>
  )
}

export default CustomChecked
