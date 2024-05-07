import React from 'react'

const Table = () => {
    const array=[
        {
            name:'umair Malik',
            trip:'Trip to Naran',
            date:'10-12-2021',
            amount:'+100 PKR'
        },   {
            name:'Ali Malik',
            trip:'Trip to Naran',
            date:'10-12-2021',
            amount:'+900 PKR'
        },   {
            name:'Asfand',
            trip:'Trip to Naran',
            date:'10-12-2021',
            amount:'+1100 PKR'
        },   {
            name:'Asif khan',
            trip:'Trip to Naran',
            date:'10-12-2021',
            amount:'+1000 PKR'
        },
    ]
  return (
 

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      
        <thead className="text-xs text-gray-500 font-sans uppercase bg-gray-200">
            <tr>
                <th scope="col" className="px-6 py-3">
                     Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Tour Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Amount
                </th>
          
            </tr>
        </thead>
        <tbody>
            {array.map((item,index)=>(
    <tr className="bg-white border-b text-xs " key={index}>
    <th scope="row" className="px-6 py-3 font-medium text-gray-500 whitespace-nowrap">
 {item.name}
    </th>
    <td className="px-6 py-3 text-green-700">
    {item.trip}
    </td>
    <td className="px-6 py-3">
    {item.date}
    </td>
    <td className="px-6 py-3 text-green-700">
    {item.amount}
    </td>
  
</tr>
            ))}
        
          
        </tbody>
    </table>
</div>

  )
}

export default Table