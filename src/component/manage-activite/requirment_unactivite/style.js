import styled from 'styled-components';
 export const Styles = styled.div`
 .container_card{
  margin:20px;
  display:flex;
  justify-content:space-between;
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
 }

  .class_search{
        width:280px;
        height:300%;
        border-radius:30px;
       
        background-color:white;
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
      border: 1px solid black;
        .class_search_input{
        margin:10px;
            outline:none;
            border:none;
        }
        .class_search_icon{
       
        font-size:1.5;
    
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


     .container_filter{
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:flex-end;
 }


 .option_non_display{
  display:none;
 }
    
 `