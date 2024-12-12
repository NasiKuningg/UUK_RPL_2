import React from 'react'
import Foto from '@/assets/logo.png'
import Foto2 from '@/assets/logo2.png'
import Image from 'next/image'

function Hero() {
  return (
    <>
      <div className='containe px-24'>
        <div className='flex flex-wrap bg-white rounded-xl shadow-xl py-8'>
            <div className='w-full self-center pl-32 lg:w-1/2'>
                <Image src={Foto2} alt='asd' width={200} height={200}/>
            </div>
            <div className='items-center'>
                <h1 className='text-5xl font-semibold gap-x-8 pl-32'>Login</h1>
                <div>
                    <div>
                        <div className='bg-dark w-96 h-12 rounded-xl mt-9'>
                            <h1 className='pt-2 pl-3 text-lg font-semibold text-text'>Username</h1>
                        </div>
                        <div className='bg-dark w-96 h-12 rounded-xl mt-4'>
                            <h1 className='pt-2 pl-3 text-lg font-semibold text-text'>Password</h1>
                        </div>
                        <div className='bg-primary w-80 h-12 rounded-full mt-10 ml-8 text-center'>
                            <h1 className='pt-2 text-xl font-semibold text-white'>Login</h1>
                        </div>
                    </div>
                    <div className='flex gap-2 ml-24 mt-6'>
                        <h1 className='text-lg font-medium text-text'>New User?</h1>
                        <h1 className='text-lg font-medium'>Register</h1>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Hero
