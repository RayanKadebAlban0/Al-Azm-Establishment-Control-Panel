import styled from "styled-components";
export const Styles = styled.div`

.container_card{
  margin:20px 0px;
  display:flex;
  justify-content:space-around;
  gap:20px;
width:98%;

.card{
height:100%;
width:100%;
 border-radius:10px;
 border:1.5px solid black;
 padding:20px;
.description{
  margin:10px 0px;
  font-size:0.9rem;
}
 .container_icon{

  text-align:center;
 
 }
 .icon_increase{
 color:green;
 }
 .icon_decrease{
 color:red;
 }

}
 }
 
 .update_user{
  
  width:98%;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
.update_user_table{
  
  width:60%;
  padding:10px;
border:1px solid black;
border-radius:10px;
.dataTable{
 width:100%;
 text-align:center;
 .table_container_user{
  direction:ltr;
  display:flex;
  flex-direction:row;
 }
}
.view_record{
  color:black;
  width:100%;
 
  text-align:left;
}
 }
 .update_user_requests{
  width:35%;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  
 
  border:1px solid black;
border-radius:10px;
  padding:10px;
max-height:440px;
overflow:hidden;

  .header_requests{
    padding:10px;
display:flex;
justify-content:space-between;
.link_view_all_requests{
  color:black;
}
  }

 .card_item{
  
  position:relative;
  width:98%;
 margin-left:auto;
 margin-right:auto;
 
border-bottom:1px solid black;
border:1px solid black;
border-radius:20px;
padding:10px;


margin-bottom:30px;
.content_card{
  
  display:flex;
flex-direction:row;
justify-content:space-between;
.state{
font-size:0.9rem;
  padding:5px 10px;
  border:none;
  border-radius:10px;
background-color:red;

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
 
  display:flex;
  flex-direction:column;
 margin-right:60px;


}
.img{position:absolute;
top:12%;
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
  justify-content:space-between;
  .yes,.no{
   padding:2px 10px;
    width:47%;
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
}
.container_image{
  width:30px;
  height:30px;
 border:1px solid black;
  overflow:hidden;
  border-radius:50%;
  .img_table{
    display:block;
    height:30px;
    width:30px;
  
    
  }
}

`;


  

