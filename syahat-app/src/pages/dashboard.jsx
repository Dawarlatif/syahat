import React from "react";
import Header from "../components/header";

const Dashboard = () => {
  return (
    <div className="w-full h-auto  flex flex-wrap justify-center items-center  ">
      <Header />
      <div className="w-full h-full flex flex-wrap items-center justify-center">
        <div className="mx-auto flex w-full px-14">
          <div className="w-1/4 px-1">
            <div className="rounded-lg border flex flex-col">
              <div className="h-1/3 border border-b-1">
                <div className="h-1/2 w-full"></div>
                <div className="h-1/2 w-full flex items-center justify-center">
                  <h1 className="font-semibold text-lg">Discover Pakistan</h1>
                  <div className="flex">4.0 (255)</div>
                </div>
              </div>
              <div className="h-2/3 p-2">
                <div className="w-full py-2 px-1">
                  <div className="text-center rounded-full bg-green-500 font-semibold py-1 text-white">
                    Dashboard
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 py-2">
                  <div>
                    {" "}
                    <div className="rounded-full text-center border items-center justify-center py-1 px-2">
                      feed
                    </div>
                  </div>
                  <div>
                    {" "}
                    <div className="rounded-full text-center border items-center justify-center py-1 px-2">
                      Tours
                    </div>
                  </div>
                  <div>
                    {" "}
                    <div className="rounded-full text-center border items-center justify-center py-1 px-2">
                      Calender
                    </div>
                  </div>
                  <div>
                    {" "}
                    <div className="rounded-full text-center border items-center justify-center py-1 px-2">
                      Maps
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 py-2">
                  <div>
                    {" "}
                    <div className="rounded-full text-center border items-center justify-center py-1 px-2">
                      Insights
                    </div>
                  </div>
                  <div>
                    {" "}
                    <div className="rounded-full text-center border items-center justify-center py-1 px-2">
                      AdCenter
                    </div>
                  </div>
                  <div>
                    {" "}
                    <div className="rounded-full text-center border items-center justify-center py-1 px-2">
                      Accounts & Wallets{" "}
                    </div>
                  </div>
                  <div>
                    {" "}
                    <div className="rounded-full text-center border items-center justify-center py-1 px-2">
                      My Promos
                    </div>
                  </div>
                  <div>
                    {" "}
                    <div className="rounded-full text-center border items-center justify-center py-1 px-2">
                      Settings
                    </div>
                  </div>
                  <div>
                    {" "}
                    <div className="rounded-full text-center border items-center justify-center py-1 px-2">
                      Promote Agency
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 py-4 px-1">
                  <div className="border rounded-md items-center justify-center flex p-4">
                    <div className="w-2/5"></div>
                    <div className="w-3/5">
                      <h1 className="font-semibold text-xl">120</h1>
                      <p className="text-xs">Tours</p>
                    </div>
                  </div>
                  <div className="border rounded-md items-center justify-center flex p-4">
                    <div className="w-2/5"></div>
                    <div className="w-3/5">
                      <h1 className="font-semibold text-xl">150</h1>
                      <p className="text-xs">Posts</p>
                    </div>
                  </div>
                  <div className="border rounded-md items-center justify-center flex p-4">
                    <div className="w-2/5"></div>
                    <div className="w-3/5">
                      <h1 className="font-semibold text-xl">500</h1>
                      <p className="text-xs">Folowers</p>
                    </div>
                  </div>
                  <div className="border rounded-md items-center justify-center flex py-4 px-1">
                    <div className="w-2/5"></div>
                    <div className="w-3/5">
                      <h1 className="font-semibold text-xl">90%</h1>
                      <p className="text-xs">Positive Response</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/4"></div>
          <div className="w-1/4"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
