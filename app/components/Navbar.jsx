import { useState, useEffect, useContext } from 'react'
import { AppContext } from '../layout'

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
      <div className="wrapper-link">
      <Link href="/">Home</Link>
      <Link href="/cart">🛒<sup>{dataLength}</sup></Link>
      </div>
    </nav>
  )
}