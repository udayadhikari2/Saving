import React from 'react';
import { SlideMenu } from "@/components/SideBar";
import { Nav } from "@/components/NavBar";
import {basicInfo} from "@/components/NavBar/config"

const handleSubmit=(e)=>{
    e.preventDefault();
}

const TranscationForms=()=>(
    <div className="flex flex-row flex-wrap flex-shrink flex-auto justify-center py-8">
    <form action="" className="grid w-full mx-48 text-lg" onSubmit={handleSubmit} > 
        {basicInfo.map((subName,index)=>
        
        <div className="flex flex-row gap-5 w-full items-center">
        <label>Id : </label>
        <input type="text" value={subName.id} className="border p-2 rounded my-2" disabled/>
        <label>Name : </label>
        <input type="text" value={subName.name} className="border p-2 rounded my-2" disabled/> 
        </div>
        )}
        <label>Payment Month </label>
        <select required className="border p-2 rounded my-2">
        <option value="">Select Payment Month</option>
            <option value="Baishak">Baishak</option>
            <option value="Jestha">Jestha</option>
            <option value="Ashar">Ashar</option>
            <option value="Shrawan">Shrawan</option>
            <option value="Bhadra">Bhadra</option>
            <option value="Ashoj">Ashoj</option>
            <option value="Kartik">Kartik</option>
            <option value="Mansir">Mansir</option>
            <option value="Push">Push</option>
            <option value="Magh">Magh</option>
            <option value="Falgun">Falgun</option>
            <option value="Chaitra">Chaitra</option>
            </select>
        <label>Amount</label>
        <input type="text" required  className="border p-2 my-2 rounded"/>
        <label>Receipt/Voucher</label>
        <input type="file" required className="border p-2 my-2 rounded"/>
        <input type="Submit" className="border p-2 my-2 rounded hover:bg-green-800 hover:text-white focus:outline-none font-bold"/>
    </form>
    </div>
)

function TransactionForm() {
    return (
        <div className="grid grid-cols-12 ">
        <div className="col-span-2">
            <SlideMenu />
        </div>
        <div className="col-span-10">
            <Nav />
            <div className="flex flex-wrap flex-shrink justify-center p-4 bg-red-300 w-full h-20 text-xl font-bold">
                    <span className="inline-flex items-center text-white underline px-4 rounded bg-green-800 ">Forms For Monthly Transaction Update !! </span>
            </div>
            <TranscationForms/>
        </div>
    </div>
    )
}

export default TransactionForm
