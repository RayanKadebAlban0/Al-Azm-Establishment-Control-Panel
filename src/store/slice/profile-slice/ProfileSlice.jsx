import { createSlice } from "@reduxjs/toolkit";
const ProfileSlice= createSlice({
  name:"student2",
  initialState:{
    profileData:null,
    // language:null,
    isload:true,
  },
  reducers:
  {
    setPorfileData:(state,{payload})=>{
      state.profileData=payload;
      state.isload=false;
    },
    setIsLoading:(state)=>{
      state.isload=true;
    },
    // setLanguage:(state,{payload})=>{
    //   state.language=payload;
    //   state.isloading=false;
    // }

  }
})
export const {setIsLoading,setPorfileData} = ProfileSlice.actions
export default ProfileSlice.reducer