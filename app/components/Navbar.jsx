import { useState, useEffect, useContext } from 'react'
import { AppContext } from '../layout'
import { FaShoppingCart } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import Logo from './my-logo.png'
import {fetchStorage} from '@/app/utility/localStorage'

export default  function Navbar() {
  const { dataLength,setDataLength } =  useContext(AppContext)
  useEffect(() => {
    const storedData = fetchStorage('cart')
    if (storedData) {
      setDataLength(storedData.length)
    }
  }, [dataLength])
  return (
    <nav>
      <Image
        src={Logo}
        alt='my logo'
        width={40}
        placeholder='blur'
        quality={100}
      />
      <h1>Online Shop</h1>
      <div className="flex justify-between  w-10/12 items-center">
      <Link className='text-lg' href="/">Home</Link>
      <Link className='flex' href="/cart"><FaShoppingCart size={30}/><sup className='text-lg ml-2'>{dataLength}</sup></Link>
      </div>
    </nav>
  )
}