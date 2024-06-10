"use client"
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, removeProduct } from "../redux/Slices/addcartSlice";


const AddCart = (prop) => {
    const selector = useSelector((state) => state.addCart.Product);
    const dispatch = useDispatch();
    const [cart,setRemove]=useState(true)
   function AddToCart(){
    setRemove(false);
    dispatch(addProduct(prop.prop));
   }
   
   function RemoveToCart(){
    setRemove(true);
    dispatch(removeProduct(prop.prop)) 
}
  return (
    <div>
          {(cart==true)?
            <button className="button1" onClick={() => AddToCart()}>
            Add To Cart
            </button>
            :<button className="button2" onClick={() => RemoveToCart()}>
            Remove Cart
        </button>
          }
    </div>
  )
}

export default AddCart