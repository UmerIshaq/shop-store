"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdCancel } from "react-icons/md";
import { removeProduct } from "../redux/Slices/addcartSlice";

const Cartpage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.addCart.Product);
  const price = useSelector((state) => state.addCart.price);
  return (
    <div className="py-20">
      {data.length == 0 ? (
        <div className="  py-10 ">
          <h1 className="font-bold text-4xl text-[rgb(22,104,148)] text-center">
            No items Available...!
          </h1>
        </div>
      ) : (
        <div>
          <div>
            {data.map((item) => {
              const prod = item.name;
              return (
                <div
                  key={item.id}
                  className="flex justify-between items-center py-3 md:px-20"
                >
                  <div key={item.id} className=" relative w-20 h-20 sm:w-40 sm:h-40">
                    <Image
                      src={prod.image}
                      alt="cart product image"
                      fill
                    />
                  </div>
                  <div key={item.id}>{prod.name}</div>
                  <div key={item.id}>${prod.Price}</div>
                  <div key={item.id}>
                    <button
                      className=""
                      onClick={() => dispatch(removeProduct(item))}
                      key={item.id}
                    >
                      <MdCancel className="w-8 h-8 text-[rgb(22,104,148)]" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <hr />
          <div className=" text-end py-3 px-2">Total Amount: {price}$</div>
        </div>
      )}
    </div>
  );
};

export default Cartpage;
