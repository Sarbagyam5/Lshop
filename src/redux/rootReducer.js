import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice.js";
import cartReducer from "./cart/cartSlice.js"

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer
})

export default rootReducer