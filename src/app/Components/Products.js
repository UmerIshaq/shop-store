"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch,  } from 'react-redux'
import { addProduct } from '../redux/Slices/addcartSlice'
import Link from 'next/link'



const Products =() => {
    const dispatch = useDispatch()
    // const [products,setproducts]=useState([]);
    
  return (
    <div className='bg-[rgb(245,247,249)] py-20'>
        <div>
            <div className=' flex justify-center items-center flex-wrap gap-8'>
                {
                data.map(item=>(
                    <div className=' shadow-xl py-4 rounded-2xl' key={item.id} >
                        <div className='bg-[rgb(22,104,148)]'>
                            <Image src={item.image} alt='' className='card-image' width={300} height={300}/>
                        </div>
                        <div className='p-4'>
                            <h3 className=' font-bold'>{item.name}</h3>
                            <p className=' text-gray-500'>{item.Category}</p>
                            <h2 className=' font-medium'>${item.Price}</h2>
                            <button className='button'
                            onClick={()=>dispatch(addProduct(item))}
                            >Add To Cart</button>
                        </div>
                    </div>
                    
                ))
                }
            </div>
        </div>
        
    </div>
  )
}

export default Products


const data=[
  {
      id:"1",
      name:"DNK Yellow Shoes",
      Category:"Men",
      color:"yellow",
      Price:20.00,
      image:"/images/sports-shoe3-300x300.jpg"
 },
  {
      id:"2",
      name:"DNK Blue Shoes",
      Category:"Men",
      color:"Blue",
      Price:30.00,
      image:"/images/sports-shoe2.jpg"
 },
  {
      id:"3",
      name:"Dark Brown Jeans",
      Category:"Men",
      color:"Dark Brown",
      Price:50.00,
      image:"/images/product-m-jeans1-300x300.jpg"
 },
  {
      id:"4",
      name:"Blue Denim Jeans",
      Category:"Women",
      color:"Blue",
      Price:55.00,
      image:"/images/product-w-jeans2-300x300.jpg"
 },
  {
      id:"5",
      name:"Basic Gray Jeans",
      Category:"Women",
      color:"Gray",
      Price:45.00,
      image:"/images/product-w-jeans4-300x300.jpg"
 },
  {
      id:"6",
      name:"Blue Denim Shorts",
      Category:"Women",
      color:"Blue",
      Price:35.00,
      image:"/images/blue-denim shorts.jpg"
 },
  {
      id:"7",
      name:"Anchor Bracelet",
      Category:"Accessories",
      color:"White",
      Price:110.00,
      image:"/images/anchor-bracelet.jpg"
 },
  {
      id:"8",
      name:"Boho Bangle Bracelet",
      Category:"Accessories",
      color:"green",
      Price:120.00,
      image:"/images/product-accessory1-300x300.jpg"
 },
  {
      id:"9",
      name:"Light Brown Purse",
      Category:"Accessories",
      color:"yellow",
      Price:150.00,
      image:"/images/product-bag1-300x300.jpg"
 },
  {
      id:"10",
      name:"Bright Red Bag",
      Category:"Accessories",
      color:"Red",
      Price:150.00,
      image:"/images/product-bag3-300x300.jpg"
 },
]