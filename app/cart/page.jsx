'use client'

import { fetchStorage } from '@/app/utility/localStorage'
import { useState, useEffect } from 'react'
export default function page() {
  const [data, setData] = useState([])
  useEffect(() => {
    const storedData = fetchStorage('cart')
    if (storedData) {
      setData(storedData)
    }
  }, [])

  return (
    <div className='pt-24 px-12 '>
      <h1 className='text-black text-center'>Cart</h1>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className=''>Miniatura</th>
            <th>Nazwa</th>
            <th>Ilość</th>
            <th>Cena PLN</th>
            <th>Wartość PLN</th>
            <th>Usuń</th>
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
                <td className='mr-2'>{el.count}</td>
                <td className='mr-2'>{(el.price).toFixed(2)}</td>
                <td className='mr-2'>{(el.count * el.price).toFixed(2)}</td>
                <td className='mr-2 cursor-pointer'>❌</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
