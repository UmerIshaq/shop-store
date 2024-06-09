"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch,  } from 'react-redux'
import { addProduct } from '../redux/Slices/addcartSlice'
import Link from 'next/link'

const Products =() => {
    const dispatch = useDispatch()
    const [products,setproducts]=useState([]);
    useEffect( ()=>{
      async function fetchApi(){
        const res= await fetch("https://shop-store-dov9.vercel.app/lib")
        const prod=await res.json();
        
        setproducts(prod)
      }
      fetchApi();
    },[])
  return (
    <div className='bg-[rgb(245,247,249)] py-20'>
        <div>
            <div className=' flex justify-center items-center flex-wrap gap-8'>
                {
                products.map(item=>(
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