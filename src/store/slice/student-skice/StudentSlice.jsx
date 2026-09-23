import { createSlice } from "@reduxjs/toolkit";
const StudentSlice= createSlice({
  name:"student1",
  initialState:{
   
    language:null,
    isload:true,
  },
  reducers:
  {
    
    setIsLoading:(state)=>{
      state.isload=true;
    },
    setLanguage:(state,{payload})=>{
      state.language=payload;
      state.isload=false;
    }

  }
})
export const {setIsLoading,setLanguage} = StudentSlice.actions
export default StudentSlice.reducer