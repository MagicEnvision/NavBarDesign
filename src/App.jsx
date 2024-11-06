import React from 'react'
import Navbar1 from './components/Navbar1'
import NavBar2 from './components/NavBar2'


const App = () => {
  
  return (
    <>
       <style>
        {`
          html, body {
            height: 100%;
            margin: 0;
            background-color: black;
            color: white;
          }
        `}
      </style>
      < div className='bg-black h-full'>
        <Navbar1 />
      </div>
      <NavBar2 />

    </>

  )
  
}

export default App