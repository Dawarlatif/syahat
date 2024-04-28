import React from 'react'
import lock from './../../assets/lock.png'
const Verification = () => {
  return (
    <div className=' rounded-xl md:w-3/4 w-5/6 flex-col flex md:flex-row  bg-white px-4 py-6 md:p-4 divide-y-2 md:divide-x-2 '>
    <div className='w-full md:w-1/2  flex flex-wrap flex-col mx-auto md:mx-4 justify-center '>
    <div className=' w-full border items-center text-center mx-auto rounded-xl px-1 md:px-2 2xl:px-4 text-gray-500 font-normal text sm'>
        <h1 className='text-center text-[#558F69] text-xl md:text-2xl py-4 font-semibold'>Security Verification</h1>
<p className='text-xs md:text-sm'>To secure your account, please complete the following verification</p>
<p className='text-xs'>Enter Google verification code</p>
<div className='w-full mx-auto flex flex-wrap items-center justify-center py-4 px-4 gap-1 md:gap-2'>
    <div className='w-[15%] mx-auto flex border border-gray-200 h-16 py-2 px-1'>
    <input type='text' className='w-1/2 mx-auto border-gray-200 border-b-2 outline-none text-xl text-gray-700 focus:border-green-700'/>
    </div>
    <div className='w-[15%] mx-auto flex border border-gray-200 h-16 py-2 px-1'>
    <input type='text' className='w-1/2 mx-auto border-gray-200 border-b-2 outline-none text-xl text-gray-700 focus:border-green-700'/>
    </div> <div className='w-[15%] mx-auto flex border border-gray-200 h-16 py-2 px-1'>
    <input type='text' className='w-1/2 mx-auto border-gray-200 border-b-2 outline-none text-xl text-gray-700 focus:border-green-700'/>
    </div> <div className='w-[15%] mx-auto flex border border-gray-200 h-16 py-2 px-1'>
    <input type='text' className='w-1/2 mx-auto border-gray-200 border-b-2 outline-none text-xl text-gray-700 focus:border-green-700'/>
    </div> <div className='w-[15%] mx-auto flex border border-gray-200 h-16 py-2 px-1'>
    <input type='text' className='w-1/2 mx-auto border-gray-200 border-b-2 outline-none text-xl text-gray-700 focus:border-green-700'/>
    </div> <div className='w-[15%] mx-auto flex border border-gray-200 h-16 py-2 px-1'>
    <input type='text' className='w-1/2 mx-auto border-gray-200 border-b-2 outline-none text-xl text-gray-700 focus:border-green-700'/>
    </div>
</div>
<p className='text-gray-600 text-sm '>Please enter 6-digit verification code</p>
<p className='text-green-700 underline text-xs py-1 cursor-pointer'>Switch verification type to SMS</p>
<button
                    className=" w-3/4  shadow-xl active:scale-90 bg-green-500 text-white text-xl text-center font-medium py-1 my-3 2xl:py-3 rounded-full"
                
                >
            Submit
                </button>
                <p className='text-sm  text-gray-600 pb-4'>Lost Google Authenticator?<span className='cursor-pointer  text-green-600'>Click Here</span></p>
    </div>
    </div>
  

    <div className='w-full md:w-1/2 flex items-center flex-col mx-auto border-t-white p-8 flex-wrap justify-around'>
        <img   src={lock} width='600px' height='100%' alt='travel'/>
    </div>
</div>
  )
}

export default Verification