import React from 'react'
import Select from 'react-select'
import { components } from 'react-select';
const  
     CheckboxOption = (props) => {
  return (
    <div>
          
       <components.Option {...props} className='componentOption'>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null} // لا تفعل شيئًا عند تغيير checkbox
    className='checked'
       />
        <label style={{ marginRight: 10,color:'black'}}>{props.label}</label>
      </components.Option>
    </div>
  )
}

export default CheckboxOption
