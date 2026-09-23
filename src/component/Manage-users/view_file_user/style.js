import styled from 'styled-components';
 export const Styles = styled.div`
 
  width:98%;
 
 .top_container{
  display:flex;
  flex-direction:column;

 width:100%;
 
 .container{
  
   display:flex;
   flex-direction:row;
   margin:0px;
   padding:0px;
  
   .img{
    width:18%;
    border-radius:30px;
    border:1px solid black;

    
  }
  .container_pargraph{
    margin:20px 0px;
    gap:20px;
    display:flex;
    flex-direction:row;
font-size:0.8rem;
  }

.content{

  width:80%;
margin-right:20px;
 display:flex;
flex-direction:column;
justify-content:center;


.container_row{
   background-color:rgba(208, 217, 166, 0.89);
    display:flex;
    flex-direction:row;
  }

.details{
margin-left:0px;

width:100%;
  padding-right:0px;
    display:flex;
    flex-direction:row;
  justify-content:space-between;
 

  .container_row{
   
      width:30%;
    border:1px solid black;
    border-radius:10px;
    padding:10px 40px;

    display:flex;
    flex-direction:row;

    .icon{
    margin-left:20px;
      font-size:2rem;
      margin-top:auto;
      margin-bottom:auto;

    }
    .icon_feather{
       font-size:1.5rem;
      margin-top:auto;
      margin-bottom:auto;
    }
   
    .container_column{
      gap:10px; 
display:flex;
flex-direction:column;
.value{
  
  margin:0px;
}
    }}
  
   

  
  
    }


}
 }

.view_information_contact{
 background-color:transparent;
 

 width:200px;
 border:none;
  color:black;
margin-top:0px;
padding-top:0px;
 margin-right:22%;
}

.container_information_contact{
  padding-top:20px;
.information_contact{
  display:flex;
  flex-direction:row;
  color:rgba(118, 118, 115, 0.89);
  gap:20px;
}
.information_contact_with_parents{
 .container_row{
   color:rgba(118, 118, 115, 0.89);;
  display:flex;
  flex-direction:row;
  gap:20px;
   .parent{
    margin-left:50px;
   }
 } 
}
.hidden_information_contact{
  background-color:transparent;
 
 border:none;
  color:black;
text-align:right;

}
}
   
  }

 





.hr{

box-shadow:1px 1px 1px 1px green;



}
.record_activite{
  margin:40px 0px;
 margin-left:30px;
width:98%;
  display:flex;
 justify-content:space-between;


 .title{
 
margin-top:0px;
display:flex;
align-items:center;
 width:20%;
 }
 
 .container_row{
        background-color:rgba(234, 243, 196, 0.72);
    border:1px solid black;
    border-radius:10px;
    padding:10px 20px;

    display:flex;
    flex-direction:row;
    width:22%;
   
  .icon{
      font-size:1.5rem;
      margin-top:auto;
      margin-bottom:auto;
      margin-left:20px;

    }
    .icon_feather{
     
       font-size:1rem;
      margin-top:auto;
      margin-bottom:auto;
    }
    .container_column{
      gap:10px; 
display:flex;
flex-direction:column;
.value{
  
  margin:0px;
}
    }}
 
}

.table_activite{
  border:1px solid black;
  border-radius:15px;
  padding:5px;
  
  margin-left:20px;
  width:100%;
}

.container_extra{
  width:98%;
  display:flex;

  justify-content:space-between;
  .container_column{
    width:49%;
    .title{
   
      margin-top:60px;
    }
  }
  .add_note_or_valuation{

   height:auto;
  display:flex;
  flex-direction:column;
  
    margin-top:40px;
   
   
    width:49%;
    
    
     .button{
     
 background-color:rgba(208, 217, 166, 0.89);

width:50%;
text-align:center;
padding:20px;
border:none;
 border-bottom:2px solid black;
margin-bottom:0px;
    height:100%;
   
    border-bottom-left-radius:0px;
     border-bottom-right-radius:0px;
     border-top-left-radius:10px;
     border-top-right-radius:10px;
     
  input{
  display:none;
  
}

    }
    .activite{
      
      width:50%;
     background-color:transparent;
    
      border:2px solid black;
      border-bottom:none;
     border-top-left-radius:10px;
     border-top-right-radius:10px;
    }
   .content{
    margin:0px;
    padding:0px;
   height:100%;
border:2px solid black;
border-radius:10px;
border-top-right-radius:0px;
border-top-left-radius:0px;
border-top:none;

   }
  }
   .container_option{
   
    position:relative;
    height:100%;
    padding:20px;
   
.new_valuation{
  background-color:red;}
.button_add_valuation{
  background-color:transparent;
      padding:0px 10px;
      border:2px solid black;
     border-radius:10px;
    
        position:absolute;
        bottom:5%;
        left:20px;
  display:flex;
 
  align-items:center;
      gap:20px;
     b{
  
     
     }
      span{
        font-size:1.5rem;
      }
    
}
.text_area{
 padding:10px 20PX;
  margin:30px;
 
  width:95%;
  height:50%;
  border:1px solid black;
  border-radius:10px;
}
.input_note{
 
  width:95%;
  padding:5px 10px  ;
  margin-right:30px;
  margin-bottom:10px;
  border:1px solid black;
  border-radius:5px;

}
}
}
.container_add_crose{
   position:fixed;
    transform:translateX(-50%);
  top:0px;
  left:50%;
 
    z-index:1;
    display:flex;
 flex-direction:column;
 align-items:center;
 
  width:100dvw;
  height:110%;

 background-color:rgba(6, 6, 6, 0.63);

}

.container_cross{
  background-color:white;
  padding:80px 100px;
  width:50%;
 margin-top:5%;
 
 
 display:flex;
 flex-direction:column;
 align-items:center;
 
  border:1px solid black;
  border-radius:10px;
  .content{
    width:100%;

    display:flex;
 flex-direction:column;
  }
  .image_cross{
 display:flex;
  flex-direction:column;
  width:50%;

 margin-left:auto;
 margin-right:auto;

  border:3px dotted black;
  border-radius:10px;
  background-color:rgb(248, 254, 255);
  .des{
    font-size:0.8rem;
   display:flex;
   margin:auto;
   color: rgba(176, 173, 173, 0.65);
  }
  .title{
    
     margin:auto;
     margin-top:10px;
    cursor: pointer;
  }
  
 .container_camera{
  
   margin:auto;
   margin-top:20px;
   margin-bottom:20px;
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
  }
  .input_file{
  display:none;
}
  .title{
    margin:20px 0px;
    margin-top:30px;
    .note{
      color:rgb(91, 92, 93);
    }
  }
  .input_name_cross{
    width:100%;
    border:1px solid black;
    border-radius:5px;
    padding:5px;
   
  }
 .buttons_cross{
  margin-top:30px;
  display:flex;
  gap:10px;
  .button{
background-color:transparent;
padding:10px 10px;
width:50%;
border-radius:10px;
  }
 }
 .image{
  border-radius:10px;
 }
 }

.bottom_container{
 width:98%;
  margin-top:40px;
  .container_row{
    margin-bottom:10px;
    
    display:flex;
    justify-content:space-between;
   
    .button{
     
      background-color:transparent;
      padding:0px 10px;
      border:2px solid black;
     border-radius:10px;
        
  display:flex;
 
  align-items:center;
      gap:20px;
     b{
  
     
     }
      span{
        font-size:1.5rem;
      }
    }
  }
  
  .icon_title{
    font-size:2.5rem;
  }
  .content_all{
 border:2px solid black;
     border-radius:10px;
       /* margin-left:20px; */
       margin-bottom:50px;
        padding:20px;
     .view_all{
     display:inline-block;
     width:99%;
      text-align:left;
     
      margin-bottom:20px;
   
     }
.content{
    
  padding:10px;

     display:flex;
      flex-direction:row;
      justify-content:space-between;
      
    .container_column{
       .view_all{
        text-align:left;
       }
      display:flex;
      flex-direction:column;
      b{
       
        margin:0px;
        text-align:center;
      }
      

}

    }

  }

  .circular{
        width:80px;
        height:80px;
        
 
       }
       .icon{
  padding:10px;
  font-size:3.6rem;
 background-color:rgba(208, 217, 166, 0.89);
  color:black;
  border-radius:50%;
  
}
  }
  
  


   
   


.container_buttons{
    display:flex;
    
    gap:20px;
    position:absolute;
    top:-50px;
    left:4%;
   }

.button_block{
  background-color:transparent;
  padding:0px 10px;
  border:1px solid black;
  border-radius:15px;
}
@media (min-width: 768px) {
    .container, .container-md, .container-sm {
        max-width: 98%;
        background-color:transparent;
    }
}
 
@media (min-width: 768px) {
    .caxYtS .container, .caxYtS .container-md, .caxYtS .container-sm {
        max-width: 98%;
        background-color:transparent;
    }
}

 `