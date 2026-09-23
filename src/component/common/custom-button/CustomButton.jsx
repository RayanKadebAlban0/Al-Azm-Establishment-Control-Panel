import React from 'react'
import { Link } from 'react-router-dom'
import { Styles } from './style'
const ContainerButtons = ({data,id}) => {
  return (
    <Styles>
       <Link to={data.link} className='link' id={id}>
    <p>{data.title}
   
      {data.icon}
    </p>
   </Link>
    </Styles>
  
  )
}

export default ContainerButtons
