'use client'

import Counter from '@/app/utility/counter'
import getProducts from '@/app/utility/getProducts'
import { useState,useEffect } from 'react'

export default async function ProductsDetails({ params }) {
  
  const id = params.id
  const { products } = await getProducts(60)
  const product = products.find((el) => el.id === +id)
 
        
        
      
  const addToCart =()=>{
    const value =document.getElementById('counter').innerText
    const items={ ...product, count: value }
    console.log(items);
  }

  return (
    <div className='p-24 text-white'>

      <h2 className='text-black'>Product Details</h2>

      <div className='bg-black p-5'>
        <div className='h-72 mx-auto'>
          <img
            className='h-full w-full object-contain  '
            src={product.images[0]}
            alt=''
          />
        </div>
        <h3>{product.title}</h3>
        <p>{product.price.toFixed(2)} $</p>
        <p>{product.description}</p>
        <Counter />
        <button onClick={()=>addToCart()}  className='transition duration-300 hover:bg-white hover:text-black flex justify-center items-center border-solid border-2 border-gray-500 py-1 px-3 mt-2 rounded-md'>
          Add to Cart
        </button>
      </div>
    </div>
  )
}
