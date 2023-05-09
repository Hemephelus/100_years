import React from 'react'
import {Xanh_Mono} from 'next/font/google'
import Link from 'next/link'

const xanhMono = Xanh_Mono({preload:false, weight:'400'})

const  NavBar = () => {
  return (
    <header className={`flex justify-between px-[5%] py-4 ${xanhMono.className} text-2xl sticky top-0 z-50 bg-[#FAEEE700]`}>
     <Link href={"/"} className='hover:text-[#00000080] hover:underline'>100 YEARS</Link>
     <div className='flex gap-8' >
        <Link href={"/about"} className='hover:text-[#00000080] hover:underline'>About The Project</Link>
        <Link href={"/your-days-left"} className='hover:text-[#00000080] hover:underline'>See Your Days Left</Link>
     </div>
    </header>
  )
}

export default NavBar 