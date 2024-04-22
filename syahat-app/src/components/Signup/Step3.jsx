function Step3() {
    return (
        <div className="grid grid-cols-3 gap-4 mt-10">
            <div className="flex justify-start gap-2 flex-col shadow-lg drop-shadow-xl p-4 pt-8 rounded-lg">
                <h6 className="text-blue-400 font-semibold text-md">Welcome to SIYAHET</h6>
                {/* profile */}
                <div className="mt-10 flex items-center flex-col text-gray-400">
                    <div className="border-2 rounded-full flex items-center justify-center w-24 h-24 bg-gray-400">profile</div>
                    <p className="mt-2 text-sm text-nowrap ">Tour Agency Detail</p>
                </div>
                <p className=" px-14">Create your Tour Agency in Simple Steps</p>
                <div>
                    <img src="/public/ezgif 2.png" alt="" />
                </div>
            </div>
            <div className="bg-white p-8 col-span-2 shadow-lg rounded-lg">
                {/* stepper */}
                <div className="flex items-center justify-center w-full">
                    <div className="relative flex items-center flex-col text-green-500">
                        <div className="border-2 border-green-500 rounded-full flex items-center justify-center w-14 h-14 hover:bg-gray-400">1</div>
                        <p className="m-0 text-sm text-nowrap absolute top-14">Personal Information</p>
                    </div>
                    <div className="border-b-2 w-24 bg-gray-400 border-dotted"></div>
                    <div className="relative flex items-center flex-col text-green-500">
                        <div className="border-2 border-green-500 rounded-full flex items-center justify-center w-14 h-14 hover:bg-gray-400">1</div>
                        <p className="m-0 text-sm text-nowrap absolute top-14">Agency Detail</p>
                    </div>
                    <div className="border-b-2 w-24 bg-gray-400 border-dotted"></div>
                    <div className="relative flex items-center flex-col text-green-500">
                        <div className="border-2 border-green-500 rounded-full flex items-center justify-center w-14 h-14 hover:bg-gray-400">1</div>
                        <p className="m-0 text-sm text-nowrap absolute top-14">Verification</p>
                    </div>
                    <div className="border-b-2 w-24 bg-gray-400 border-dotted"></div>
                    <div className="relative flex items-center flex-col text-green-500">
                        <div className="border-2 border-green-500 rounded-full flex items-center justify-center w-14 h-14 hover:bg-gray-400">1</div>
                        <p className="m-0 text-sm text-nowrap absolute top-14">Packages</p>
                    </div>
                    <div className="border-b-2 w-24 bg-gray-400 border-dotted"></div>
                    <div className="relative flex items-center flex-col text-green-500">
                        <div className="border-2 border-green-500 rounded-full flex items-center justify-center w-14 h-14 hover:bg-gray-400">1</div>
                        <p className="m-0 text-sm text-nowrap absolute top-14">Payment</p>
                    </div>
                </div>
                {/* profile */}
                <div className="mt-16 flex items-center flex-col text-gray-400">
                    <div className="border-2 rounded-full flex items-center justify-center w-24 h-24 bg-gray-400">profile</div>
                    <p className="mt-2 text-sm text-nowrap ">Tour Agency Detail</p>
                </div>
                {/* form */}
                <form className="grid grid-cols-2 space-x-10 justfy-between">
                    <div className='text-left pt-10 pl-12 text-gray-500'>
                        <div>
                            <label className="block text-sm font-medium">Agency Name*</label>
                            <input type="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Your name here" required />
                        </div>
                    </div>
                    <div className='text-left pt-10 pr-12 text-gray-500'>
                        <div>
                            <label className="block text-sm font-medium">Agency Location*</label>
                            <input type="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Your address will be automatically filled" required />
                        </div>
                    </div>
                </form>
                <div className="col-span-2 mt-8 flex justify-center">
                    <img src="/public/image 25.png" alt="" />
                </div>

                <div className="grid grid-cols-1 px-12 mt-4 text-start">
                    <p className="text-[11px] text-red-600">For Local Operators Select Your Residential Address</p>
                    <p className="text-[11px] text-red-600">For Professional Operators Select Your Company's Address</p>
                </div>
                <div className="text-end">
                    <button type="submit" className="bg-green-400 text-white rounded-2xl text-center px-10 py-1">Next →</button>
                </div>
            </div>



        </div>
    )
}

export default Step3;
