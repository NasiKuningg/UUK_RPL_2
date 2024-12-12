import React from 'react'
import Link from 'next/link'
import Edit from '@/assets/edit.png'
import Delete from '@/assets/Delete.png'
import Image from 'next/image'

function Acces() {
  return (
    <div>
      <div>
        <div>
          <div className='p-6 pl-12'>
            <h1 className='text-2xl font-semibold text-sky-950'>All User</h1>
          </div>
          <div className='flex justify-center gap-[700px]'>
            <div className='flex'>
              <h1 className='ml-10 text-xl font-semibold text-sky-900'>All</h1>
              <div>
                <h1 className='ml-10 text-xl font-bold text-sky-900'>WareHouse</h1>
                <div className='ml-16 mt-2 w-12 h-[2px] bg-sky-900'/>
              </div>
            </div>
            <div className='w-auto h-auto str stroke-black stroke-inherit ml-[90px] pr-4'>
              <h1 className='text-xl font-semibold text-sky-600'>Add</h1>
            </div>
          </div>
        </div>
        <div className='pl-8 flex justify-center pt-8'>
          <div className='w-[980px] shadow-lg'>
            <div className='flex justify-center gap-24 bg-sky-100 py-2'>
              <h1 className='font-semibold text-sky-900'>Product Name</h1>
              <h1 className='font-semibold text-sky-900'>Series No.</h1>
              <h1 className='font-semibold text-sky-900'>Items</h1>
              <h1 className='font-semibold text-sky-900'>Purchase Date</h1>
              <h1 className='font-semibold text-sky-900'>Unit Price</h1>
            </div>
            <div>
              <div className='pl-20 flex bg-white py-2'>
                <div className='flex mr-8 -ml-8'>
                  <Image src={Edit} alt='edit' height={30} width={30}/>
                  <Image src={Delete} alt='edit' height={30} width={30}/>
                </div>
                <div className='flex gap-28 -ml-10'>
                  <h1 className='font-semibold ml-5'>Table</h1>
                  <h1 className='font-semibold ml-6'>TJ0001</h1>
                  <h1 className='font-semibold ml-3'></h1>
                  <h1 className='font-semibold pl-24 -ml-24'></h1>
                  <h1 className='font-semibold pl-24 -ml-28'></h1>
                </div>
              </div>
              <div className='w-[980px] h-[1px] bg-slate-400'></div>
            </div>
            <div>
              <div className='pl-20 flex bg-white py-2'>
                <div className='flex mr-8 -ml-8'>
                  <Image src={Edit} alt='edit' height={30} width={30}/>
                  <Image src={Delete} alt='edit' height={30} width={30}/>
                </div>
                <div className='flex gap-28 -ml-10'>
                  <h1 className='font-semibold ml-5'>Table</h1>
                  <h1 className='font-semibold ml-6'>TJ0001</h1>
                  <h1 className='font-semibold ml-3'></h1>
                  <h1 className='font-semibold pl-24 -ml-24'></h1>
                  <h1 className='font-semibold pl-24 -ml-28'></h1>
                </div>
              </div>
              <div className='w-[980px] h-[1px] bg-slate-400'></div>
            </div>
            <div>
              <div className='pl-20 flex bg-white py-2'>
                <div className='flex mr-8 -ml-8'>
                  <Image src={Edit} alt='edit' height={30} width={30}/>
                  <Image src={Delete} alt='edit' height={30} width={30}/>
                </div>
                <div className='flex gap-28 -ml-10'>
                  <h1 className='font-semibold ml-5'>Table</h1>
                  <h1 className='font-semibold ml-6'>TJ0001</h1>
                  <h1 className='font-semibold ml-3'></h1>
                  <h1 className='font-semibold pl-24 -ml-24'></h1>
                  <h1 className='font-semibold pl-24 -ml-28'></h1>
                </div>
              </div>
              <div className='w-[980px] h-[1px] bg-slate-400'></div>
            </div>
            <div>
              <div className='pl-20 flex bg-white py-2'>
                <div className='flex mr-8 -ml-8'>
                  <Image src={Edit} alt='edit' height={30} width={30}/>
                  <Image src={Delete} alt='edit' height={30} width={30}/>
                </div>
                <div className='flex gap-28 -ml-10'>
                  <h1 className='font-semibold ml-5'>Table</h1>
                  <h1 className='font-semibold ml-6'>TJ0001</h1>
                  <h1 className='font-semibold ml-3'></h1>
                  <h1 className='font-semibold pl-24 -ml-24'></h1>
                  <h1 className='font-semibold pl-24 -ml-28'></h1>
                </div>
              </div>
              <div className='w-[980px] h-[1px] bg-slate-400'></div>
            </div>
            <div>
              <div className='pl-20 flex bg-white py-2'>
                <div className='flex mr-8 -ml-8'>
                  <Image src={Edit} alt='edit' height={30} width={30}/>
                  <Image src={Delete} alt='edit' height={30} width={30}/>
                </div>
                <div className='flex gap-28 -ml-10'>
                  <h1 className='font-semibold ml-5'>Table</h1>
                  <h1 className='font-semibold ml-6'>TJ0001</h1>
                  <h1 className='font-semibold ml-3'></h1>
                  <h1 className='font-semibold pl-24 -ml-24'></h1>
                  <h1 className='font-semibold pl-24 -ml-28'></h1>
                </div>
              </div>
              <div className='w-[980px] h-[1px] bg-slate-400'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Acces
