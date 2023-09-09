
const URL1 = 'https://fakestoreapi.com/products'
const URL2 = 'https://dummyjson.com/products/'



async function getTickets() {
  const res = await fetch( URL2, {
    next: {
      revalidate: 0 // use 0 to opt out of using cache
    }
  })
  return res.json()
}

export default async function Home() {
 
  const articles= await getTickets()
 
  return (
    <>
    {articles.products.map((product)=>(
        <div className="card" key={product.id}>{product.title}</div>
      )
    )}
    </>
  )
}
