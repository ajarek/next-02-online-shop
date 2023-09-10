import { notFound, useRouter } from "next/navigation"


const URL1 = 'https://fakestoreapi.com/products'
const URL2 = 'https://dummyjson.com/products/'


async function getProducts() {
  const res = await fetch(URL2, {
    next: {
      revalidate: 60
    }
  })

  if (!res.ok) {
    notFound()
  }

  return res.json()
}

export default async function ProductsDetails({ params }) {
   const id = params.id
  const {products}= await getProducts()
  const product=products.find(el=>el.id===+id)
 console.log(product);
  return (
    <div className="py-24 text-white">
      
        <h2 className="text-black">Product  Details</h2>
      
      <div className="card">
        <h3>{product.title}</h3>
        <p>{product.price}</p>
      </div>
    </div>
  )
}