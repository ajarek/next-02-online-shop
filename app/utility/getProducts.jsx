const URL1 = 'https://fakestoreapi.com/products'
const URL2 = 'https://dummyjson.com/products/'
export default async function getProducts() {
  const res = await fetch( URL2, {
    next: {
      revalidate: 0 // use 0 to opt out of using cache
    }
  })
  return res.json()
}