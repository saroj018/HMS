import React, { Fragment } from 'react'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

const Layout = () => {
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