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
          <div className='w-auto h-auto str stroke-black stroke-inherit ml-[960px] pr-4'>
            <h1 className='text-xl font-semibold text-sky-600'>Add</h1>
          </div>
        </div>
        <div className='pl-8 flex justify-center pt-8'>
          <div className='w-[980px] shadow-lg'>
            <div className='flex justify-center gap-24 bg-sky-100 py-2'>
              <h1 className='font-semibold text-sky-900'>Name</h1>
              <h1 className='font-semibold text-sky-900'>Acces Status</h1>
              <h1 className='font-semibold text-sky-900'>Email</h1>
              <h1 className='font-semibold text-sky-900 ml-44'>Age</h1>
            </div>
            <div>
              <div className='pl-20 flex bg-white py-2'>
                <div className='flex mr-8 -ml-4'>
                  <Image src={Edit} alt='edit' height={30} width={30}/>
                  <Image src={Delete} alt='edit' height={30} width={30}/>
                </div>
                <div className='flex gap-24'>
                  <h1 className='font-semibold'>Pat Black</h1>
                  <h1 className='font-semibold'>Admin</h1>
                  <h1 className='font-semibold'>example@gmail.com</h1>
                  <h1 className='font-semibold pl-24'>28</h1>
                </div>
              </div>
              <div className='w-[980px] h-[1px] bg-slate-400'></div>
            </div>
            <div>
              <div className='pl-20 flex bg-white py-2'>
                <div className='flex mr-8 -ml-4'>
                  <Image src={Edit} alt='edit' height={30} width={30}/>
                  <Image src={Delete} alt='edit' height={30} width={30}/>
                </div>
                <div className='flex gap-24'>
                  <h1 className='font-semibold'>Pat Black</h1>
                  <h1 className='font-semibold'>Admin</h1>
                  <h1 className='font-semibold'>example@gmail.com</h1>
                  <h1 className='font-semibold pl-24'>28</h1>
                </div>
              </div>
              <div className='w-[980px] h-[1px] bg-slate-400'></div>
            </div>
            <div>
              <div className='pl-20 flex bg-white py-2'>
                <div className='flex mr-8 -ml-4'>
                  <Image src={Edit} alt='edit' height={30} width={30}/>
                  <Image src={Delete} alt='edit' height={30} width={30}/>
                </div>
                <div className='flex gap-24'>
                  <h1 className='font-semibold'>Pat Black</h1>
                  <h1 className='font-semibold'>Admin</h1>
                  <h1 className='font-semibold'>example@gmail.com</h1>
                  <h1 className='font-semibold pl-24'>28</h1>
                </div>
              </div>
              <div className='w-[980px] h-[1px] bg-slate-400'></div>
            </div>
            <div>
              <div className='pl-20 flex bg-white py-2'>
                <div className='flex mr-8 -ml-4'>
                  <Image src={Edit} alt='edit' height={30} width={30}/>
                  <Image src={Delete} alt='edit' height={30} width={30}/>
                </div>
                <div className='flex gap-24'>
                  <h1 className='font-semibold'>Pat Black</h1>
                  <h1 className='font-semibold'>Admin</h1>
                  <h1 className='font-semibold'>example@gmail.com</h1>
                  <h1 className='font-semibold pl-24'>28</h1>
                </div>
              </div>
              <div className='w-[980px] h-[1px] bg-slate-400'></div>
            </div>
            <div>
              <div className='pl-20 flex bg-white py-2'>
                <div className='flex mr-8 -ml-4'>
                  <Image src={Edit} alt='edit' height={30} width={30}/>
                  <Image src={Delete} alt='edit' height={30} width={30}/>
                </div>
                <div className='flex gap-24'>
                  <h1 className='font-semibold'>Pat Black</h1>
                  <h1 className='font-semibold'>Admin</h1>
                  <h1 className='font-semibold'>example@gmail.com</h1>
                  <h1 className='font-semibold pl-24'>28</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Acces
