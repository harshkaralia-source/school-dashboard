import Image from 'next/image'
import React from 'react'

const UserCard = ({type}: {type:string}) => {
  return (
    <div className='rounded-xl odd:bg-MyPurple even:bg-MyYellow p-4 flex-1'>
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-2 rounded-full text-green-600">2024/25</span>
        <Image src='/more.png' width={20} height={20} alt='' />
      </div>
      <div className="text-2xl font-semibold my-4">1,234</div>
      <h2 className='capitalize text-sm font-medium text-gray-500'>{type}</h2>
    </div>
  )
}

export default UserCard
