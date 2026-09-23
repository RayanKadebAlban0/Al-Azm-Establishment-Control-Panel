import styled from 'styled-components';
 export const Styles = styled.div`
  

 .class-link,.a-link{
   margin:auto auto;
   padding:20px;
   text-align:center;
background-color:blue;
display:block;
    width:20%;
    text-decoration:none;
    color:black;
   
 }
 .class-button{
background-color: ${({disabled}) => (disabled ? "gray" : "blue")};

margin:auto auto;
   padding:20px;
   text-align:center;

 }
 `