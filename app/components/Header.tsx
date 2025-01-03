"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import {AiOutlineMenu ,AiOutlineClose} from "react-icons/ai"

const Header = () => {
    const[isMenuOpen ,setIsMenuOpen]=useState(false)

     const toggleMenu =()=>{
        setIsMenuOpen(!isMenuOpen)
     }
  return (
    <header>
    <div className='flex justify-around items-center bg-[#000000] h-[100px] text-[24px] font-semibold text-[#FFFFFF]'>
        <h1>Dynamic Blog</h1>
        <nav className='hidden md:flex'>
        <ul className='flex justify-center items-center gap-[30px]'>
            <Link href="/"><li className='hover:text-slate-500 '>Home</li></Link>
            <Link href="/about"><li className='hover:text-slate-500 '>About</li></Link>
            <Link href="/blogs"><li className='hover:text-slate-500 '>Blog</li></Link>
            <Link href="/contact"><li className='hover:text-slate-500 '>contact</li></Link>
        </ul></nav>
        
      
   

<div className='md:hidden' onClick={toggleMenu}>
{isMenuOpen ?<AiOutlineClose size={30}/>:
<AiOutlineMenu size={30}/>

}</div></div>

{/* mobile navbar */}
{
isMenuOpen && (
<nav className='md:hidden flex flex-col items-center gap-4 bg-black text-white'>
<Link href="/" className='hover:text-blue-500' onClick={toggleMenu}>Home</Link>
<Link href="/about"  className='hover:text-blue-500' onClick={toggleMenu}>About</Link>
<Link href="/blogs" className='hover:text-blue-500' onClick={toggleMenu}>Blog</Link>
<Link href="/contact"  className='hover:text-blue-500' onClick={toggleMenu}>Contact</Link>
</nav>
)
}

</header>
  )
}

export default Header
