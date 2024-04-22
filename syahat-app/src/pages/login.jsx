import React from 'react'
import { Link } from 'react-router-dom'
import fb from './../assets/facebook.1024x1024.png'
import google from './../assets/google.1024x1024.png'
import tour from './../assets/unsplash_Yui5vfKHuzs.png'
const Login = () => {
  return (
    <div className='w-full h-auto md:h-screen bg-blue-500 flex flex-wrap py-8 justify-center items-center'>
        <div className='h-full rounded-xl md:w-3/4 w-4/5 flex-col flex md:flex-row  bg-white px-4 py-6 md:p-4 divide-y-2 md:divide-x-2 '>
            <div className='w-full md:w-1/2 h-full flex flex-wrap flex-col mx-auto md:mx-4 justify-center '>
            <div className=' w-full h-full  border items-center text-center mx-auto rounded-xl px-1 md:px-2 2xl:px-4'>
                <h1 className='text-center text-[#558F69] text-xl md:text-2xl py-4 font-semibold'>Log in as Tour operator</h1>
 <div className='grid gap-3 text-left py-6 md:py-2 px-4 md:px-12 text-gray-500  '>   
    <div  >
        <label className="block mb-1 text-sm font-medium">Enter Email or Mobile number*</label>
        <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full xl:p-2 p-2 lg:p-1 " placeholder="Email/Mobile Number" required />
    </div> 
    <div >
        <label className="block mb-1 text-sm font-medium text-gray-500">Password</label>
        <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full xl:p-2 p-2 lg:p-1 " placeholder="Your password here" required />
    </div>
                       <div className="flex items-start flex-wrap justify-between">
							<div className="flex items-start">
								<div className="flex items-center h-5">
									<input
										id="remember"
										type="checkbox"
										value="true"
										className="w-3 md:w-4 h-4 rounded bg-gray-50 accent-[#558F69]"
										checked={true}
									
									/>
								</div>
								<label
									htmlFor="remember"
									className="ml-2 md:text-sm text-xs font-medium text-gray-600 "
								>
								Keep me logged in
								</label>
							</div>
							<Link
								href="/"
								className="px-2 w-full text-right mt-2 md:text-sm text-xs text-gray-600 underline "
							>
								Forgot Password?
							</Link>
                          
						</div>
                        <button
							className=" w-full  shadow-xl active:scale-90 bg-green-500 text-white text-xl text-center font-semibold py-1  2xl:py-3 rounded-full"
						
						>
					Log in
						</button>
     <div className='flex text-gray-500 items-center justify-center w-full flex-wrap'>
         <div className='border w-5/12 border-gray-200 '></div>
                <span className='px-1'>OR</span>
                    <div className='w-5/12 border border-gray-200' ></div>
   </div>
   <h2 className='text-center font-medium text-sm 2xl:text-lg'>Login via social media</h2>
   <div className='flex flex-wrap justify-center gap-4'>
    <div className='border p-1 rounded-lg shadow-xl active:scale-90 cursor-pointer'>
        <img src={fb} className='w-[30px] h-[30px] 2xl:w-[40px] 2xl:h-[40px]'  alt='fb-logo'/>
</div>
<div className='border px-2 2xl:p-1 items-center flex rounded-lg  shadow-xl active:scale-90 cursor-pointer'>
<img src={google} className='w-[20px] h-[20px] 2xl:w-[30px] 2xl:h-[30px]' alt='ggl-logo'/>
</div>
   </div>
   <div className='w-full border '></div>
   <h2 className='text-center font-medium text-sm 2xl:text-lg'>Don't have an account?</h2>
   <button	className=" shadow-2xl active:scale-90 w-full text-[#558F69] border border-[#558F69] text-md 2xl:text-xl text-center font-semibold py-1  2xl:py-3 rounded-full">
				Sign Up
	</button>
 </div>

				
            </div>
            </div>
          

            <div className='w-full md:w-1/2 flex items-center flex-col mx-auto border-t-white p-8 flex-wrap justify-around'>
                <h1 className='text-center text-[#558F69] text-2xl md:text-4xl py-4 font-semibold'>Welcome to SIAHAT</h1>
                <img   src={tour} width='600px' height='100%' alt='travel'/>
            </div>
        </div>
    </div>
  )
}

export default Login