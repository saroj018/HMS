import React from 'react'
import NumberBox from '../components/NumberBox'

const Dashboard = () => {
    console.log(window.location.pathname);
    return (
        <div className='w-full mt-4 px-3' >
            <div className='flex justify-between gap-x-10'>
                <NumberBox number='10' heading='Total Patient'/>
                <NumberBox number='20' heading='Total Doctor'/>
                <NumberBox number='30' heading='Total Receptionist'/>
            </div>
            <div className=''>
                <h1 className='text-4xl font-bold my-5'>Dashboard</h1>
                <table className=' w-full  '>
                    <thead>
                        <tr className='border-2 border-gray-500 '>
                            <th className='p-5'>Id</th>
                            <th className='p-5'>Patient Name</th>
                            <th className='p-5'>Address</th>
                            <th className='p-5'>Phone</th>
                            <th className='p-5'>Email</th>
                            <th className='p-5'>Admit On</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array(10).fill(null).map((_, index) => {
                                return <tr key={index} className='border-2 border-gray-500'>
                                    <td className='text-center p-3'>3498</td>
                                    <td className='text-center p-3'>John Doe</td>
                                    <td className='text-center p-3'>Kathmandu</td>
                                    <td className='text-center p-3'>9876543210</td>
                                    <td className='text-center p-3'>abc@gmail.com</td>
                                    <td className='text-center p-3'>2020-2-3</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard