import React from 'react';
import { SlideMenu } from "@/components/SideBar";
import { Nav } from "@/components/NavBar";
import { members } from '@/components/NavBar/config';

const Suscribers = () => (
  <div className="m-4">
    <div className="rounded-tl-lg px-12 rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg">
      <div className="flex justify-between">
        <div className="inline-flex border rounded w-7/12 h-12 bg-transparent">
          <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative">
            <input type="text" className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px flex-1 border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs lg:text-base text-gray-500 font-thin" placeholder="Search" />
            <button type="submit" className="bg-green-600 hover:bg-red-600 m-0 right-0 relative py-1 outline-none focus:outline-none px-6">Search</button>
          </div>
        </div>
      </div>
    </div>
    <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
      <table className="min-w-full">
        <thead >
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">ID</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Fullname</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Email</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Phone</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Status</th>
            <th className="px-6 py-3 border-b-2 border-gray-300" />
          </tr>
        </thead>

        <tbody className="bg-white">
          {members.map((listMembers, index) =>
            <>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm leading-5 text-gray-800">{listMembers.id}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <div className="text-sm leading-5 text-blue-900">{listMembers.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-blue-900 text-sm leading-5">{listMembers.email}</td>
                <td className="px-6 py-4 whitespace-no-wrap text-blue-900 text-sm leading-5">{listMembers.phone}</td>
                <td className="px-6 py-4 whitespace-no-wrap text-blue-900 text-sm leading-5">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden className={listMembers.status == "Null" ? "absolute inset-0 bg-green-300 opacity-50 rounded-full" : "absolute inset-0 bg-red-300 opacity-50 rounded-full"} />
                    <span className="relative text-xs">{listMembers.status}</span>
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5">
                  <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
                </td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </div>
  </div >
)

function Members() {
  return (
    <div className="grid grid-cols-12 ">
      <div className="col-span-2">
        <SlideMenu />
      </div>
      <div className="col-span-10">
        <Nav />
        <div>
          <Suscribers />
        </div>
      </div>
    </div>
  )
}

export default Members
