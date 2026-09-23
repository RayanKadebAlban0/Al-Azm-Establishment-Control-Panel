import styled from 'styled-components';
 export const Styles = styled.div`
 width:100dvw;
 height:100dvh;
 color:black;
  display:flex;
 flex-direction:column;
 align-items:center;


 .class_form{
 
   padding:50px;
    width:40%;
    height:100dvh;
    display:flex;
    flex-direction:column;
   justify-content:flex-end;
    align-items:stretch;
    margin-top:10px;
   gap:20px;
   

    padding: 20px;
    .class_container_field{
      position:relative;
width:100%;
display:flex;
flex-direction:row;
border-bottom:2px solid black;
      border-bottom-width:100%;
     
 color:green; 
  
      .class_field{
       
        width:100%;
         margin-bottom:0px;
         border:none;
      background-color:transparent;
      outline:none;
     box-sizing:border-box;
      
      }

    }
    .class_field_password{
      width:100%;
      margin-bottom:0px;
      background-color:transparent;
      border:none;
      border-bottom:2px solid black;
      border-bottom-width:100%;
     outline:none;
     box-sizing:border-box;
     
    }
    p{
      margin:auto;
    }
    h1,h3{
      margin:10px auto;
    }
 }
 .class_img_logo{

  width:200px;
  height:200px;
border-radius:50%;
   margin:auto; 
 }
 .class_img_logo img{
    width:200px;
    height:200px;
    /* border-radius:50%; */

  }
  .class_container_password{
    min-height:20px;
   
    
    position:relative;
  
    display:flex;
    flex-direction:row;
    .class_checkbox{
  display:flex;
  gap:10px;
      position:absolute;

      left:0px;
      
    }
  
   
  }
  .class_button{
    margin:auto;
    border:none;
    border-radius:10px;
    width:100%;
min-height:40px;
margin-bottom:0px;
    background-color:#0000ff30;
  }
 `