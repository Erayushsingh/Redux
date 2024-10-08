import { createSlice } from "@reduxjs/toolkit";

const productSlice= createSlice({
    name: 'product',
    initialState: null,
    //like useState we are storing initial value.
    
   reducers: {
    storeProduct: (state,action)=>{
     state= action.payload
     return state
    },

   
     removeProduct: (state)=>{
        return null
     },
    

   } 
})

export const {storeProduct, removeProduct}= productSlice.actions
export default productSlice.reducer 