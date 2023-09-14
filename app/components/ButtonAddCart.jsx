export default function ButtonAddCart({onClick}) {
  return (
    <button onClick={onClick}  className='transition duration-300 hover:bg-white hover:text-black flex justify-center items-center border-solid border-2 border-gray-500 py-1 px-3 mt-2 rounded-md'>
    Add to Cart
  </button>
  )
}
