import React from 'react';
import { Database, FileMinus, BarChart2, User } from "react-feather"

const statusItems = [
    {
        label: "Total Balance",
        value: "9000",
        unit: "Rs",
        icons: < Database size="50px" color="red" className="bg-yellow-200 rounded-full p-2" />
    },
    {
        label: "Your own Balance",
        value: "1000",
        unit: "Rs",
        icons: < User size="50px" color="red" className="bg-yellow-200 rounded-full p-2" />
    },
    {
        label: "Fine",
        value: "0",
        unit: "Rs",
        icons: < FileMinus size="50px" color="red" className="bg-yellow-200 rounded-full p-2" />
    },
    {
        label: "Interest",
        value: "50.65",
        unit: "Rs",
        icons: < BarChart2 size="50px" color="red" className="bg-yellow-200 rounded-full p-2" />
    }
]

function Status() {
    return (
        <div className="grid w-full my-1">
            <div className="flex flex-wrap justify-center text-center items-center" >
                {statusItems.map((statusLabel, index) =>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className=" shadow-2xl p-4 rounded-lg flex flex-col items-center" key={index}>
                            {statusLabel.icons}
                            <div className="flex flex-row gap-3 py-3">
                                <h2 className="title-font font-medium text-3xl">{statusLabel.unit}</h2>
                                <h2 className="title-font font-medium text-3xl">{statusLabel.value}</h2>
                            </div>
                            <p className="leading-relaxed text-gray-900">{statusLabel.label}</p>
                        </div>
                    </div>
                )}
            </div>
        </div >
    )
}

export default Status;
