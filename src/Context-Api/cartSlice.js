import { createSlice } from "@reduxjs/toolkit";
import { products } from "./products";
import { useState } from "react";
import { toast } from "react-toastify";
// import { products } from "./products";

const initialState = {
    cart: [],
};

export const cartSlice = createSlice({
  name: "Cartdata",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const product = action.payload
      const existingProduct = state.cart.find((item) => item.id === product.id);
      if(existingProduct){
        state.cart.map((item)=>{
          item.id === product.id ? {...item,quantity: item.quantity++} : item
        })
        toast.success('Product Already in  Cart and Quantity Update', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      }
      else{
        state.cart.push({...product});
        toast.success('Successfully Product Add to cart', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      }
      console.log(product)
      console.log(action.payload)
    },
    setQuantity:(state,action) => {
      const { id, type } = action.payload;
      state.cart = state.cart.map(item => {
        if (item.id === id) {
          return {...item,quantity:type === "increment"? item.quantity + 1 : Math.max(item.quantity - 1, 1) };
        }
        return item;
      });
      console.log(action.payload)
    },
    removetoCart:(state,action) =>{
      state.cart = state.cart.filter((item)=>( item.id !== action.payload))
      // console.log(action.payload)
      toast.error('Successfully Item remove', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
  },
});

export const { addtoCart,setQuantity,removetoCart} = cartSlice.actions;

export default cartSlice.reducer;
