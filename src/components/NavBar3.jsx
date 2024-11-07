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

                    <button className='text-white text-center items-center flex g'><i className='bx bxs-user-circle text-white pr-1'></i>Sign Up</button>
                </div>
                <div>
                    <ul className='flex items-center justify-center text-white font-medium gap-2'>
                        <li>Sports</li>
                        <li>Entertainment</li>
                        <li>Technology</li>
                        <li>Local</li>
                        <li>World-Wide</li>
                    </ul>
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