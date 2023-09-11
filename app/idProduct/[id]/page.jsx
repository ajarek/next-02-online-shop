import { notFound, useRouter } from 'next/navigation'
import Counter from '@/app/utility/counter'

const URL1 = 'https://fakestoreapi.com/products'
const URL2 = 'https://dummyjson.com/products/'

async function getProducts() {
  const res = await fetch(URL2, {
    next: {
      revalidate: 60,
    },
  })

  if (!res.ok) {
    notFound()
  }

  return res.json()
}

export default async function ProductsDetails({ params }) {
  const id = params.id
  const { products } = await getProducts()
  const product = products.find((el) => el.id === +id)
  console.log(product)
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
        <button className='transition duration-300 hover:bg-white hover:text-black flex justify-center items-center border-solid border-2 border-gray-500 py-1 px-3 mt-2 rounded-md'>
          Add to Cart
        </button>
      </div>
    </div>
  )
}
