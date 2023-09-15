const URL1 = 'https://fakestoreapi.com/products'
const URL2 = 'https://dummyjson.com/products/'
import { notFound } from 'next/navigation'
export default async function getProducts() {
  const res = await fetch( URL2)
  if (!res.ok) {
    notFound()
  }
  return res.json()
}