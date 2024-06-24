import React, { useEffect, useState } from 'react'
import NumberBox from '../components/NumberBox'
import { getFetch } from '../config/getFetch'

const Dashboard = () => {

    const[patientList,setpatientList]=useState([])
    const[receptionistList,setreceptionistList]=useState([])
    const[doctorList,setdoctorList]=useState([])
    
    const getAllPatients = async () => {
        let patient = await getFetch(import.meta.env.VITE_HOST + '/patient/getallpatient')
        console.log(patient);
        setpatientList(patient?.data)
    }
    const getAllDoctor = async () => {
        let doctor = await getFetch(import.meta.env.VITE_HOST + '/doctor/getalldoctor')
        console.log(doctor);
        setdoctorList(doctor?.data)
    }
    const getAllReceptionist = async () => {
        let receptionist = await getFetch(import.meta.env.VITE_HOST + '/receptionist/getallreceptionist')
        console.log(receptionist);
        setreceptionistList(receptionist?.data)
    }

    useEffect(()=>{
        getAllPatients()
        getAllReceptionist()
        getAllDoctor()
    },[])
    return (
        <div className='w-full mt-4 px-3' >
            <div className='flex justify-between gap-x-10'>
                <NumberBox number={patientList?.length} heading='Total Patient'/>
                <NumberBox number={doctorList?.length} heading='Total Doctor'/>
                <NumberBox number={receptionistList?.length} heading='Total Receptionist'/>
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
                            patientList&&patientList?.map((ele, index) => {
                                return <tr key={index} className='border-2 border-gray-500'>
                                    <td className='text-center p-3'>{ele._id}</td>
                                    <td className='text-center p-3'>{ele.name}</td>
                                    <td className='text-center p-3'>{ele.address}</td>
                                    <td className='text-center p-3'>{ele.phone}</td>
                                    <td className='text-center p-3'>{ele.email}</td>
                                    <td className='text-center p-3'>{new Date(ele.admiton).toDateString()}</td>
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