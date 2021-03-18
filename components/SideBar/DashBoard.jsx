import React from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";
import { items } from "./config";
import { Facebook, Twitter } from "react-feather";
import logo from "@/public/assets/icon.png"

function DashBoard() {
    const router = useRouter();
    return (
        <div className="h-screen justify-center bg-black text-white">
            <div className="font-bold p-2 mx-4 flex flex-col items-center">
                <h1>APP SAVING</h1>
                <div className="my-2">
                    <img src={logo} alt="" className="w-24 h-24" />
                </div>
                <button className="mt-2 px-5 py-1 border rounded hover:bg-yellow-600 hover:border-transparent hover:text-gray-900">Who are we ?</button>
            </div>
            <hr className="my-6 mx-8" />
            <div className="mx-4">
                <div className="py-1 font-light">
                </div>
                <div className="w-full grid gap-1">
                    {items.map((item, index) =>
                        <Link key={index} href={item.path}>
                            <div className="px-4 py-2 w-full flex flex-col items-center font-semibold border rounded-lg cursor-pointer hover:bg-yellow-600">
                                <h1>{item.label}</h1>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
            <hr className="m-8" />
            <div className="flex flex-row gap-10 justify-center">
                <Facebook className="hover:bg-blue-800 rounded-full p-2 cursor-pointer" size="40px" />
                <Twitter className="hover:bg-blue-500 rounded-full p-2 cursor-pointer" size="40px" />
            </div>
            <div className="my-4 flex justify-center text-sm ">
                <h1>&copy; 2020 , APP</h1>
            </div>
        </div>
    )
}

export default DashBoard
