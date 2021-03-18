import React from 'react';
import { SlideMenu } from "@/components/SideBar";
import { Nav } from "@/components/NavBar";

const StatementsTable = () => (
    <div className="m-4">
        <div className="rounded-tl-lg px-12 rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg">
            <div className="flex justify-between">
                <div className="inline-flex  rounded  h-12 bg-transparent">
                    <div className="flex flex-wrap items-stretch w-96 h-full mb-6 relative">
                        <input type="text" className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px flex-1 border  rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs lg:text-base text-gray-500 font-thin" placeholder="Search by Subscriber Name" />
                        <button type="submit" className="bg-green-600 hover:bg-red-600 m-0 right-0 relative py-1 outline-none focus:outline-none px-6">Search</button>
                    </div>
                    <div className="flex flex-wrap items-stretch relative py-3">
                        <div className="flex-shrink flex-grow px-5 mx-10 w-full">
                            <label htmlFor="filter">Filter by Date : </label>
                            <input type="date" className="mx-8"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
            <table className="min-w-full">
                <thead >
                    <tr>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Date</th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Subscriber</th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Naration</th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Ref./Transaction Id</th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Debit</th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Credit</th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Balance</th>
                    </tr>
                </thead>

                <tbody className="bg-white">
                    {/* {members.map((listMembers, index) =>
            <> */}
                    <tr>
                        <td className="px-6 py-4 whitespace-no-wrap">
                            <div className="flex items-center">
                                <div>
                                    <div className="text-sm leading-5 text-gray-800">2077/12/10</div>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap">
                            <div className="text-sm leading-5 text-blue-900">Bikash Adhikari</div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap">
                            <div className="text-sm leading-5 text-blue-900">Payment through esewa </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap text-blue-900 text-sm leading-5">0R2587EFTP1D6TR</td>
                        <td className="px-6 py-4 whitespace-no-wrap text-blue-900 text-sm leading-5">
                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span aria-hidden className="absolute inset-0 bg-red-300 opacity-50 rounded-full" />
                                <span className="relative text-xs">-</span>
                            </span>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap text-blue-900 text-sm leading-5">
                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span aria-hidden className="absolute inset-0 bg-green-300 opacity-50 rounded-full" />
                                <span className="relative text-xs">1000</span>
                            </span>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap text-blue-900 font-bold text-sm leading-5 ">Rs. 1000</td>
                    </tr>
                    {/* </>
          )} */}
                </tbody>
            </table>
        </div>
    </div >
)

function Statements() {
    return (
        <div className="grid grid-cols-12 ">
            <div className="col-span-2">
                <SlideMenu />
            </div>
            <div className="col-span-10">
                <Nav />
                <div>
                    <StatementsTable />
                </div>
            </div>
        </div>
    )
}

export default Statements
