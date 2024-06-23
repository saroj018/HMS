import React from 'react'

const Navbar = () => {
  return (
   <header className='flex justify-between items-center px-8 border-2 shadow-md '>
    <span className='text-4xl'>HMS</span>
    <div className='flex items-center gap-x-2 py-3'>
        <img className='w-[50px] h-[50px] rounded-full' src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="" />
        <p className='text-xl'>John</p>
    </div>
   </header>
  )
}

export default Navbar