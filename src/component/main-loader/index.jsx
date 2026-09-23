import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import { Styles } from './style';
import { useSelector } from "react-redux";
import i18next from "i18next";
import{resources} from '../../assets/locals';

import {
initReactI18next } from 'react-i18next';

const Loader= () => {
  const language=useSelector((state)=>state.student1.language)
    i18next.use(initReactI18next).init({
    interpolation: { escapeValue: false },
    lng: language|| "en",
    resources: resources,
  });
  return (
    <Styles>
    <div className='class-loading'>
       <Spinner animation="border" variant="primary" />
    </div>
    </Styles>
  )
}

export default Loader
