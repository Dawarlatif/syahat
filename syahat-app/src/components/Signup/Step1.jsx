import image from "../../assets/Mask group.png"


const Step1=()=> {
    return (
        <div className="grid grid-cols-3 gap-4 py-4 px-20 ">
            <div className="flex gap-2 flex-col shadow-lg drop-shadow-xl px-4 py-8 rounded-lg backdrop-opacity-10 text-center bg-white/80 ">
                <h1 className="text-blue-600 font-semibold text-md text-xl ">Welcome to SIYAHET</h1>
                <p className="font-semibold text-lg text-white py-2">Create your Tour Agency in Simple Steps</p>
                <div className=" h-1/2 w-full p-3">
                    <img src={image} alt="" />
                </div>
            </div>
            <div className="bg-white p-8 col-span-2 shadow-lg rounded-lg">
                {/* stepper */}
                <div className="flex items-center justify-center h-10 flex-wrap w-full">
                    <div className="relative flex items-center flex-col text-green-500">
                        <div className="border-2 border-green-500 rounded-full flex items-center justify-center w-8 h-8 hover:bg-gray-400">1</div>
                        <p className="m-0 text-xs text-nowrap absolute top-8">Personal Information</p>
                    </div>
                    <div className="border-b-2 w-24 bg-gray-400 border-dotted"></div>
                    <div className="relative flex items-center flex-col text-green-500">
                        <div className="border-2 border-green-500 rounded-full flex items-center justify-center w-8 h-8 hover:bg-gray-400">1</div>
                        <p className="m-0 text-sm text-nowrap absolute top-8">Agency Detail</p>
                    </div>
                    <div className="border-b-2 w-24 bg-gray-400 border-dotted"></div>
                    <div className="relative flex items-center flex-col text-green-500">
                        <div className="border-2 border-green-500 rounded-full flex items-center justify-center w-8 h-8 hover:bg-gray-400">1</div>
                        <p className="m-0 text-sm text-nowrap absolute top-8">Verification</p>
                    </div>
                    <div className="border-b-2 w-24 bg-gray-400 border-dotted"></div>
                    <div className="relative flex items-center flex-col text-green-500">
                        <div className="border-2 border-green-500 rounded-full flex items-center justify-center w-8 h-8 hover:bg-gray-400">1</div>
                        <p className="m-0 text-sm text-nowrap absolute top-8">Packages</p>
                    </div>
                    <div className="border-b-2 w-24 bg-gray-400 border-dotted"></div>
                    <div className="relative flex items-center flex-col text-green-500">
                        <div className="border-2 border-green-500 rounded-full flex items-center justify-center w-8 h-8 hover:bg-gray-400">1</div>
                        <p className="m-0 text-sm text-nowrap absolute top-8">Payment</p>
                    </div>
                </div>
                {/* profile */}
                <div className="mt-8 flex items-center flex-col text-gray-500">
                    <div className="border-2 rounded-full flex items-center justify-center w-20 h-20 bg-gray-400">profile</div>
                    <p className="mt-2 text-sm text-nowrap ">Upload Profile Photo</p>
                </div>
                {/* form */}
                <div className="grid grid-cols-2 gap-10 justfy-between">
                    <div className='grid gap-2 text-left pt-4 pl-12 text-gray-500'>
                        <div>
                            <label className="block text-xs pb-1 font-medium">Name*</label>
                            <input type="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 " placeholder="name" required />
                        </div>
                        <div>
                            <label className="block text-xs pb-1 font-medium">Date of Birth*</label>
                            <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 " placeholder="date of birth" required />
                        </div>
                        <div>
                            <label className="block text-xs pb-1 font-medium">Password*</label>
                            <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 " placeholder="password" required />
                        </div>
                        <div>
                            <label className="block text-xs pb-1 font-medium">Gender*</label>
                            <div className="flex items-center bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 justify-between w-full px-3 py-2 ">
                                <div className="flex items-center">
                                    <input disabled  type="radio" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="disabled-radio-1" className="ms-2 text-xs text-gray-400 dark:text-gray-500">Male</label>
                                </div>
                                <div className="flex items-center">
                                    <input disabled checked  type="radio" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="disabled-radio-2" className="ms-2 text-xs text-gray-400 dark:text-gray-500">Female</label>
                                </div>
                                <div className="flex items-center">
                                    <input disabled checked  type="radio" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="disabled-radio-2" className="ms-2 text-xs text-gray-400 dark:text-gray-500">Others</label>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='grid  text-left pt-4 pr-12 text-gray-500'>
                        <div>
                            <label className="block text-xs pb-1 font-medium">Email*</label>
                            <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 " placeholder="Email/Mobile Number" required />
                        </div>
                        <div>
                            <label className="block text-xs pb-1 font-medium">Mobile number*</label>
                            <div className="flex gap-2 items-center">
                                <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 w-10" placeholder="+92" required />
                                <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 " placeholder="Mobile Number" required />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs pb-1 font-medium">Confirm Password*</label>
                            <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 " placeholder="re-enter password here" required />
                        </div>
                        <div className="flex justify-end ">
                            <div className="bg-green-400 text-white text-md h-9 rounded-full font-medium text-center py-1 cursor-pointer active:scale-90 px-10">Next →</div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 px-12 mt-2 text-start">
                    <p className="text-[0.6rem] text-gray-400">Select other for another gender or if you do not like to mention your gender</p>
                </div>
            </div>



        </div>
    )
}

export default Step1;
