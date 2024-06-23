import React, { useEffect, useState } from 'react'
import HeadingTypo from '../components/common/HeadingTypo'
import Button from '../components/common/Button'
import AddDoctor from './add/AddDoctor'
import ConfirmationBox from '../components/ConfirmationBox'
import Popup from 'reactjs-popup'
import { X } from 'lucide-react'
import { getFetch } from '../config/getFetch'

const customStyle={
    width:'100%',
    'max-width':'650px'
}

const ViewAppointment = () => {
    const [open, setOpen] = useState(false)
    const[confirm,setConfirm]=useState(false)
    const [appointmentList, setappointmentList] = useState([])

    const getAllAppointment = async () => {
        let appointment = await getFetch(import.meta.env.VITE_HOST + '/appointment/getallappointment')
        console.log(appointment);
        setappointmentList(appointment.data)
    }

    useEffect(() => {
        getAllAppointment()
    }, [])
    return (
        <div className='w-full'>
            <HeadingTypo>Manage Appointment</HeadingTypo>
            <table className=' w-full  '>
                <thead>
                    <tr className='border-2 border-gray-500 '>
                        <th className='p-5'>Id</th>
                        <th className='p-5'>Patient Name</th>
                        <th className='p-5'>Address</th>
                        <th className='p-5'>DOB</th>
                        <th className='p-5'>Phone</th>
                        <th className='p-5'>Date</th>
                        <th className='p-5'>Email</th>
                        <th className='p-5'>Category</th>
                        <th className='p-5'>Blood Group</th>
                        <th className='p-5'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointmentList&&appointmentList?.map((ele, index) => {
                            return <tr key={index} className='border-2 border-gray-500'>
                                <td className='text-center p-3'>{ele._id}</td>
                                <td className='text-center p-3'>John Doe</td>
                                <td className='text-center p-3'>Kathmandu</td>
                                <td className='text-center p-3'>2023-02-03</td>
                                <td className='text-center p-3'>9876543210</td>
                                <td className='text-center p-3'>2024-02-03</td>
                                <td className='text-center p-3'>abc@gmail.com</td>
                                <td className='text-center p-3'>OPD</td>
                                <td className='text-center p-3'>AB-</td>
                                <td className='text-center p-3 flex items-center justify-center gap-x-4'>
                                    <Button onClick={()=>setConfirm(true)} className={'px-4 py-2 bg-red-500'}>Delete</Button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

            <Popup contentStyle={customStyle} open={open} onClose={()=>setOpen(false)}>
                <div className='py-10 relative'>
                    <X  onClick={()=>setOpen(false)} className='absolute cursor-pointer left-[95%] top-1' />
                    <AddDoctor heading='Update Doctor' flag={'update'} />
                </div>
            </Popup>
            <ConfirmationBox open={confirm} setConfirm={setConfirm}/>
        </div>
    )
}

export default ViewAppointment