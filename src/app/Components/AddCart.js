"use client"
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, removeProduct } from "../redux/Slices/addcartSlice";


const AddCart = (prop) => {
    // console.log(prop);
    const selector = useSelector((state) => state.addCart.Product);
    const dispatch = useDispatch();
    const [cart,setRemove]=useState(true)
   function AddToCart(){
    setRemove(false);
    dispatch(addProduct(prop));
   }
   function RemoveToCart(){
    setRemove(true);
    selector.map((item) => dispatch(removeProduct(item)));
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