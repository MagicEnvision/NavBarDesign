import React from 'react'

const Navbar1 = () => {
    return (
        <div className='w-full border h-20 bg-red-50 border-b-slate-950 flex items-center justify-between '>
            <h1 className='text-4xl font-bold font-serif px-2 bg-red-400 text-transparent bg-clip-text inline-block'><a href="#">Example</a>
                <span className='text-black'>+</span>
            </h1>
           <div className="flex px-2 font-semibold items-center text-center">
           <a className="p-1 px-2 hover:border-red-400 border bg-red-300" href="#">Home</a>
            <a className="p-1 px-2 hover:border-red-400 border bg-red-300">Pricing</a>
            <a className="p-1 px-2 hover:border-red-400 border bg-red-300" href="#">Testimonials</a>
           </div>




        </div>
    )
}

export default Navbar1