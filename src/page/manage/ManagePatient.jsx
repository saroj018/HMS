import React, { useEffect, useState } from 'react'
import HeadingTypo from '../../components/common/HeadingTypo'
import Button from '../../components/common/Button'
import Popup from 'reactjs-popup'
import AddPatient from '../add/AddPatient'
import { X } from 'lucide-react'
import ConfirmationBox from '../../components/ConfirmationBox'
import { getFetch } from '../../config/getFetch'

const customStyle = {
    width: '100%',
    'max-width': '650px'
}

const ManagePatient = () => {
    const [open, setOpen] = useState(false)
    const [confirm, setConfirm] = useState(false)
    const [id, setId] = useState()

    const [patientList, setpatientList] = useState([])

    const getAllPatients = async () => {
        let patient = await getFetch(import.meta.env.VITE_HOST + '/patient/getallpatient')
        console.log(patient);
        setpatientList(patient?.data)
    }

    useEffect(() => {
        getAllPatients()
    }, [open,confirm])

    const editHandler = (id) => {
        setOpen(true)
        setId(id)
    }

    const deleteHandler = (id) => {
        setId(id)
        setConfirm(true)
    }
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
                        patientList && patientList?.map((ele, index) => {
                            return <tr key={index} className='border-2 border-gray-500'>
                                <td className='text-center p-3'>{ele._id}</td>
                                <td className='text-center p-3'>{ele.name}</td>
                                <td className='text-center p-3'>{ele.address}</td>
                                <td className='text-center p-3'>{ele.phone}</td>
                                <td className='text-center p-3'>{ele.email}</td>
                                <td className='text-center p-3'>{new Date(ele.admiton).toDateString()}</td>
                                <td className='text-center p-3 flex items-center justify-center gap-x-4'>
                                    <Button onClick={() => editHandler(ele._id)} className={'bg-blue-500 px-4 py-2'}>Edit</Button>
                                    <Button onClick={() => deleteHandler(ele._id)} className={'px-4 py-2 bg-red-500'}>Delete</Button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

            <Popup contentStyle={customStyle} open={open} onClose={() => setOpen(false)}>
                <div className='py-10 relative'>
                    <X onClick={() => setOpen(false)} className='absolute cursor-pointer left-[95%] top-1' />
                    <AddPatient setOpen={setOpen} id={id} heading='Update Patient' flag={'update'} />
                </div>
            </Popup>
            <ConfirmationBox id={id} open={confirm} setConfirm={setConfirm} />
        </div>
    )
}

export default ManagePatient