import styled from 'styled-components';
 export const Styles = styled.div`

.container_row{
 width:96%;
  display:flex;
  justify-content:space-between;
 
  .container_columns{
    margin-top:40px;
    width:47%;
     display:flex;
     flex-direction:column;
gap:10px;

     .select_type{
     color:rgb(72, 74, 75);
     }
     .date_and_time{
      
      text-align:left;
      direction:ltr;
     }
    
     
     .input{
      width:100%;
      padding:0px 10px;
      outline:none;
      border:1px solid black;
      border-radius:10px;
      height:40px;
     }
  }

}

.container_coulmn_content_notificat{

 
  
  width:96%;
    display:flex;
    flex-direction:column;
    gap:10px;
    margin:40px 0px;
    .container_input{
     
    padding:0px;
     border:1px solid black;
    border-radius:10px;
   
    }
   .content_notification{
 
    padding:10px;
    outline:none;
    border:none;
    border-top-right-radius:10px;
    border-top-left-radius:10px;
   width:100%;
   height:10dvh;
   }
    .counter{
     text-align:left;
     padding:5px;
     padding-left:10pX;

    }
  }
  






  .class_filed{
   
    display:flex;
    flex-direction:column;
    gap:10px;
    margin-top:40px;
  
 width:47%;
 padding-top:0px;


 .title_header{
  margin-bottom:0px;
 }
 .input{
  height:40px;
 margin-top:0px;
  border-radius:10px;

 }
 .radio{
 
  display:flex;
  justify-content:space-between;
 width:100%;

 

     .container_radio{
      display:flex;
      align-items:center;
      
      border:1px solid black;
      border-radius:10px;
      width:40%;
padding:0px;
height:40px;
   
  input{
  display:none;
}
  .radio_state{
    
    
   
    padding:5px;
    margin-right:20px;
display:flex;

gap:40px;
.icon{
  font-size:1.2rem;
}
.text{
  margin-top:auto;
  margin-bottom:auto;
}

  }
     }               

}

  }
  .single_childreen{
width:96%;

  margin-top:0px;
   border-top-right-radius:10px;
      border-top-left-radius:10px;
  
  border: 1px solid black;
  .add_optional{
        padding:10px;
      border-top-right-radius:10px;
      border-top-left-radius:10px;
      font-size:1.2rem;
    width:100%;
      background-color:rgba(30, 26, 26, 0.15);
     }
  .container_columns{
    width:100%;
    .option{
      width:100%;
display:flex;
justify-content:space-between;

      .container_columns{
       margin:20px;
     
        width:45%;

        .input{
          position: relative;
          text-align:left;
          border:2px dotted black;
          border-radius:10px;

        }
        .icon{
          position:absolute;
          top:0px;
          left:10px;
          font-size:1.5rem;
        }
      }
    }
  }
  
}
.container_button_send{
  width:96%;
 
  display:flex;
  justify-content:center;
}
.send_notification{
  padding:10px 40px;
  width:20%;
  margin-top:50px;
  margin-bottom:80px;
background-color:transparent;
  border:2px solid black;
  border-radius:20px;
}



.class_type_user{
  display:flex;
  flex-direction:row;
  width:96%;
 justify-content:space-between;
 
.label{
  width:20%;
   border-radius:50px;
   border:1px solid black;
}
  input{
    display:none;
 
  }
  .icon_and_title{

 
height:40px;
padding:0px 10px;

display:flex;
justify-content:space-around;

.text{
 
  display:flex;
  align-items:center;
}
.icon{
  
  display:flex;
  align-items:center;
  font-size:1.5rem;
 
}
  }
}
.send{
  background-color:rgba(72, 74, 75, 0.27);
  
  padding:5px 20px;
   border:none;
  border-radius:10px;
 
}


  `