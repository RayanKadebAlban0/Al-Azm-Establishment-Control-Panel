import styled from "styled-components";
export const Styles = styled.div`
.sub_title{
margin:20px 0px;
margin-top:40px;
}
.class_form{
  padding:20px 0px;
  padding-top:0px;
}
 
 .container_data{
  
 
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  width:90%;
  
  
  .right_container_data{
  display:inline-block;
  width:45%;
    
    
     input{
      height:38.6px;
      margin-top:10px;
      border:1px solid black;
      border-radius:10px;
    }
  .container_row{
    display:flex;
    gap:10px;
   
  }

  }
 .left_container_data{
   
  
  
  
  
  padding:10px;
 
  width:40%;
  border:3px dotted black;

  border-radius:10px;
  background-color:rgb(248, 254, 255);
  

  .image_cross{
    display:flex;
  flex-direction:column;
  align-items:center;
 
  height:100%;
  }
  .des{
   
    font-size:0.8rem;
   display:flex;
   margin:auto;
   margin-bottom:0px;
   color: rgb(148, 147, 147);
  
  }
  .title{

     margin:auto;
     margin-top:10px;
     margin-bottom:0px;
  }
  
 .container_camera{
  box-shadow:0px 2px 5px 1px black;
   margin:auto;
   margin-top:20px;
  width:70px;
height:70px;
border:4px solid white;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
background-color:rgb(212, 218, 219);

.camera{
  font-size:1.5rem;
  
}

 }
 .image{
  width:100%;
height:100%;
}
 }
 }




 .container_row_custom_radio{
  display:flex;
  width:90%;

justify-content:space-between;


  .class_filed{
  margin-top:40px;
padding:0px;
    display:flex;
    flex-direction:column;
   gap:10px;
 width:45%;
 .label{
  margin-top:0px;
  margin-bottom:1rem;
 }
 .title_header{
  margin-top:0px;
 }
 
 .input{
  height:47.6px;
 outline:none;
 border:1px solid black ;
  border-radius:10px;
  padding:0px;
 }
 .radio{
  display:flex;
  justify-content:space-between;
 width:100%;

 

     .container_radio{
      border:1px solid black;
      border-radius:10px;
      width:40%;
padding:0px;
   
  input{
  display:none;
}
  .radio_state{
    
    
   
    padding:5px;
    margin-right:20px;
display:flex;

gap:40px;
.icon{
  font-size:1.5rem;
}
.text{
  margin-top:auto;
  margin-bottom:auto;
}

  }
     }               

}

  }

 }


.container_presence_parents{
 display:flex;
  width:90%;
  margin-top:40px;

justify-content:space-between;


  .class_filed{
    display:flex;
    flex-direction:column;
   gap:10px;
 width:100%;
 .label{
  margin-top:40px;
 
 }
 .input{
  height:47.6px;
 
  border-radius:10px;

 }
 .radio{
  display:flex;
  justify-content:space-between;

   width:100%;

     .container_radio{
      border:1px solid black;
      border-radius:10px;
   
      width:18%;
padding:0px;
   
  input{
  display:none;
}
  .radio_state{
    
    
   
    padding:5px;
    margin-right:20px;
display:flex;

gap:40px;
.icon{
  font-size:1.5rem;
}
.text{
  margin-top:auto;
  margin-bottom:auto;
}

  }
     }  
}

  }
 }



 .class_field{
 margin:10px 0px;
     display:flex;
  flex-direction:column;
 
   
width:100%;
.title_categorie{
  padding:10px 0px;
}


 }

 .class_data_phone,.class_password_location,.bottom_container{
   display:flex;
  width:90%;

justify-content:space-between;

.class_field{
    display:flex;
    flex-direction:column;
   gap:10px;
 width:45%;
 .label{
  margin-top:40px;
 
 }
 .input{
  height:38.6px;
 
 border:1px solid black;;
 
  border-radius:10px;
 }
 .container_phone{
width:100%;

 
  display:flex;
  justify-content:flex-end;
  gap:10px;
  .class_phone{
    height:38.6px;
 
 border:1px solid black;;
 
  border-radius:10px;
  text-align:left;
  padding:10px;
 
  width:100%;

}

}
 .id_phone{

  padding:5px;
    height:38.6px;
     border:1px solid black;
 
  border-radius:10px;
 }
 .class_telephone{
 height:38.6px;
 
 border:1px dotted black;;
 
  border-radius:10px;
  text-align:left;
  padding:10px;
 
  width:100%;
 }
 .id_telephone{
padding:10px;
    height:38.6px;
     border:1px dotted black;
 
  border-radius:10px;
 }
 
}
 }
 
 
  .class_date{
    margin-top:0px;
   
  width:100%;
   padding:0px 10px;
   text-align:left;
   
  }
 .class_data_phone,.class_password_location,.class_type_user,.bottom_container{
    display:flex;
  flex-direction:row;
  gap:40px;
  
 }

.class_password,.class_location{
  width:36.5%;

}
.class_nameuser{
  width:76%;
}

.card{
   padding:20px;
   width:45%;
  .icon_and_title{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
   
  }
  .description{
 color:#00000069;
  }
  input{
  display:none;
}
}


.massage_warning{
 
  margin:10px;
   margin-top:40px;
   margin-right:0px;
  background-color:#ffff007d;
 display:flex;
 align-items:center;
 padding:10px;
 gap:10px;
  width:98%;
  height:40px;
  color:#d10404;
}
.add_account{
  width:70%;
  margin:auto;
 margin-top:40px;
  display:flex;
  justify-content:space-between;
  gap:40px;


  .button{
 
  width:50%;
  height:50px;
border:1px solid black;
border-radius:10px;

}
}
.edit_account{
   width:30%;
 
 margin-top:40px;
  display:flex;
  justify-content:space-between;
 
 .button{
 
  width:45%;
  height:50px;
border:1px solid black;
border-radius:10px;

}
}


// من شان النداء للرقك الهاتف
.react-tel-input .selected-flag {
  display: none !important;
}

.react-tel-input .selected-flag .flag {
  display: none !important;
}



//اختيار الفئة

.class_type_user{
width:90%;

display:flex;
justify-content:space-between;


.icon_and_title{
  padding-right:40px;
  padding-bottom:20px;
  
}
.icon{
  padding:0px 40px;
}
.description{
  padding-right:39px;
}
.title_role{
  display:inline;
 
}

}



.bottom_right_container_data{
   display:flex;
  flex-direction:row;
   display:flex;
    gap:10px;
  justify-content:space-between;







  .class_field_gender{
    display:flex;
  flex-direction:column;
 
width:100%;
   height:50px;
    gap:10px;
    margin-top:10px;
   
   
    
  }
 
  .class_gender{
  
  margin-bottom:0px;
      display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
   height:40px;
width:100%;
border:1.px solid black;



.gender-male{
     display:flex;
  flex-direction:row;
  align-items:center;
  
  justify-content:center;
   border:1px solid black;
   width:50px;
   height:35px;
   margin:auto;
   margin-right:2px;
border-radius:10px; 
}
 }
  
 }
.class_gender{
  
      display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
 
width:100%;
border:1px solid black;


border-radius:10px;
.card_gender{
 
  display:flex;
  align-items:center;
  justify-content:center;
 
  width:100%;
   height:33px;
  
   margin-right:2px;
   margin-left:2px;
   margin:2px;

 input{
    display:none;
  }


}
.activite_gender{
  
   border:1px solid black;
   border-radius:10px;
}
.gender_male{ display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  
   width:5;
   height:35px;
   margin:auto;
   margin-right:2px;


}
}


.componentOption{
  background-color:transparent;

  .checked{
   
  }
}


 
`;


  

