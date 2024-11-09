import React from 'react'

const NavBar4 = () => {
  return (
    <nav className='bg-cyan-400 p-5 shadow md:flex md:items-center md:justify-between'>
      <div>
        <span className='text-2xl font-semibold'>
        <i className='bx bxl-tailwind-css h-10 inline cursor-pointer'></i>
          tailwind
        </span>
      </div>

      <ul className='md:flex md:items-center'>
        <li>
        <a href="#" className='text-xl hover:text-cyan-500 duration-500'>Home</a>
        </li>
        <li className='mx-5'>
        <a href="#" className='text-xl hover:text-cyan-500 duration-500'>Services</a>
        </li>
        <li className='mx-5'>
        <a href="#" className='text-xl hover:text-cyan-500 duration-500'>About</a>
        </li>
        <li className='mx-5'>
        <a href="#" className='text-xl hover:text-cyan-500 duration-500'>Contact Us</a>
        </li>
        <li className='mx-5'>
        <a href="#" className='text-xl hover:text-cyan-500 duration-500'>Blog</a>
        </li>
        <button className='bg-white text-black  px-6 py-2 mx-4 hover:border-cyan-900 '>
          Get Started
        </button>
      </ul>
    </nav>
  )
}

export default NavBar4