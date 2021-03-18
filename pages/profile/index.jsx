import React from 'react';
import { Nav } from "@/components/NavBar";
import { SlideMenu } from "@/components/SideBar";
import user from "@/public/assets/user.png";
import { basicInfo } from "@/components/NavBar/config";

const ImageHeader = () => (
    <>
        <div className="grid w-full h-44 relative shadow-lg content-center place-items-center gap-1">
            <img src={user} className="w-24 h-24 rounded-full  border-2 border-red-200" alt="" />
            <div className="flex gap-2 items-center font-medium">
                <label htmlFor="ID">ID:</label>
                <p>01</p>
            </div>
            <div className="flex gap-2 items-center text-md font-semibold">
                {basicInfo.map((info, index) =>
                    <>
                        <label htmlFor="ID">Name:</label>
                        <h1>{info.name}</h1>
                    </>
                )}

            </div>

        </div>
    </>
)
const BasicInfo = () => (
    <>
        <div className="w-full py-1 my-8">
            <header className="mx-16 text-xl font-bold font-serif bg-red-200 py-2 px-16 rounded">Basic Information</header>
            <div className="flex gap-2 items-center text-md font-semibold">
                {basicInfo.map((info, index) =>
                    <div key={index} className="grid lg:grid-cols-3 w-full gap-5 py-1 my-5 mx-24">
                        <div className="grid gap-2">
                            <label htmlFor="name">Name:</label>
                            <h1 className="bg-gray-200 rounded px-3 py-1 mx-2">{info.name}</h1>
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="email">Email:</label>
                            <h1 className="bg-gray-200 rounded px-3 py-1 mx-2">{info.email}</h1>
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="dob">Date of Birth:</label>
                            <h1 className="bg-gray-200 rounded px-3 py-1 mx-2">{info.dob}</h1>
                        </div >
                        <div className="grid gap-2">
                            <label htmlFor="sex">Sex:</label>
                            <h1 className="bg-gray-200 rounded px-3 py-1 mx-2">{info.sex}</h1>
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="father">Father's Name:</label>
                            <h1 className="bg-gray-200 rounded px-3 py-1 mx-2">{info.fatherName}</h1>
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="mother">Mother's Name:</label>
                            <h1 className="bg-gray-200 rounded px-3 py-1 mx-2">{info.motherName}</h1>
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="address">Address:</label>
                            <h1 className="bg-gray-200 rounded px-3 py-1 mx-2">{info.address}</h1>
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="address">Phone:</label>
                            <h1 className="bg-gray-200 rounded px-3 py-1 mx-2">{info.phone}</h1>
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="address">Account Status:</label>
                            <h1 className="bg-gray-200 rounded px-3 py-1 mx-2">N/A</h1>
                        </div>
                    </div>
                )}

            </div>
        </div>
    </>
)

function Profile() {
    return (
        <div className="grid grid-cols-12 ">
            <div className="col-span-2">
                <SlideMenu />
            </div>
            <div className="col-span-10">
                <Nav />
                <div>
                    <ImageHeader />
                    <BasicInfo />
                </div>
            </div>
        </div>
    )
}
export default Profile;
