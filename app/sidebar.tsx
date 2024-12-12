import React from 'react'
import Home from '@/assets/Home.png'
import Inventory from '@/assets/Inventory.png'
import Transaction from '@/assets/Transaction.png'
import Image from 'next/image'

function sidebar() {
  return (
    <div className='h-[700px] w-52 bg-white pl-7 shadow-lg'>
        <div className='pt-2'>
            <div className='mt-5 flex'>
                <Image src={Home} alt='inventory' width={33} height={33}/>
                <h1 className='ml-3 text-lg font-semibold text-sky-800'>Home</h1>
            </div>
            <div className='mt-5 flex'>
                <Image src={Inventory} alt='inventory' width={33} height={33}/>
                <h1 className='ml-3 text-lg font-semibold text-sky-800'>Inventory</h1>
            </div>
            <div className='mt-5 flex'>
                <Image src={Inventory} alt='inventory' width={33} height={33}/>
                <h1 className='ml-3 text-lg font-semibold text-sky-800'>All Account</h1>
            </div>
            <div className='mt-5 flex'>
                <Image src={Transaction} alt='inventory' width={33} height={33}/>
                <h1 className='ml-3 text-lg font-semibold text-sky-800'>Transaction</h1>
            </div>
        </div>
    </div>
  )
}

export default sidebar
