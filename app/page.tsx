// 'use client';

import {Xanh_Mono} from 'next/font/google'
import {Raleway} from 'next/font/google'
import { generateData,calculateHundredthBirthday, calculateYearToDay } from '@/lib/utils'
// import React,{ useState } from 'react'

const xanhMono = Xanh_Mono({preload:false, weight:'400'})
const raleway = Raleway({subsets:['latin']})



export default function Home() {
  const days= generateData()
  const dateOfBirth = '1999-10-24';
  
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
      <div className={`grid grid-cols-[150px,1fr,150px] gap-8 h-screen pt-8 w-[80%]  ${raleway.className}`}>
        <div className={`bg-[#00000017] flex flex-col justify-start h-fit p-4 rounded-lg items-center gap-4  ${xanhMono.className}`}>
    <h1>Land Mark</h1>
    <div className='flex flex-col gap-2 items-center'>
      <a href={`#${calculateYearToDay(dateOfBirth,0)}`}>Year 0</a>
      <a href={`#${calculateYearToDay(dateOfBirth,1)}`}>Year 1</a>
      <a href={`#${calculateYearToDay(dateOfBirth,10)}`}>Year 10</a>
      <a href={`#${calculateYearToDay(dateOfBirth,13)}`}>Year 13</a>
      <a href={`#${calculateYearToDay(dateOfBirth,16)}`}>Year 16</a>
      <a href={`#${calculateYearToDay(dateOfBirth,18)}`}>Year 18</a>
      <a href={`#${calculateYearToDay(dateOfBirth,21)}`}>Year 21</a>
      <a href={`#${calculateYearToDay(dateOfBirth,30)}`}>Year 30</a>
      <a href={`#${calculateYearToDay(dateOfBirth,40)}`}>Year 40</a>
      <a href={`#${calculateYearToDay(dateOfBirth,50)}`}>Year 50</a>
      <a href={`#${calculateYearToDay(dateOfBirth,60)}`}>Year 60</a>
      <a href={`#${calculateYearToDay(dateOfBirth,70)}`}>Year 70</a>
      <a href={`#${calculateYearToDay(dateOfBirth,80)}`}>Year 80</a>
      <a href={`#${calculateYearToDay(dateOfBirth,90)}`}>Year 90</a>
      <a href={`#${calculateYearToDay(dateOfBirth,100)}`}>Year 100</a>
    </div>
        </div>
        <div className='grid grid-cols-fluid gap-1  no-scroll p-2'> 
        {/* <div className='grid grid-container--fill gap-1  overflow-y-auto  no-scroll p-2'>  */}
        {/* */}
          {
            days?.map((day,index) => (
              
              // <div className='grid-element' key={index} id={d} title={d}></div>
              <div className='h-4 w-4 border border-[#8b8a8a] bg-[#CDCDCD] rounded hover:bg-[#b6b5b5] group relative cursor-pointer ' key={index} id={day} title={day}>
                <div className='scale-0 group-hover:scale-100 duration-500 w-[200px] group-hover:z-[100] absolute -top-32 bg-[#f1f1f1] p-2 rounded-lg border-2 border-solid border-[#696969] flex flex-col gap-2 '>
                  <p># Day {day}</p>
                  <p>Date: {calculateHundredthBirthday(dateOfBirth,day)}</p>
                  <p>You just turned 21, how did it feel, what their any celebration?</p>
                </div>
              </div>
              
              ))
            }
     
        </div>
       <div>
       <h1>Years</h1>
          
       </div>
      </div>
    </main>
  )
}
