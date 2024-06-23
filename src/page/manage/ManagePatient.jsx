import React, { useState } from 'react'
import HeadingTypo from '../../components/common/HeadingTypo'
import Button from '../../components/common/Button'
import Popup from 'reactjs-popup'
import AddPatient from '../add/AddPatient'
import { X } from 'lucide-react'
import ConfirmationBox from '../../components/ConfirmationBox'

const customStyle={
    width:'100%',
    'max-width':'650px'
}

const ManagePatient = () => {
    const [open, setOpen] = useState(false)
    const[confirm,setConfirm]=useState(false)
    return (
        <div className='w-full'>
            <HeadingTypo>Manage Patient</HeadingTypo>
            <table className=' w-full  '>
                <thead>
                    <tr className='border-2 border-gray-500 '>
                        <th className='p-5'>Id</th>
                        <th className='p-5'>Patient Name</th>
                        <th className='p-5'>Address</th>
                        <th className='p-5'>Phone</th>
                        <th className='p-5'>Email</th>
                        <th className='p-5'>Admit On</th>
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
                                <td className='text-center p-3'>9876543210</td>
                                <td className='text-center p-3'>abc@gmail.com</td>
                                <td className='text-center p-3'>2020-2-3</td>
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
                    <AddPatient heading='Update Patient' flag={'update'} />
                </div>
            </Popup>
            <ConfirmationBox open={confirm} setConfirm={setConfirm}/>
        </div>
    )
}

export default ManagePatient