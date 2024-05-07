import React from "react";
import Header from "../components/header";
import img from './../assets/lady.png'
import { MdArrowOutward } from "react-icons/md";
import { FiArrowDownRight } from "react-icons/fi";
import {Chart} from 'react'
import Table from "../components/table";

const Dashboard = () => {

  
  // const data = [
  //   {
  //     label: 'React Charts',
  //     data: [
  //       {
  //         date: new Date(),
  //         stars: 202123,
  //       }
  //       // ...
  //     ]
  //   },
  //   {
  //     label: 'React Query',
  //     data: [
  //       {
  //         date: new Date(),
  //         stars: 10234230,
  //       }
  //       // ...
  //     ]
  //   }
  // ]
  // const primaryAxis = React.useMemo(
  //   () => ({
  //     getValue: datum => datum.date,
  //   }),
  //   []
  // )

  // const secondaryAxes = React.useMemo(
  //   () => [
  //     {
  //       getValue: datum => datum.stars,
  //     },
  //   ],
  //   []
  // )
const array=[

    {
        name:'john',
        icon:<img src={img} className="w-10 h-10 rounded-full "/>,
        msg:'hello',
        count:"1",
        date:'Today'
    },
    {
        name:'john',
      icon:<img src={img} className="w-10 h-10 rounded-full "/>,
        msg:'hello',
        count:"1",
        date:'Today'
    },{
        name:'john',
      icon:<img src={img} className="w-10 h-10 rounded-full "/>,
        msg:'hello',
        count:"1",
        date:'Today'
    },{
        name:'john',
      icon:<img src={img} className="w-10 h-10 rounded-full "/>,
        msg:'hello',
        count:"1",
        date:'Today'
    },
]
const array2=[
    {
        name:'Publish Tours',
        count:4,
        bgColor:'bg-[#84C59A]'
    },{
        name:'On Going Tours',
        count:4,
        bgColor:'bg-[#97C7F3]'

    },{
        name:'Promoted Tours',
        count:4,
        bgColor:'bg-[#A4F09A]'

    },{
        name:'Team Members',
        count:4,
        bgColor:'bg-[#97B1f3]'

    },
]
const array3=[
    {
        title:'New Followers 78%',
        date:'20 December - 26 December',
        icon:<MdArrowOutward  />,
        textColor:'',
        count:200
    },{
        title:'Tour Booking',
        date:'20 December - 26 December',
        icon:<MdArrowOutward />,
        textColor:'',
        count:32
    
      },{
        title:'Revenue -8%',
        date:'20 December - 26 December',
        icon:<FiArrowDownRight/>,
        textColor:'',
        count:1200
    },
]
const array4=[
  {
      title:'Pending Revenue',
      date:'20 December - 26 December',
      icon:<MdArrowOutward  />,
      textColor:'',
      count:"12000 PKR"
  },{
      title:'Revenue Earned',
      date:'20 December - 26 December',
      icon:<MdArrowOutward />,
      textColor:'',
      count:"12000 PKR"
      
  
    },{
      title:'Total Revenue',
      date:'20 December - 26 December',
      icon:<FiArrowDownRight/>,
      textColor:'',
      count:"12000 PKR"
      
  },
]
  return (
    <div className="w-full h-auto  flex flex-wrap justify-center items-center  ">
      <Header />
      <div className="w-full h-full flex flex-wrap items-center justify-center">
        <div className="mx-auto flex w-full px-10">
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
          <div className="w-2/4 p-2 flex flex-col flex-wrap ">
            <div className="flex items-center justify-between"> 
                <h1 className="text-2xl text-green-500 font-semibold py-2 px-1">Dashboard</h1>
            </div>
<div className="bg-gray-50 rounded-md px-2 py-4 border flex items-center justify-center my-1">

        {array2.map((item,index)=>(
                <div className="flex flex-wrap mx-auto w-1/4 p-1" key={index}>
        <div className={`rounded-lg text-white flex flex-col w-full py-2 divide-y ${item.bgColor}`}>
            <div className=" h-2/5 px-1 py-1">
            <h1 className="font-semibold text-lg text-center mb-4 ">{item.name}</h1>
            </div>
            <div className="flex flex-wrap items-center justify-center h-4/6 text-3xl font-bold">
                <span className="mx-2 rounded-full border-2 text-white w-9 h-9"></span>{item.count}
            </div>
        </div>


    </div>
        ))}
</div>
<div className="bg-gray-50 rounded-md px-2 py-4 border flex items-center justify-center my-1">
    {array3.map((item,index)=>(
    
    <div className="mx-auto w-1/3 px-1 " key={index}>
        <div className="bg-white text-green-700 py-2 border rounded-md  divide-y">
            <div className="h-2/6 flex flex-wrap items-center">
                <div className="flex flex-col w-10/12 pl-2 pt-1 pb-2">
<h1 className="text-md font-semibold ">{item.title}</h1>
<p className="text-xs">{item.date}</p>
                </div>

<div className=' flex  flex-wrap'>
  <div className="text-center p-1 rounded-full border-green-700 border flex text-xs">
    {item.icon}</div>
    </div>
            </div>
 
            <div className="flex flex-wrap items-center justify-start h-4/6 text-4xl font-bold pt-4 pb-1 px-2">
                <span className="mx-2 rounded-full border-2 border-green-700 text-white w-10 h-10">{item.icon}</span>{item.count}
   
            </div>
        </div>
    </div>
))}

</div>
<div className="bg-gray-50 rounded-md px-2 flex-col flex py-4 border my-1">
<h1 className="text-xl font-semibold pl-2 pb-2  text-green-700">Your Earnings</h1>
<div className=" flex items-center justify-center">
      {array4.map((item,index)=>(
    
    <div className="mx-auto w-1/3 px-1 " key={index}>
        <div className="bg-white text-green-700 py-2 border rounded-md  divide-y">
            <div className="h-2/6 flex flex-wrap items-center">
                <div className="flex flex-col w-10/12 pl-2 pt-1 pb-2">
<h1 className="text-md font-semibold ">{item.title}</h1>
<p className="text-xs">{item.date}</p>
                </div>

<div className=' flex  flex-wrap'>
  <div className="text-center p-1 rounded-full border-green-700 border flex text-xs">
    {item.icon}</div>
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
<h1 className="text-xl font-semibold pl-4  text-green-700">Cash Flow</h1>
<div className="px-4 py-2"><Table/>
</div>

</div>
          </div>
          <div className="w-1/4">
            <div className="rounded-lg border flex flex-wrap">
                <div className="bg-green-500 text-2xl font-semibold p-4 flex w-full rounded-t-lg text-white" >chats</div>
                <div className="flex flex-wrap">
                    <div className="flex justify-center items-center py-4 px-2 text-sm">
                        <div className="rounded-full flex border p-2 bg-green-500 text-white mx-1 w-3/10 ">
                            Community

                        </div>
                        <div className="rounded-full flex border p-2  mx-1 w-3/10">
                            Community

                        </div>
                        <div className="rounded-full flex border p-2  mx-1 w-3/10">
                            Community

                        </div>
                    </div>
                    <div className="flex py-3">
                        <input/>
                        <div className="rounded-full p-2">  </div>
                    </div>
                    <div className="py-4 px-2 flex flex-col flex-wrap gap-2 w-full">
                       {array.map((item,index)=>(

<div className="rounded-md border p-2 flex flex-wrap w-full items-center justify-center bg-gray-50" key={index}>
<div className="h-full mx-auto w-3/12 flex  " >
    <div className="flex-shrink-0">{item.icon}</div>
    </div>
<div className="flex flex-col gap-0 w-6/12 mx-auto">
<h1 className="text-md  font-semibold">{item.name}</h1>
<p className="text-sm text-gray-500">{item.msg}</p>
</div>
<div className="flex flex-col gap-2 w-3/12">
<h1 className="text-xs mx-auto font-semibold">{item.date}</h1>
<div className="text-white bg-green-800 px-2 py-1  text-xs mx-auto rounded-full">{item.count}
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
    </div>
  );
};

export default Dashboard;
