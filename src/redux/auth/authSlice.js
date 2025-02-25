import { createSlice } from "@reduxjs/toolkit";
import {loginUser, registerUser} from "./authAction";

const authSlice = createSlice({
name : "auth",
initialState:{
  loading:false,
  user: null,
  error: null,
  },
  reducers:{
    logoutUser: (state)=>{
      state.user=null;
      // window.location.reload();
    }
  },
  extraReducers:(builder)=> builder
  .addCase(loginUser.pending, (state)=>{
    state.loading = true;
    state.user = null;
    state.error= null;
  })
  .addCase(loginUser.fulfilled, (state, action)=>{
    state.user = action.payload;
    state.loading = false;
  })
  .addCase(loginUser.rejected, (state,action)=>{
    state.error = action.payload;
    state.loading = false;
  })
    //register User
  .addCase(registerUser.pending, (state)=>{
    state.loading = true;
    state.user = null;
    state.error= null;
  })
  .addCase(registerUser.fulfilled, (state, action)=>{
    state.user = action.payload;
    state.loading = false;
  })
  .addCase(registerUser.rejected, (state,action)=>{
    state.error = action.payload;
    state.loading = false;

  })
})

export const {logoutUser} = authSlice.actions;
export default authSlice.reducer;