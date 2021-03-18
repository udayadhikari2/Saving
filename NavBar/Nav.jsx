import React from 'react';
import { LogOut, Settings } from 'react-feather';
import logo from "@/public/assets/user.png";
import { basicInfo } from './config';

function Nav() {
    return (
        <div className="h-14 bg-green-800 grid grid-flow-col grid-cols-12 items-center font-bold text-white shadow-lg select-none">
            <div className="grid place-items-center col-span-3 mx-5">
                <header className="underline">
                    DashBoard
                </header>
            </div>
            <div className="grid grid-flow-col col-span-6 mx-10 place-items-end">
                <div className="flex items-center gap-5">
                    {basicInfo.map((info, index) =>
                        <>
                            <h1 >{info.name}</h1>
                            <img src={logo} alt="" className="w-10 h-10" />
                        </>
                    )}
                </div>
            </div>
            <div className="grid grid-flow-col col-span-2 p-2 bg-red-500 rounded-md cursor-pointer gap-2 mx-5">
                <LogOut />
                <a>Logout</a>
            </div>
            <div className="grid grid-flow-col col-span-1 mx-5 cursor-pointer">
                <Settings />
            </div>
        </div >
    )
}

export default Nav
