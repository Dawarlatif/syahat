import { Link } from "react-router-dom";

function Step5() {
    return (
        <div className="grid grid-cols-3 gap-4 mt-10">
            <div className="flex justify-start gap-2 flex-col shadow-lg drop-shadow-xl p-4 pt-8 rounded-lg">
                {/* profile */}
                <div className=" flex items-center flex-col text-gray-400">
                    <div className="border-2 rounded-full flex items-center justify-center w-24 h-24 bg-gray-400">profile</div>
                    <p className="mt-2 text-sm text-nowrap ">Tour Agency Detail</p>
                </div>
                <div className="bg-red-600 mt-3 border border-gray-300 text-white text-sm text-center rounded-lg block w-50 p-2.5 ">
                    Verification Required Before Signing up
                </div>
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
                {/* form */}
                <div className=" text-gray-400 flex flex-col items-start mt-14 w-1/2">
                    <div className="text-green-400 font-semibold text-2xl">
                        <h1>Verification</h1>
                    </div>
                    <div className="flex flex-col items-start">
                        <p className="text-sm font-semibold mt-3">Email Adress</p>
                        <p className="text-[11px] mt-2">We will send you a verification code at example@gmail.com</p>
                        <div className="flex space-x-4 mt-2">
                            <input
                                type="text"
                                maxLength="1"
                                className="w-12 h-12 border border-gray-300 text-center text-lg focus:ring-blue-500 focus:border-blue-500 rounded"
                                placeholder="0"
                            />
                            <input
                                type="text"
                                maxLength="1"
                                className="w-12 h-12 border border-gray-300 text-center text-lg focus:ring-blue-500 focus:border-blue-500 rounded"
                                placeholder="0"
                            />
                            <input
                                type="text"
                                maxLength="1"
                                className="w-12 h-12 border border-gray-300 text-center text-lg focus:ring-blue-500 focus:border-blue-500 rounded"
                                placeholder="0"
                            />
                            <input
                                type="text"
                                maxLength="1"
                                className="w-12 h-12 border border-gray-300 text-center text-lg focus:ring-blue-500 focus:border-blue-500 rounded"
                                placeholder="0"
                            />
                            <input
                                type="text"
                                maxLength="1"
                                className="w-12 h-12 border border-gray-300 text-center text-lg focus:ring-blue-500 focus:border-blue-500 rounded"
                                placeholder="0"
                            />
                            <input
                                type="text"
                                maxLength="1"
                                className="w-12 h-12 border border-gray-300 text-center text-lg focus:ring-blue-500 focus:border-blue-500 rounded"
                                placeholder="0"
                            />
                        </div>
                        <div className="flex justify-end w-full">
                            <button type="submit" className="bg-green-400 mt-3 text-white rounded-2xl text-center px-8 py-0.5">Send OTP</button>
                        </div>
                    </div>
                    <div className="border-b-2 w-full bg-gray-400 mt-3 mb-5"></div>
                    <div className="flex flex-col items-start">
                        <p className="text-sm font-semibold mt-3">Mobile Phone</p>
                        <p className="text-[11px] mt-2">We will send you a verification code at +92 333 5556789</p>
                        <div className="flex space-x-4 mt-2">
                            <input
                                type="text"
                                maxLength="1"
                                className="w-12 h-12 border border-gray-300 text-center text-lg focus:ring-blue-500 focus:border-blue-500 rounded"
                                placeholder="0"
                            />
                            <input
                                type="text"
                                maxLength="1"
                                className="w-12 h-12 border border-gray-300 text-center text-lg focus:ring-blue-500 focus:border-blue-500 rounded"
                                placeholder="0"
                            />
                            <input
                                type="text"
                                maxLength="1"
                                className="w-12 h-12 border border-gray-300 text-center text-lg focus:ring-blue-500 focus:border-blue-500 rounded"
                                placeholder="0"
                            />
                            <input
                                type="text"
                                maxLength="1"
                                className="w-12 h-12 border border-gray-300 text-center text-lg focus:ring-blue-500 focus:border-blue-500 rounded"
                                placeholder="0"
                            />
                            <input
                                type="text"
                                maxLength="1"
                                className="w-12 h-12 border border-gray-300 text-center text-lg focus:ring-blue-500 focus:border-blue-500 rounded"
                                placeholder="0"
                            />
                            <input
                                type="text"
                                maxLength="1"
                                className="w-12 h-12 border border-gray-300 text-center text-lg focus:ring-blue-500 focus:border-blue-500 rounded"
                                placeholder="0"
                            />
                        </div>
                        <div className="flex justify-end w-full">
                            <button type="submit" className="bg-green-400 mt-3 text-white rounded-2xl text-center px-8 py-0.5">Send OTP</button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 mt-4 text-start">
                    <p className="text-[11px] text-gray-400">Not Your Email Address or Mobile Number?
                        <Link className="text-green-500" to="/"> Click Here</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Step5;
