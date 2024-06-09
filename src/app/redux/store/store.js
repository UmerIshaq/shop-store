import { configureStore } from "@reduxjs/toolkit";
import reducer from "../Slices/addcartSlice"

const Store=configureStore({
    reducer:{
        addCart:reducer,
    }
})

export default Store