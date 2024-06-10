import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react";


const initialState = {
    Product: [],
    price:0,
}

export const addCartSlice=createSlice({
    name:"AddCart",
    initialState,
    reducers:{
        addProduct:(state,action)=>{
            const amount = action.payload.name.Price
            state.price+=amount
            const data = action.payload
            state.Product.push(data)
        },
        removeProduct:(state,action)=>{
            const prod=action.payload.name
            const data = state.Product.filter((item)=>(
                item.id!=action.payload.id
                
            )) 
            state.Product=data
            state.price-=prod.Price
        },
       
    }
})

export const {addProduct,removeProduct}=addCartSlice.actions;
export default addCartSlice.reducer
