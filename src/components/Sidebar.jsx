import React, { Fragment, useState } from 'react'
import { sideBar } from '../constant/sidebar'
import { Link, useParams } from 'react-router-dom'

const Sidebar = () => {
    const [param, setParam] = useState('Dashboard')
    return (
        <aside className='w-full max-w-[250px] flex flex-col  border-2 border-gray-300 rounded-md '>
            {
                sideBar.map((ele, index) => {
                    return <Link onClick={() => setParam(ele.name)} className={`py-4 px-2 text-xl hover:bg-gray-500 hover:text-white cursor-pointer rounded-md ${ele.url == window.location.pathname ? 'bg-gray-500 text-white' : ''}`} to={ele.url}><span key={index}>{ele.name}</span></Link>
                })
            }
        </aside>
    )
}

export default Sidebar