"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
const CartIcon = () => {
    const selector = useSelector((state) => state.addCart.Product);
  const cart = selector.length;
  return (
    <Link href={"/cart"}>
      <div className="flex items-center gap-2 bg-white p-2 rounded-md">
        <div className=" cursor-pointer">
          <FaShoppingCart className="text-[rgb(22,104,148)]" />
        </div>
        <div className=" text-[rgb(22,104,148)] cursor-pointer font-bold">
          {cart}
        </div>
      </div>
    </Link>
  );
};

export default CartIcon;
