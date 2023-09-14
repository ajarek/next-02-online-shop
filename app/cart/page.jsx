'use client'
import { useState, useEffect, useContext } from 'react'
import { AppContext } from '../layout'
import Link from 'next/link'
import { fetchStorage, deleteStorage, saveStorageSingle } from '@/app/utility/localStorage'

export default function page() {
  const { dataLength,setDataLength } =  useContext(AppContext)
  const [data, setData] = useState([])

  useEffect(() => {
    const storedData = fetchStorage('cart')
    if (storedData) {
      setData(storedData)
    }
  }, [])

 const deleteAll=()=>{
  deleteStorage('cart')
  setData([])
  setDataLength(0)
  
 }

 const deleteItem= (id)=>{
  const filterData=data.filter(fl=>fl.id!==id)
  setData(filterData)
  saveStorageSingle(filterData, 'cart')
  setDataLength(filterData.length)
 }

 const amountToPay=()=>{
  const totalValueProducts=data.reduce((acc,item)=>acc+item.price*item.count,0)
  return totalValueProducts.toFixed(2)
 }
  return (
    <div className='pt-24 px-12 '>
      <h1 className='text-black text-center'>Cart</h1>
      {dataLength>0?
      <>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className=''>Miniature</th>
            <th>Name</th>
            <th className='text-center'>Quantity</th>
            <th className='text-right'>Price $</th>
            <th className='text-right'>Value $</th>
            <th className='text-center'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => {
            return (
              <tr
                key={el.id}
                className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
              >
                <td  className=' h-14'>
                  <img
                    className='h-full  object-contain  '
                    src={el.images[0]}
                    alt='images'
                  />
                </td>
                <td className='mr-2'>{el.title}</td>
                <td className='mr-2 text-center'>{el.count}</td>
                <td className='mr-2 text-right'>{(el.price).toFixed(2)}</td>
                <td className='mr-2 text-right'>{(el.count * el.price).toFixed(2)}</td>
                <td className='mr-2 text-center'>
                  <button onClick={()=>deleteItem(el.id)} className='cursor-pointer text-lg hover:text-xl transition'>🗑️</button>
                  </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className='w-full flex  items-center justify-between mt-4 px-8' >
        <div>
      <button className=' text-black text-xl bg-red-300 hover:bg-red-500 py-2 px-4 mx-auto my-4 rounded-lg shadow-lg transition' onClick={()=>deleteAll()}>Delete All</button>
      </div>
      <div className='text-black text-lg'>Amount to pay: <span className='text-xl font-medium'>{amountToPay()} $</span> </div>
      </div>
      </>
      :
      <div className='flex flex-col items-center mt-4'>
      <p className=' text-xl text-red-500'>Cart is empty!</p>
      <Link href={'/'} className='text-black text-xl bg-emerald-300 hover:bg-emerald-500 py-2 px-4 mx-auto my-4 rounded-lg shadow-lg transition'>Back to the store</Link>
      </div>
    }
    </div>
  )
}
