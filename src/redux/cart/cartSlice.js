import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name:"cart",
  initialState:{
    items:[],
  },
  reducers:{
    addItem :(state,action)=>{
      const { id, name, price,imageUrls,brand } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ id, name, price,imgUrl:imageUrls?imageUrls[0]:null, brand,quantity: 1 });
      }
    },
    increaseItem:(state,action)=>{
      state.items = state.items.map(item => item.id==action.payload?{...item,quantity: item.quantity+1}:item)
    },
    decreaseItem:(state,action)=>{
      state.items = state.items.map(item => item.id==action.payload &&item.quantity>1?{...item,quantity: item.quantity-1}:item)
    },
    removeItem :(state,action)=>{
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart :(state,action)=>{
      state.items=[];
    }
  }
})

export const { addItem,clearCart,removeItem,decreaseItem,increaseItem } = cartSlice.actions;
export default cartSlice.reducer;