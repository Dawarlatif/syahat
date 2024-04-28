import React from 'react'
import lock from './../../assets/forgot-password-concept-illustration_114360-1123 1.png'

const PasswordReset = () => {
  return (
        <div className=' rounded-xl md:w-3/4 w-5/6 flex-col flex md:flex-row  bg-white px-4 py-6 md:p-4 divide-y-2 md:divide-x-2 '>
        <div className='w-full md:w-1/2  flex flex-wrap flex-col mx-auto md:mx-4 justify-center '>
        <div className=' w-full border items-center text-center mx-auto rounded-xl px-1 md:px-2 2xl:px-4 text-gray-500 font-normal text-sm py-4'>
            <h1 className='text-center text-[#558F69] text-xl md:text-2xl py-6 font-semibold'>Reset Password</h1>
    <p className='text-xs md:text-sm text-gray-900 font-semibold'>Forgot Password</p>
    <p className='text-xs mb-4'>Enter the email address or mobile number to reset the password</p>
    <div className='w-full mx-auto flex flex-wrap  py-4 px-5 gap-1 md:gap-2'>
    
        <label for="password" className="block text-left text-xs text-gray-500 ">Email or Mobile Number<span className='text-red-700'>*</span></label>
        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 outline-none block w-full p-2.5 "  required />
    
    </div>

    <button
                        className=" w-11/12  shadow-xl active:scale-90 bg-green-500 text-white text-lg md:text-xl text-center font-medium py-1 my-3 2xl:py-3 rounded-full"
                    
                    >
            Next
                    </button>
                   
        </div>
        </div>
      
    
        <div className='w-full md:w-1/2 flex items-center flex-col mx-auto border-t-white p-8 flex-wrap justify-around'>
            <img   src={lock} width='500px' height='100%' alt='travel'/>
        </div>
    </div>
      
  )
}

export default PasswordReset