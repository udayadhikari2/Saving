import React from "react";
import Head from 'next/head';
// import Layout from "@/components/Layout";
import { Nav } from "@/components/NavBar";
import { SlideMenu } from "@/components/SideBar";
import { Status, Graphs } from "@/features/DashboardHome";

const Home = () => {
  return (
    <div>
      <Head>
        <title>APP SAVING</title>
        <link rel="stylesheet" href="favicon.ico" />
      </Head>
      <div className="grid grid-cols-12 ">
        <div className="col-span-2">
          <SlideMenu />
        </div>
        <div className="col-span-10">
          <Nav />
          <div>
            <Status />
          </div>
          <hr className="mx-10" />
          <Graphs />
        </div> 
      </div>
    </div>
  )
}
export default Home;