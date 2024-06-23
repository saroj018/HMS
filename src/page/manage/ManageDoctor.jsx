import React, { useState } from 'react'
import HeadingTypo from '../../components/common/HeadingTypo'
import Button from '../../components/common/Button'
import Popup from 'reactjs-popup'
import AddPatient from '../add/AddPatient'
import { X } from 'lucide-react'
import ConfirmationBox from '../../components/ConfirmationBox'
import AddDoctor from '../add/AddDoctor'

const customStyle={
    width:'100%',
    'max-width':'650px'
}

const ManageDoctor = () => {
    const [open, setOpen] = useState(false)
    const[confirm,setConfirm]=useState(false)
    return (
        <div className='w-full'>
            <HeadingTypo>Manage Doctor</HeadingTypo>
            <table className=' w-full  '>
                <thead>
                    <tr className='border-2 border-gray-500 '>
                        <th className='p-5'>Id</th>
                        <th className='p-5'>Doctor Name</th>
                        <th className='p-5'>Address</th>
                        <th className='p-5'>Time</th>
                        <th className='p-5'>DOB</th>
                        <th className='p-5'>Gender</th>
                        <th className='p-5'>Department</th>
                        <th className='p-5'>Qualification</th>
                        <th className='p-5'>NMC</th>
                        <th className='p-5'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array(10).fill(null).map((_, index) => {
                            return <tr key={index} className='border-2 border-gray-500'>
                                <td className='text-center p-3'>3498</td>
                                <td className='text-center p-3'>John Doe</td>
                                <td className='text-center p-3'>Kathmandu</td>
                                <td className='text-center p-3'>04:03 PM</td>
                                <td className='text-center p-3'>2023-02-03</td>
                                <td className='text-center p-3'>Male</td>
                                <td className='text-center p-3'>OPD</td>
                                <td className='text-center p-3'>MBBS</td>
                                <td className='text-center p-3'>Demo</td>
                                <td className='text-center p-3 flex items-center justify-center gap-x-4'>
                                    <Button onClick={() => setOpen(true)} className={'bg-blue-500 px-4 py-2'}>Edit</Button>
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

export default ManageDoctor