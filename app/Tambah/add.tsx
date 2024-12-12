import React from 'react'

function add() {
  return (
    <>
      <div>
        <div>
            <div className='mt-8 ml-28 bg-white rounded-2xl shadow-lg'>
                <div className='flex justify-center grid grid-cols-1'>
                    <h1 className='text-4xl font-semibold text-center pt-10 mb-4'>Add Account</h1>
                    <div className='w-[780px] h-[1px] bg-slate-300'></div>
                </div>
                <div className='flex justify-center gap-60'>
                    <div>
                        <h1 className='text-2xl font-semibold text-sky-900 pt-4'>Account</h1>
                    </div>
                    <div>
                        <div className='bg-dark w-80 h-9 rounded-xl mt-4'>
                            <h1 className='pt-1 pl-3 text-lg font-medium text-text'>First Name</h1>
                        </div>
                        <div className='bg-dark w-80 h-9 rounded-xl mt-4'>
                            <h1 className='pt-1 pl-3 text-lg font-medium text-text'>Last Name</h1>
                        </div>
                        <div className='bg-dark w-80 h-9 rounded-xl mt-4'>
                            <h1 className='pt-1 pl-3 text-lg font-medium text-text'>Email ID</h1>
                        </div>
                        <div className='bg-dark w-80 h-9 rounded-xl mt-4'>
                            <h1 className='pt-1 pl-3 text-lg font-medium text-text'>Password</h1>
                        </div>
                        <div className='bg-dark w-80 h-9 rounded-xl mt-4'>
                            <h1 className='pt-1 pl-3 text-lg font-medium text-text'>Confirm Password</h1>
                        </div>
                        <div className='bg-dark w-80 h-9 rounded-xl mt-4'>
                            <h1 className='pt-1 pl-3 text-lg font-medium text-text'>Gender</h1>
                        </div>
                        <div className='bg-dark w-80 h-9 rounded-xl mt-4'>
                            <h1 className='pt-1 pl-3 text-lg font-medium text-text'>Age</h1>
                        </div>
                        <div>
                            <div>
                                <h1 className='pt-3 pl-2 font-medium text-neutral-500'>Type</h1>
                            </div>
                            <div className='flex'>
                                <div className='mt-1 w-4 h-4 bg-sky-500 rounded-full'/>
                                <h1 className='ml-2 font-medium text-neutral-500'>Admin</h1>
                                <div className='mt-1 ml-8 w-4 h-4 bg-gray-700 rounded-full'/>
                                <h1 className='ml-2 font-medium text-neutral-500'>Employee</h1>
                            </div>
                            <div className='w-80 h-11 rounded-full bg-primary -ml-44 mt-6 mb-10'>
                                <h1 className='text-center text-2xl text-white pt-2 font-semibold'>Register</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default add
