import React from 'react'
import Card from 'react-bootstrap/Card';

const CardComponent = ({data}) => {
  return (
   
       <div  className='card'>
     
      
        <h6>{data.title}</h6>
        <p className='description'>
         {data.descrition1}
        </p>
      <small className='container_icon'>
         {data.descrition2}
         {data.icon}
        
      </small>
    
    </div>
   
    
  )
}

export default CardComponent
