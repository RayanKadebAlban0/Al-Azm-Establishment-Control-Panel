import React from 'react'
import { Styles } from './style';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const CustomButton = ({islink,isexter,url,title,disabled,handale,}) => {
 const{t}=useTranslation();
 

  return ( 
    <Styles disabled={disabled} >
  
        {islink?(
            isexter?(<Link className='class-link' to={url}>{title}</Link>):(<a  className='class-a' href={url}>{title}</a>)
        ):(
            <button className='class-button' onClick={handale} disabled={disabled} >{t(title)}</button>
        )}

    </Styles>
  )
}

export default CustomButton
