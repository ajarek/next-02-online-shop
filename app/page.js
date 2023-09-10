"use client"

import { notFound, useRouter } from "next/navigation"
const URL1 = 'https://fakestoreapi.com/products'
const URL2 = 'https://dummyjson.com/products/'



async function getProducts() {
  const res = await fetch( URL2, {
    next: {
      revalidate: 0 // use 0 to opt out of using cache
    }
  })
  return res.json()
}

export default async function Home() {
  const router = useRouter()
  const articles= await getProducts()

 const editProducts=(id)=>{
  router.push(`/${id}`)
 }
  return (
    <div className="grid gap-6 grid-cols-3 grid-rows-10 px-10 pt-24 pb-10">
    {articles.products.map((product)=>(
        <div onClick={()=>editProducts(product.id)} className="card" key={product.id}>
         <div className="h-48 mx-auto"><img className="h-full w-full object-contain  "  src={product.images[0]} alt="" /></div> 
         <div>{product.title}</div> 
         <div>{product.price} PLN</div> 
          </div>
      )
    )}
    </div>
  )
}
