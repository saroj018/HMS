import React, { Fragment, useState } from 'react'
import { sideBar } from '../constant/sidebar'
import { Link, useParams } from 'react-router-dom'

const Sidebar = () => {
    const [param, setParam] = useState('/')
    return (
        <aside className='w-full h-[100vh] max-h-[fit] max-w-[250px] flex flex-col  border-2 border-gray-300 rounded-md sticky left-0 top-0 mr-6 '>
            {
                sideBar.map((ele, index) => {
                    return <Fragment key={index}>
                    {
                       ele.accessBy?.includes(localStorage.getItem('role')) &&
                        <Link onClick={() => setParam(ele.name)} className={`py-4 px-2 text-xl hover:bg-gray-100 hover:text-black cursor-pointer rounded-md ${ele.url == window.location.pathname ? 'bg-blue-300 text-white' : ''}`} to={ele.url}><span >{ele.name}</span></Link>}
                    </Fragment>
                })
            }
        </aside>
    )
}

export default Sidebar