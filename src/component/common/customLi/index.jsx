import React from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const CustomLi = ({link,title}) => {
  const {t}=useTranslation();
  return (

  <Link to={link} className='class-link'><li >
{t(title)}
  </li></Link>
  
  )
}

export default CustomLi
