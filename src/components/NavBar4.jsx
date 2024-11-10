import React from 'react'
import { useState } from 'react'
const NavBar4 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className='bg-cyan-400 p-5 shadow md:flex md:items-center md:justify-between'>
      <div className='flex justify-between items-center'>
        <span className='text-2xl font-semibold'>
        <i className='bx bxl-tailwind-css h-10 inline cursor-pointer'></i>
          tailwind
        </span>
        <span onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-3xl cursor-pointer mx-2 md:hidden block'>
          <i className={`${isMenuOpen ? "bx bx-x-circle" : "bx bx-menu"}`}></i>
        </span>
      </div>

      <ul className={`md:flex md:items-center z-[-1] md:z-auto md:static 
      absolute bg-cyan-500 md:bg-cyan-400 left-0 md:w-auto w-full md:py-0 py-4 md:pl-0 pl-7 md:opacity-100
    ${isMenuOpen ?  "" : "hidden"} transition ease-in duration-500`}>
        <li className='mx-5 my-6 md:my-0'>
        <a href="#" className='text-xl hover:text-cyan-500 duration-500'>Home</a>
        </li>
        <li className='mx-5 my-6 md:my-0'>
        <a href="#" className='text-xl hover:text-cyan-500 duration-500'>Services</a>
        </li>
        <li className='mx-5 my-6 md:my-0'>
        <a href="#" className='text-xl hover:text-cyan-500 duration-500'>About</a>
        </li>
        <li className='mx-5 my-6 md:my-0'>
        <a href="#" className='text-xl hover:text-cyan-500 duration-500'>Contact Us</a>
        </li>
        <li className='mx-5 my-6 md:my-0'>
        <a href="#" className='text-xl hover:text-cyan-500 duration-500'>Blog</a>
        </li>
        <button className='bg-white text-black  px-6 py-2 mx-4 rounded-xl'>
          Get Started
        </button>
      </ul>
    </nav>
  )
}

export default NavBar4