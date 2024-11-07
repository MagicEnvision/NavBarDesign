import React from 'react'

const NavBar3 = () => {
    return (
        <nav>
            <div className="bg-slate-800 px-5 sm:px-[5rem]  w-full h-12 flex items-center justify-between mr-10">
                <div className='flex h-full items-center text-center'>
                    <a href="#"
                        className='text-white justify-center font-semibold tracking-widest pb-1 text-2xl sm:text-4xl '><h1>BBC</h1>
                    </a>
                    <div className=' h-12 w-1 bg-gray-700 mx-2'>
                    </div>

                    <button className='text-white text-center items-center flex'><i className='bx bxs-user-circle text-white pr-1'></i>Sign Up</button>
                </div>
                <div>
                    <ul className='hidden items-center h-12 xl:flex text-white font-medium'>
                        <li className='hover:bg-sky-500 px-3 h-full flex items-center'>Sports</li>
                        <li className='hover:bg-sky-500 px-3 h-full flex items-center'>Entertainment</li>
                        <li className='hover:bg-sky-500 px-3 h-full flex items-center'>Technology</li>
                        <li className='hover:bg-sky-500 px-3 h-full flex items-center'>Local</li>
                        <li className='hover:bg-sky-500 px-3 h-full flex items-center'>World-Wide</li>
                    </ul>
                </div>
                <div className=" hidden md:flex gap-3 items-center">
                    <i className='bx bx-search text-white font-semibold'></i>
                    <input type="text" placeholder='Search' className=' rounded-lg px-2' />
                </div>
            </div>
        </nav>





        //     <nav>
        //   <div className="bg-slate-800 px-6 py-2 w-full h-12 flex items-center justify-center">
        //     <a href="#" className="text-white font-semibold tracking-widest text-4xl">
        //       <h1>BBC</h1>
        //     </a>
        //   </div>
        // </nav>

    )
}

export default NavBar3