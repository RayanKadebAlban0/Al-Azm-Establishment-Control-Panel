import styled from 'styled-components';
 export const Styles = styled.div`
 .class_title-and-adduser{
    width:100%;
   
    display:flex;
    flex-direction:row;
    justify-content:space-between;
   padding:10px;
   .class_add_user{
  text-decoration:none;
  color:black;
  background-color:white;
  border-radius:50px;
  border: 1px solid black;
  padding:10px;
  margin-left:10px;
   }
 }
 

 

.container_sub_header{
  
display:flex;
flex-direction:row;
justify-content:space-between;
margin-bottom:50px;

width:100%;


 
    .container_count_user{
      display:flex;
      width:20%;
        white-space:nowrap;
        gap:0px;

    }
.class_select{

 
  
  padding: 0px 30px;
  margin:auto 10px;
  border-radius:15px;
  height:100%;
 
 .option_placeholder{
display:none;
    }
}
.count_users{
  border:1px solid black;
  margin-right:10px;
  border-radius:15px;
  padding:5px;
  text-align:center;
}
  
}
.table_users{
  border:1px solid black;
  border-radius:10px;
width:98%;
  .container_image{
    margin-left:5px;
  width:30px;
  height:30px;
 border:1px solid black;
  overflow:hidden;
  border-radius:50%;
  .img_table{
    display:block;
    height:30px;
    width:30px;
  }}
}
.header_content{
  display:flex;
flex-direction:row;
width:65%;
  



.class_search{
  
       
       position: relative;
      display: flex;
      align-items: center;
      width: 100%;

        
 .class_search_icon {
        position: absolute;
        right: 15px;
        font-size: 20px;
        color:black;
        pointer-events: none;
        z-index: 1;
      }
      input {
        width: 100%;
        padding: 10px 40px 10px 15px;
        border: 1px solid black;
        border-radius: 20px;
        outline: none;
        font-size: 14px;
        font-family: inherit;
       

        &:focus {
          border-color: #000;
        }
      }
        .class_search_icon{
       
        font-size:1.5rem;
    
    }
    .class_search_container_p{
      border-radius:10px;
      
        .class_search_p{
            font-size:0.9rem;
            margin:5px;
            padding:3px 10px ;
            border-radius:40%;
        background-color:black;
        color:white;
      
      
    }
    }
    
    }
}


/* .container_card{
  margin:20px;
  display:flex;
  justify-content:space-around;
  gap:20px;
width:90dvw;

.card{
 
 border-radius:10px;
 .icon_increase{
 color:green;
 }
 .icon_decrease{
 color:red;
 }

}
 } */
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
 







   
 `