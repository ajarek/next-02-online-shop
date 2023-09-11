"use client"

import { useState, useEffect, useContext } from 'react'
import { AppContext } from '../layout'
import { FaPlus, FaMinus } from 'react-icons/fa'


export default function Counter() {
  const { count, setCount } =  useContext(AppContext)
 
  
  return (
    <div className='flex '>
      <button className='counter' onClick={()=>count<=1?setCount(1):setCount(count-1)}><FaMinus/></button>
      <div  className='counter'>{count}</div>
      <button className='counter' onClick={()=>count>=20?setCount(20):setCount(count+1)}><FaPlus/></button>
    </div>
  )
}

