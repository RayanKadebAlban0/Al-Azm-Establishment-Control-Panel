import styled from "styled-components";
export const Styles = styled.div`

 .update_user_requests{
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:stretch;
 
  
  padding:10px;
padding-right:0px;
 

 .card_item{
  
  position:relative;
  width:99%;
 
border-bottom:1px solid black;
border:1px solid black;
border-radius:20px;
padding:10px;
margin-bottom:10px;
.content_card{
 
  display:flex;
flex-direction:row;
justify-content:space-between;
.state{
font-size:0.9rem;
  padding:2px 5px;
  border:none;
  border-radius:10px;
background-color:red;
width:10%;
height:20%;
white-space:nowrap;
margin-top:auto;
margin-bottom:auto;

 }
 p{
  margin:0px;
  padding:0px;
  font-size:0.8rem;
 }
}

.description{
 padding:10px;
  display:flex;
  flex-direction:column;
  
 gap:2px;
 width:100%;
 margin-right:60px;
.input_cause{
  margin-top:5px;
  border-radius:10px;
  width:50%;
  height:40px;
}

}
.img{position:absolute;
top:15%;
right:10px;
 
             border-radius:50%;
           width:50px;
        height:50px; 
         border:2px solid black; 

}
.input{
  width:100%;
  border:1px solid black;
  border-radius:5px;
}

.button{
  margin-top:10px;
  margin-bottom:20px;
  display:flex;
  justify-content:flex-end;
  gap:40px;
  .yes,.no{
   padding:10px 10px;
    width:20%;
    border-radius:12px;
    border:none;
  font-size:0.9rem;
  }
  .yes{
    background-color:green;
  }
  .no{
    background-color:red;
  }
}
 }

 }

 
`;


  

