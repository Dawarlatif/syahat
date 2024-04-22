function Step6() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex items-center justify-center shadow-lg shadow-color-gray-500 shadow-opacity-50 bg-whites px-10 rounded-lg gap-10">
                {/* profile */}
                <div className=" flex items-center justify-center flex-col text-gray-400 w-1/3">
                    <div className="border-2 rounded-full flex items-center justify-center w-24 h-24 bg-gray-400">profile</div>
                    <p className="mt-2 text-green-500 text-sm text-nowrap ">Tour Agency Detail</p>
                    <div className="text-green-500 mt-1 text-md text-center rounded-lg block w-50 p-2.5 font-bold">
                        Welcome “Discover Pakistan”
                    </div>
                    <div className="flex justify-center">
                        <p className="text-[12px]">Your Account is created successfully!
                            You will need to verify your Account in order to publish and start the tour.</p>
                    </div>
                    <div className="mt-3">
                        <button type="submit" className="bg-green-400 text-white rounded-2xl text-center px-10 py-1">Lets Go →</button>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div className="row-span-2 flexitems-center justify-end w-64">
                        <img src="/public/1.png" alt="" />
                    </div>
                    <div className="w-24">
                        <img src="/public/1.png" alt="" />
                    </div>
                    <div className="w-36">
                        <img src="/public/1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Step6
