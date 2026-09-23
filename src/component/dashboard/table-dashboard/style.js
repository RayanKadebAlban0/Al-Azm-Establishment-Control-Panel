import styled from "styled-components";
export  const Styles = styled.div`
  position:relative;
padding:10px;
.container_button{
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  width:100%;
  /* background-color:red; */
 .class_header{
    display:flex;
    justify-content:flex-end;
    /* background-color:orange; */
    gap:10px;
    width:100%;
    @media screen and (max-width:576px){
       display:flex;
       flex-direction:column;
    gap:20px;
    }
      
    
    input{
border:none;
background-color: #08080856;
border-radius:5px;
    }
  
 }
}
 .button_edit{
  color:green;
   border:none;
   background-color:transparent;
   font-size:1.5rem;
margin-right:10px;
 }
 .button_delete{
  color:red;
  border:none;
  background-color:transparent;
   font-size:1.5rem;
 }
 .class_add_user{
    background-color:green;
    margin:10px;
    padding:5px;
    border:none;
    border-radius:5px;
 }
`;
