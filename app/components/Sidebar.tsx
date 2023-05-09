import React from 'react'
import {Xanh_Mono} from 'next/font/google'
import {
    calculateYearToDay,
  } from "@/lib/utils";

const xanhMono = Xanh_Mono({preload:false, weight:'400'})

const Sidebar = () => {
    const dateOfBirth = "1999-10-24";
    let LandMarks = {

    }
  return (
    <>
    <div
          className={` flex flex-col justify-start p-4   items-end gap-4 h-screen sticky top-32  ${xanhMono.className} border-r-[1px] border-dashed border-[#FF709280]`}
        >
          {/* <h1>Land Mark</h1> */}
          <div className="flex flex-col gap-2 text-right ">
            <a
              href={`#${calculateYearToDay(dateOfBirth, 0)}`}
              className="hover:text-[#519E8A] text-[#519e8ab8] hover:scale-105"
            >
              Year 0
            </a>
            <a
              href={`#${calculateYearToDay(dateOfBirth, 1)}`}
              className="hover:text-[#519E8A] text-[#519E8Ab8] hover:scale-105"
            >
              Year 1
            </a>
            <a
              href={`#${calculateYearToDay(dateOfBirth, 10)}`}
              className="hover:text-[#519E8A] text-[#519E8Ab8] hover:scale-105"
            >
              Year 10
            </a>
            <a
              href={`#${calculateYearToDay(dateOfBirth, 13)}`}
              className="hover:text-[#519E8A] text-[#519E8Ab8] hover:scale-105"
            >
              Year 13
            </a>
            <a
              href={`#${calculateYearToDay(dateOfBirth, 16)}`}
              className="hover:text-[#519E8A] text-[#519E8Ab8] hover:scale-105"
            >
              Year 16
            </a>
            <a
              href={`#${calculateYearToDay(dateOfBirth, 18)}`}
              className="hover:text-[#519E8A] text-[#519E8Ab8] hover:scale-105"
            >
              Year 18
            </a>
            <a
              href={`#${calculateYearToDay(dateOfBirth, 21)}`}
              className="hover:text-[#519E8A] text-[#519E8Ab8] hover:scale-105"
            >
              Year 21
            </a>
            <a
              href={`#${calculateYearToDay(dateOfBirth, 30)}`}
              className="hover:text-[#519E8A] text-[#519E8Ab8] hover:scale-105"
            >
              Year 30
            </a>
            <a
              href={`#${calculateYearToDay(dateOfBirth, 40)}`}
              className="hover:text-[#519E8A] text-[#519E8Ab8] hover:scale-105"
            >
              Year 40
            </a>
            <a
              href={`#${calculateYearToDay(dateOfBirth, 50)}`}
              className="hover:text-[#519E8A] text-[#519E8Ab8] hover:scale-105"
            >
              Year 50
            </a>
            <a
              href={`#${calculateYearToDay(dateOfBirth, 60)}`}
              className="hover:text-[#519E8A] text-[#519E8Ab8] hover:scale-105"
            >
              Year 60
            </a>
            <a
              href={`#${calculateYearToDay(dateOfBirth, 70)}`}
              className="hover:text-[#519E8A] text-[#519E8Ab8] hover:scale-105"
            >
              Year 70
            </a>
            <a
              href={`#${calculateYearToDay(dateOfBirth, 80)}`}
              className="hover:text-[#519E8A] text-[#519E8Ab8] hover:scale-105"
            >
              Year 80
            </a>
            <a
              href={`#${calculateYearToDay(dateOfBirth, 90)}`}
              className="hover:text-[#519E8A] text-[#519E8Ab8] hover:scale-105"
            >
              Year 90
            </a>
            <a
              href={`#${calculateYearToDay(dateOfBirth, 100)}`}
              className="hover:text-[#519E8A] text-[#519E8Ab8] hover:scale-105"
            >
              Year 100
            </a>
          </div>
        </div>
    </>
  )
}

export default Sidebar