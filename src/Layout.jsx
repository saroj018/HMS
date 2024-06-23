import React, { Fragment, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'

const Layout = () => {
  let user=localStorage.getItem('user')
let token=localStorage.getItem('token')
let navigate=useNavigate()
  useEffect(()=>{
  if(!user && !token){
    navigate('/login')
  }
  },[window.location.pathname])
  return (
    <Fragment>
        <Navbar/>
        <div className='flex w-full'>
            <Sidebar/>
            <Outlet/>
        </div>
    </Fragment>
  )
}

export default Layout