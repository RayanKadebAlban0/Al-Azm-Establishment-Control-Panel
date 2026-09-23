import React from 'react'
import { Styles } from './style'
const Footr = () => {
  return (
    <Styles >
      <div>
        &copy; {new Date().getFullYear()} جميع الحقوق محفوظة لمؤسسة العزم 
      </div>      
    </Styles>
  )
}

export default  Footr