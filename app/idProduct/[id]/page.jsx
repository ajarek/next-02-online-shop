'use client'
import { useRouter } from 'next/navigation'
import Counter from '@/app/utility/counter'
import getProducts from '@/app/utility/getProducts'
import { useContext } from 'react'
import { AppContext } from '../../layout'
import { saveStorage,fetchStorage } from '@/app/utility/localStorage'
import ButtonAddCart from '@/app/components/ButtonAddCart'

export default async function ProductsDetails({ params }) {
  const { dataLength, setDataLength } = useContext(AppContext)
  const router = useRouter()
  const id = params.id
  const { products } = await getProducts()
  const product = products.find((el) => el.id === +id)

  const addToCart = () => {
    const value = document.getElementById('counter').innerText
    const items = { ...product, count: value }
    const storeData = fetchStorage('cart')
    const duble = storeData?.find((el) => el.id === items.id)
    if (duble) {
      alert('duble');
      return
    }
    saveStorage(items, 'cart')
    setDataLength(dataLength + 1)
    router.push('/')
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
        <ButtonAddCart onClick={() => addToCart()} />
      </div>
    </div>
  )
}
