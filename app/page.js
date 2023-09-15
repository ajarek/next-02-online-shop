'use client'

import { useRouter } from 'next/navigation'
import getProducts from './utility/getProducts'

export default async function Home() {
  const router = useRouter()
  const {products} = await getProducts()

  const editProducts = (id) => {
    router.push(`/idProduct/${id}`)
  }
  return (
    <div className='grid gap-6 grid-cols-3 grid-rows-10 px-10 pt-24 pb-10'>
      {products.map((product) => (
        <div
          onClick={() => editProducts(product.id)}
          className='card'
          key={product.id}
        >
          <div className='h-48 mx-auto'>
            <img
              className='h-full w-full object-contain  '
              src={product.images[0]}
              alt=''
            />
          </div>
          <div>{product.title}</div>
          <div>{(product.price).toFixed(2)} $</div>
        </div>
      ))}
    </div>
  )
}
