import React from "react";
import Header from "../components/header";
import img from "./../assets/lady.png";
import { MdArrowOutward } from "react-icons/md";
import { FiArrowDownRight } from "react-icons/fi";
import { Chart } from "react";
import Table from "../components/table";
import chatIcon from "../assets/chatIcon.svg";
import followersIcon from "../assets/followersIcon.svg";
import postsIcon from "../assets/postsIcon.svg";
import responsesIcon from "../assets/responsesIcon.svg";
import toursIcon from "../assets/toursIcon.svg";
import feedIcon from "../assets/feedIcon.svg";
import tourSmallIcon from "../assets/tourSmallIcon.svg";
import calendarIcon from "../assets/calendarIcon.svg";
import mapsIcon from "../assets/mapsIcon.svg";
import insightsIcon from "../assets/insightsIcon.svg";
import adCenterIcon from "../assets/adCenterIcon.svg";
import walletIcon from "../assets/walletIcon.svg";
import promoIcon from "../assets/promoIcon.svg";
import settingsIcon from "../assets/settingsIcon.svg";
import agencyIcon from "../assets/agencyIcon.svg";

const Dashboard = () => {
  const array = [
    {
      name: "john",
      icon: <img src={img} className="w-10 h-10 rounded-full " />,
      msg: "hello svsvsdv svvdsv svsvsvvvfd",
      count: "13",
      date: "Today",
    },
    {
      name: "john",
      icon: <img src={img} className="w-10 h-10 rounded-full " />,
      msg: "hello",
      count: "1",
      date: "Today",
    },
    {
      name: "john",
      icon: <img src={img} className="w-10 h-10 rounded-full " />,
      msg: "hello",
      count: "1",
      date: "Today",
    },
    {
      name: "john",
      icon: <img src={img} className="w-10 h-10 rounded-full " />,
      msg: "hello",
      count: "1",
      date: "Today",
    },
  ];
  const array2 = [
    {
      name: "Publish Tours",
      count: 4,
      bgColor: "bg-[#84C59A]",
    },
    {
      name: "On Going Tours",
      count: 4,
      bgColor: "bg-[#97C7F3]",
    },
    {
      name: "Promoted Tours",
      count: 4,
      bgColor: "bg-[#A4F09A]",
    },
    {
      name: "Team Members",
      count: 4,
      bgColor: "bg-[#97B1f3]",
    },
  ];
  const array3 = [
    {
      title: "New Followers 78%",
      date: "20 December - 26 December",
      icon: <MdArrowOutward />,
      textColor: "",
      count: 200,
    },
    {
      title: "Tour Booking",
      date: "20 December - 26 December",
      icon: <MdArrowOutward />,
      textColor: "",
      count: 32,
    },
    {
      title: "Revenue -8%",
      date: "20 December - 26 December",
      icon: <FiArrowDownRight />,
      textColor: "",
      count: 1200,
    },
  ];
  const array4 = [
    {
      title: "Pending Revenue",
      date: "20 December - 26 December",
      icon: <MdArrowOutward />,
      textColor: "",
      count: "12000 PKR",
    },
    {
      title: "Revenue Earned",
      date: "20 December - 26 December",
      icon: <MdArrowOutward />,
      textColor: "",
      count: "12000 PKR",
    },
    {
      title: "Total Revenue",
      date: "20 December - 26 December",
      icon: <FiArrowDownRight />,
      textColor: "",
      count: "12000 PKR",
    },
  ];
  const cards = [
    {
      icon: toursIcon,
      count: 120,
      header: "Tours",
    },
    {
      icon: followersIcon,
      count: 500,
      header: "Followers",
    },
    {
      icon: postsIcon,
      count: 150,
      header: "Posts",
    },
    {
      icon: responsesIcon,
      count: "90%",
      header: "Positive Response",
    },
  ];
  const buttons1 = [
    { header: "Feed", icon: feedIcon },
    { header: "Tours", icon: tourSmallIcon },
    { header: "Calendar", icon: calendarIcon },
    { header: "Maps", icon: mapsIcon },
  ];
  const buttons2 = [
    { header: "Insights", icon: insightsIcon },
    { header: "AdCenter", icon: adCenterIcon },
    { header: "Accounts & Wallets", icon: walletIcon },
    { header: "My Promos", icon: promoIcon },
    { header: "Settings", icon: settingsIcon },
    { header: "Promote Agency", icon: agencyIcon },
  ];
  return (
    <div className="w-full h-auto  flex flex-wrap justify-center items-center">
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
        <div className="sm:col-span-12 md:col-span-3  p-2">
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
                <div className="text-center rounded-full bg-gradient-to-r from-teal-700 to-lime-400 font-semibold py-1 text-white">
                  Dashboard
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 py-2">
                {buttons1.map((item, index) => (
                  <div key={index} className="w-full ">
                    <div className="rounded-full flex text-center border border-gray-300 text-gray-400 font-normal text-base items-center justify-center py-1 ">
                      <img
                        className="w-5 h-5 pr-1"
                        id={index}
                        src={item.icon}
                      />
                      {item.header}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2 py-2">
                {buttons2.map((item, index) => (
                  <div key={index} className="w-full ">
                    <div className="rounded-full flex text-center border border-gray-300 text-gray-400 font-normal text-base items-center justify-center py-1 ">
                      <img
                        className="w-5 h-5 pr-1"
                        id={index}
                        src={item.icon}
                      />
                      {item?.header}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 py-4 px-1">
                {cards.map((data, index) => (
                  <div
                    className="border rounded-md border-green-700 items-center justify-center flex p-4"
                    key={index}
                  >
                    <div className="pr-2">
                      <img src={data.icon} id={index} />
                    </div>
                    <div className="">
                      <h1 className="font-semibold text-2xl text-green-700 font-bold">
                        {data.count}
                      </h1>
                      <p className="text-xs text-green-700 font-normal">
                        {data.header}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="sm:col-span-12 md:col-span-6  p-2">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl text-bold text-green-500 font-semibold py-2 px-1">
              Dashboard
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 bg-gray-50 rounded-md px-2 py-4 border flex  my-1 min-h-[150px]">
            {array2.map((item, index) => (
              <div
                className="sm:col-span-12 md:col-span-4 lg:col-span-3  p-2 h-full"
                key={index}
              >
                <div
                  className={`rounded-lg text-white flex flex-col w-full py-1 divide-y ${item.bgColor} h-full`}
                >
                  <div className=" min-h-[70px]  py-1 flex justify-center items-center">
                    <h1 className="font-semibold text-lg text-center  ">
                      {item.name}
                    </h1>
                  </div>
                  <div className="flex  items-center justify-center min-h-[80px] text-3xl font-bold py-1">
                    <span className="mx-2 rounded-full border-2 text-white text-bold w-9 h-9"></span>
                    {item.count}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 bg-gray-50 rounded-md px-2 py-4 border flex items-center justify-center my-1">
            {array3.map((item, index) => (
              <div
                className=" sm:col-span-12 md:col-span-6 lg:col-span-4"
                key={index}
              >
                <div className="bg-white text-green-700 py-2 border rounded-md  divide-y">
                  <div className="h-2/6 flex flex-wrap items-center">
                    <div className="flex flex-col w-10/12 pl-2 pt-1 pb-2">
                      <h1 className="text-md font-semibold ">{item.title}</h1>
                      <p className="text-xs">{item.date}</p>
                    </div>

                    <div className=" flex  flex-wrap">
                      <div className="text-center p-1 rounded-full border-green-700 border flex text-xs">
                        {item.icon}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-start h-4/6 text-4xl font-bold pt-4 pb-1 px-2">
                    <span className="mx-2 rounded-full border-2 border-green-700 text-white w-10 h-10">
                      {item.icon}
                    </span>
                    {item.count}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" bg-gray-50 rounded-md px-2 flex-col flex py-4 border my-1">
            <h1 className="text-xl font-semibold pl-2 pb-2  text-green-700">
              Your Earnings
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 flex items-center justify-center">
              {array4.map((item, index) => (
                <div
                  className="sm:col-span-12 md:col-span-6 lg:col-span-4"
                  key={index}
                >
                  <div className="bg-white text-green-700 py-2 border rounded-md  divide-y">
                    <div className="h-2/6 flex flex-wrap items-center">
                      <div className="flex flex-col w-10/12 pl-2 pt-1 pb-2">
                        <h1 className="text-md font-semibold ">{item.title}</h1>
                        <p className="text-xs">{item.date}</p>
                      </div>

                      <div className=" flex  flex-wrap">
                        <div className="text-center p-1 rounded-full border-green-700 border flex text-xs">
                          {item.icon}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-start h-4/6 text-3xl font-bold pt-4 pb-1 px-2">
                      {item.count}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-md px-2 py-2  border flex flex-col items-left justify-center my-1">
            <h1 className="text-xl font-semibold pl-4  text-green-700">
              Cash Flow
            </h1>
            <div className="px-4 py-2">
              <Table />
            </div>
          </div>
        </div>
        <div className="sm:col-span-12 md:col-span-3  p-2">
          <div className="rounded-lg border flex flex-wrap w-full">
            <div className="bg-gradient-to-r from-teal-700 to-lime-400 text-2xl font-semibold p-4 flex w-full rounded-t-lg text-white">
              chats
            </div>
            <div className="flex flex-wrap w-full">
              <div className="flex justify-center items-center py-4 px-2 text-sm w-full">
                <div className="rounded-full flex border p-2 mx-1 place-content-center w-4/12 flex-grow bg-gradient-to-r from-teal-700 to-lime-400 text-white">
                  Community
                </div>

                <div className="rounded-full flex border p-2  mx-1 place-content-center w-4/12 flex-grow ">
                  Community
                </div>
                <div className="rounded-full flex border p-2  mx-1 place-content-center w-4/12 flex-grow ">
                  Community
                </div>
              </div>
              <div className="flex px-2 py-3 w-full items-center">
                <input
                  className="w-4/5 h-12 border rounded-3xl pl-4 placeholder-gray-500 "
                  placeholder="Search"
                />
                <div className="w-1/5 h-full">
                  <img src={chatIcon} alt="Icon" className="flex w-full  " />{" "}
                </div>
              </div>
              <div className="py-4 px-2 flex flex-col flex-wrap gap-2 w-full">
                {array.map((item, index) => (
                  <div
                    className="rounded-md border p-2 flex flex-wrap w-full  bg-gray-50"
                    key={index}
                  >
                    <div className="w-4/5 flex">
                      <div className="w-3/12 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div className="w-9/12">
                        <h1 className="text-md  font-semibold">{item.name}</h1>
                        <p className="text-sm text-gray-500">{item.msg}</p>
                      </div>
                    </div>
                    <div className="w-1/5 flex flex-col gap-2 items-end">
                      <h1 className="text-xs  font-semibold">{item.date}</h1>
                      <div className=" w-2/6   ">
                        <div className="rounded-full w-5 h-5 text-[10px] text-white bg-green-800 flex justify-center items-center">
                          {item.count}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
