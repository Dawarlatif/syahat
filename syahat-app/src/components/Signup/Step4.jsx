function Step4() {
    return (
        <div className="bg-white p-8 px-28 shadow-lg rounded-lg">
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
            <div className="grid mt-10 grid-cols-2 justfy-between">
                <div className='text-left pt-10 pl-12 text-gray-500'>
                    <h1 className="text-md mb-3 font-semibold w-2/3">Selected Package</h1>
                    <div className="bg-green-500 mb-3 border border-gray-300 text-white w-1/2 text-sm text-center rounded-lg block w-50 p-2.5 ">
                        Professional For Companies
                    </div>
                    <h1 className="text-md mb-1 font-semibold w-2/3">Payment Method </h1>
                    <h1 className="text-md w-2/3 mb-3">Selected Package</h1>
                    <div className="flex gap-3 w-1/2 mb-7">
                        <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded h-14 w-14 text-sm text-center flex justify-center items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200">
                            <svg aria-hidden="true" className="w-10 h-3 -ms-1" viewBox="0 0 660 203" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M233.003 199.762L266.362 4.002H319.72L286.336 199.762H233.003V199.762ZM479.113 8.222C468.544 4.256 451.978 0 431.292 0C378.566 0 341.429 26.551 341.111 64.604C340.814 92.733 367.626 108.426 387.865 117.789C408.636 127.387 415.617 133.505 415.517 142.072C415.384 155.195 398.931 161.187 383.593 161.187C362.238 161.187 350.892 158.22 333.368 150.914L326.49 147.803L319.003 191.625C331.466 197.092 354.511 201.824 378.441 202.07C434.531 202.07 470.943 175.822 471.357 135.185C471.556 112.915 457.341 95.97 426.556 81.997C407.906 72.941 396.484 66.898 396.605 57.728C396.605 49.591 406.273 40.89 427.165 40.89C444.611 40.619 457.253 44.424 467.101 48.39L471.882 50.649L479.113 8.222V8.222ZM616.423 3.99899H575.193C562.421 3.99899 552.861 7.485 547.253 20.233L468.008 199.633H524.039C524.039 199.633 533.198 175.512 535.27 170.215C541.393 170.215 595.825 170.299 603.606 170.299C605.202 177.153 610.098 199.633 610.098 199.633H659.61L616.423 3.993V3.99899ZM551.006 130.409C555.42 119.13 572.266 75.685 572.266 75.685C571.952 76.206 576.647 64.351 579.34 57.001L582.946 73.879C582.946 73.879 593.163 120.608 595.299 130.406H551.006V130.409V130.409ZM187.706 3.99899L135.467 137.499L129.902 110.37C120.176 79.096 89.8774 45.213 56.0044 28.25L103.771 199.45L160.226 199.387L244.23 3.99699L187.706 3.996" fill="#0E4595" /><path d="M86.723 3.99219H0.682003L0 8.06519C66.939 24.2692 111.23 63.4282 129.62 110.485L110.911 20.5252C107.682 8.12918 98.314 4.42918 86.725 3.99718" fill="#F2AE14" /></svg>
                        </button>
                        <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded h-14 w-14 text-sm text-center flex justify-center items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200">
                            <svg aria-hidden="true" className="w-10 h-3 -ms-1" viewBox="0 0 660 203" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M233.003 199.762L266.362 4.002H319.72L286.336 199.762H233.003V199.762ZM479.113 8.222C468.544 4.256 451.978 0 431.292 0C378.566 0 341.429 26.551 341.111 64.604C340.814 92.733 367.626 108.426 387.865 117.789C408.636 127.387 415.617 133.505 415.517 142.072C415.384 155.195 398.931 161.187 383.593 161.187C362.238 161.187 350.892 158.22 333.368 150.914L326.49 147.803L319.003 191.625C331.466 197.092 354.511 201.824 378.441 202.07C434.531 202.07 470.943 175.822 471.357 135.185C471.556 112.915 457.341 95.97 426.556 81.997C407.906 72.941 396.484 66.898 396.605 57.728C396.605 49.591 406.273 40.89 427.165 40.89C444.611 40.619 457.253 44.424 467.101 48.39L471.882 50.649L479.113 8.222V8.222ZM616.423 3.99899H575.193C562.421 3.99899 552.861 7.485 547.253 20.233L468.008 199.633H524.039C524.039 199.633 533.198 175.512 535.27 170.215C541.393 170.215 595.825 170.299 603.606 170.299C605.202 177.153 610.098 199.633 610.098 199.633H659.61L616.423 3.993V3.99899ZM551.006 130.409C555.42 119.13 572.266 75.685 572.266 75.685C571.952 76.206 576.647 64.351 579.34 57.001L582.946 73.879C582.946 73.879 593.163 120.608 595.299 130.406H551.006V130.409V130.409ZM187.706 3.99899L135.467 137.499L129.902 110.37C120.176 79.096 89.8774 45.213 56.0044 28.25L103.771 199.45L160.226 199.387L244.23 3.99699L187.706 3.996" fill="#0E4595" /><path d="M86.723 3.99219H0.682003L0 8.06519C66.939 24.2692 111.23 63.4282 129.62 110.485L110.911 20.5252C107.682 8.12918 98.314 4.42918 86.725 3.99718" fill="#F2AE14" /></svg>
                        </button>
                        <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded h-14 w-14 text-sm text-center flex justify-center items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200">
                            <svg aria-hidden="true" className="w-10 h-3 -ms-1" viewBox="0 0 660 203" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M233.003 199.762L266.362 4.002H319.72L286.336 199.762H233.003V199.762ZM479.113 8.222C468.544 4.256 451.978 0 431.292 0C378.566 0 341.429 26.551 341.111 64.604C340.814 92.733 367.626 108.426 387.865 117.789C408.636 127.387 415.617 133.505 415.517 142.072C415.384 155.195 398.931 161.187 383.593 161.187C362.238 161.187 350.892 158.22 333.368 150.914L326.49 147.803L319.003 191.625C331.466 197.092 354.511 201.824 378.441 202.07C434.531 202.07 470.943 175.822 471.357 135.185C471.556 112.915 457.341 95.97 426.556 81.997C407.906 72.941 396.484 66.898 396.605 57.728C396.605 49.591 406.273 40.89 427.165 40.89C444.611 40.619 457.253 44.424 467.101 48.39L471.882 50.649L479.113 8.222V8.222ZM616.423 3.99899H575.193C562.421 3.99899 552.861 7.485 547.253 20.233L468.008 199.633H524.039C524.039 199.633 533.198 175.512 535.27 170.215C541.393 170.215 595.825 170.299 603.606 170.299C605.202 177.153 610.098 199.633 610.098 199.633H659.61L616.423 3.993V3.99899ZM551.006 130.409C555.42 119.13 572.266 75.685 572.266 75.685C571.952 76.206 576.647 64.351 579.34 57.001L582.946 73.879C582.946 73.879 593.163 120.608 595.299 130.406H551.006V130.409V130.409ZM187.706 3.99899L135.467 137.499L129.902 110.37C120.176 79.096 89.8774 45.213 56.0044 28.25L103.771 199.45L160.226 199.387L244.23 3.99699L187.706 3.996" fill="#0E4595" /><path d="M86.723 3.99219H0.682003L0 8.06519C66.939 24.2692 111.23 63.4282 129.62 110.485L110.911 20.5252C107.682 8.12918 98.314 4.42918 86.725 3.99718" fill="#F2AE14" /></svg>
                        </button>
                        <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded h-14 w-14 text-sm text-center flex justify-center items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200">
                            <svg aria-hidden="true" className="w-10 h-3 -ms-1" viewBox="0 0 660 203" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M233.003 199.762L266.362 4.002H319.72L286.336 199.762H233.003V199.762ZM479.113 8.222C468.544 4.256 451.978 0 431.292 0C378.566 0 341.429 26.551 341.111 64.604C340.814 92.733 367.626 108.426 387.865 117.789C408.636 127.387 415.617 133.505 415.517 142.072C415.384 155.195 398.931 161.187 383.593 161.187C362.238 161.187 350.892 158.22 333.368 150.914L326.49 147.803L319.003 191.625C331.466 197.092 354.511 201.824 378.441 202.07C434.531 202.07 470.943 175.822 471.357 135.185C471.556 112.915 457.341 95.97 426.556 81.997C407.906 72.941 396.484 66.898 396.605 57.728C396.605 49.591 406.273 40.89 427.165 40.89C444.611 40.619 457.253 44.424 467.101 48.39L471.882 50.649L479.113 8.222V8.222ZM616.423 3.99899H575.193C562.421 3.99899 552.861 7.485 547.253 20.233L468.008 199.633H524.039C524.039 199.633 533.198 175.512 535.27 170.215C541.393 170.215 595.825 170.299 603.606 170.299C605.202 177.153 610.098 199.633 610.098 199.633H659.61L616.423 3.993V3.99899ZM551.006 130.409C555.42 119.13 572.266 75.685 572.266 75.685C571.952 76.206 576.647 64.351 579.34 57.001L582.946 73.879C582.946 73.879 593.163 120.608 595.299 130.406H551.006V130.409V130.409ZM187.706 3.99899L135.467 137.499L129.902 110.37C120.176 79.096 89.8774 45.213 56.0044 28.25L103.771 199.45L160.226 199.387L244.23 3.99699L187.706 3.996" fill="#0E4595" /><path d="M86.723 3.99219H0.682003L0 8.06519C66.939 24.2692 111.23 63.4282 129.62 110.485L110.911 20.5252C107.682 8.12918 98.314 4.42918 86.725 3.99718" fill="#F2AE14" /></svg>
                        </button>
                    </div>

                    <div className="mb-6 w-2/3">
                        <label className="block text-sm font-medium">Credit Card</label>
                        <div className="relative">
                            <input
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="5412 9808 9879 8974"
                                required
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2.5 pointer-events-none">
                                <svg aria-hidden="true" className="w-10 h-3 -ms-1" viewBox="0 0 660 203" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M233.003 199.762L266.362 4.002H319.72L286.336 199.762H233.003V199.762ZM479.113 8.222C468.544 4.256 451.978 0 431.292 0C378.566 0 341.429 26.551 341.111 64.604C340.814 92.733 367.626 108.426 387.865 117.789C408.636 127.387 415.617 133.505 415.517 142.072C415.384 155.195 398.931 161.187 383.593 161.187C362.238 161.187 350.892 158.22 333.368 150.914L326.49 147.803L319.003 191.625C331.466 197.092 354.511 201.824 378.441 202.07C434.531 202.07 470.943 175.822 471.357 135.185C471.556 112.915 457.341 95.97 426.556 81.997C407.906 72.941 396.484 66.898 396.605 57.728C396.605 49.591 406.273 40.89 427.165 40.89C444.611 40.619 457.253 44.424 467.101 48.39L471.882 50.649L479.113 8.222V8.222ZM616.423 3.99899H575.193C562.421 3.99899 552.861 7.485 547.253 20.233L468.008 199.633H524.039C524.039 199.633 533.198 175.512 535.27 170.215C541.393 170.215 595.825 170.299 603.606 170.299C605.202 177.153 610.098 199.633 610.098 199.633H659.61L616.423 3.993V3.99899ZM551.006 130.409C555.42 119.13 572.266 75.685 572.266 75.685C571.952 76.206 576.647 64.351 579.34 57.001L582.946 73.879C582.946 73.879 593.163 120.608 595.299 130.406H551.006V130.409V130.409ZM187.706 3.99899L135.467 137.499L129.902 110.37C120.176 79.096 89.8774 45.213 56.0044 28.25L103.771 199.45L160.226 199.387L244.23 3.99699L187.706 3.996" fill="#0E4595" /><path d="M86.723 3.99219H0.682003L0 8.06519C66.939 24.2692 111.23 63.4282 129.62 110.485L110.911 20.5252C107.682 8.12918 98.314 4.42918 86.725 3.99718" fill="#F2AE14" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="mb-6 w-2/3">
                        <label className="block text-sm font-medium">Name</label>
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Mike " required />
                    </div>
                    <div className="flex gap-8 w-2/3">
                        <div className="mb-6">
                            <label className="block text-sm font-medium">Expiration Date</label>
                            <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder=" " required />
                        </div>
                        <div className="mb-6 w-2/3">
                            <label className="block text-sm font-medium">CVV</label>
                            <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="891 " required />
                        </div>
                    </div>

                </div>
                <div className='text-left h-3/4 w-5/6 mt-10 rounded-xl text-gray-500 border border-gray-300'>
                    <div className="text-green-400 text-center p-4 font-bold border-b">
                        <h1>Summary</h1>
                    </div>
                    <div className="p-10 text-start mt-2 text-gray-400 text-sm">
                        <div className="flex items-center gap-1">
                            <p>Package</p>
                            <div className="border w-40 bg-gray-400 border-dotted"></div>
                            <p>Local Package</p>
                        </div>
                        <div className="flex items-center mt-6 gap-1">
                            <p>Promo code/Invite Code</p>
                            <div className="border w-16 bg-gray-400 border-dotted"></div>
                            <p className="text-green-400">Apply Code</p>
                        </div>
                        <div className="flex items-center mt-6 gap-1">
                            <p>Sub Total</p>
                            <div className="border w-40 bg-gray-400 border-dotted"></div>
                            <p>Rs. 4000</p>
                        </div>
                        <div className="flex items-center text-green-400 mt-16 gap-1">
                            <p>Total budget</p>
                            <div className="border w-40 bg-green-400 border-dotted"></div>
                            <p>4000 PKR</p>
                        </div>
                        <div className="flex gap-6 justify-center mt-8">
                            <button type="submit" className="bg-white text-black border border-black rounded-2xl text-center px-10 py-1">Cancel</button>
                            <button type="submit" className="bg-green-400 text-white rounded-2xl text-center px-10 py-1">Pay Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Step4;
