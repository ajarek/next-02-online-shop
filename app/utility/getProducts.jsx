const URL1 = 'https://fakestoreapi.com/products'
const URL2 = 'https://dummyjson.com/products/'
import { notFound } from 'next/navigation'
export default async function getProducts(time=0) {
  const res = await fetch( URL2, {
    next: {
      revalidate: time // use 0 to opt out of using cache
    }
  })
  if (!res.ok) {
    notFound()
  }
  return res.json()
}