// 'use client';

import { Xanh_Mono } from "next/font/google";
import { Raleway } from "next/font/google";
import {
  generateData,
  calculateHundredthBirthday,
} from "@/lib/utils";
import Sidebar from "./components/Sidebar";

// import React,{ useState } from 'react'

const xanhMono = Xanh_Mono({ preload: false, weight: "400" });
const raleway = Raleway({ subsets: ["latin"] });

export default function Home() {
  const days = generateData();
  const dateOfBirth = "1999-10-24";

  // const [data, setData] = useState(generateData())
  return (
    <main className="flex min-h-screen flex-col items-center gap-12">
      <div className={`${xanhMono.className} text-3xl text-center`}>
        <p>
          Assuming I live for a 100 years,
          <br />
          These are the number days I have left on earth
        </p>
      </div>
      <div
        className={`grid grid-cols-[150px,1fr,150px] gap-8 pt-8 w-[80%]  ${raleway.className}`}
      >

        <Sidebar/>
        
        <div className="grid grid-cols-fluid gap-1  no-scroll p-2">
          {/* <div className='grid grid-container--fill gap-1  overflow-y-auto  no-scroll p-2'>  */}
          {/* */}
          {days?.map((day, index) => (
            // <div className='grid-element' key={index} id={d} title={d}></div>
            <div
              className={`h-4 w-4 border border-[#8b8a8a] ${
                day === "365" ? `bg-[#519E8A]` : `bg-[#CDCDCD]`
              }  rounded hover:bg-[#b6b5b5] group relative cursor-pointer scroll-mt-96 `}
              key={index}
              id={day}
              title={day}
            >
              <div className="scale-0 group-hover:scale-100 duration-500 delay-200 w-[200px] group-hover:z-[100] absolute -top-32 bg-[#f1f1f1] p-2 rounded-lg border-2 border-solid border-[#696969] flex flex-col gap-2 ">
                <p># Day {day}</p>
                <p>Date: {calculateHundredthBirthday(dateOfBirth, day)}</p>
                <p>
                  You just turned 21, how did it feel, what their any
                  celebration?
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="h-screen sticky top-32">
          <h1>Years</h1>
        </div> */}
      </div>
    </main> 
  );
}
