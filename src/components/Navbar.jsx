import React, { useState } from 'react'
import Button from './common/Button'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const[open,setOpen]=useState(false)
  const navigate=useNavigate()

  const logOutHandler=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    navigate('/login')
  }
  return (
   <header className='flex justify-between items-center px-8 border-2 shadow-md relative '>
    <span className='text-4xl'>HMS</span>
    <div onClick={()=>setOpen(!open)} className='flex items-center gap-x-2 py-3 cursor-pointer'>
        <img className='w-[50px] h-[50px] rounded-full border-2 border-black' src="https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png" alt="" />
        <p className='text-xl'>{localStorage.getItem('role')?.toUpperCase()}</p>
    </div>
    {open&&<div className='w-full max-w-[200px] rounded-md border-2 border-gray-500 p-3 z-10 absolute left-[88%] top-[95%] bg-white'>
      <Button onClick={logOutHandler} className={'bg-red-500 text-white w-full'}>Log Out</Button>
    </div>}
   </header>
  )
}

export default Navbar