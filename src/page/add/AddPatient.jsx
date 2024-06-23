import React, { useContext, useEffect, useState } from 'react'
import HeadingTypo from '../../components/common/HeadingTypo'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'
import { postFetch } from '../../config/postFetch'
import { getFetch } from '../../config/getFetch'
import { useNavigate } from 'react-router-dom'

const AddPatient = ({ heading, flag, id,setOpen }) => {
    const [patient, setPatient] = useState({
        name: '',
        address: '',
        password: '',
        phone: '',
        email: ''
    })
    const navigate=useNavigate()
    const [patientList, setpatientList] = useState([])

    const changeHandler = (e) => {
        setPatient((prv) => ({
            ...prv,
            [e.target.name]: e.target.value
        }))
    }

    const getPatient = async () => {
        if (flag == 'update') {
            let patient = await getFetch(import.meta.env.VITE_HOST + `/patient/getsinglepatient?id=${id}`)
            console.log(patient);
            setpatientList(patient?.data)
        } 
    }

    useEffect(() => {
        getPatient()
    }, [])

    useEffect(() => {
        if (flag == 'update' && patientList) {
            setPatient({
                name: patientList?.name,
                address: patientList?.address,
                password: '',
                phone: patientList?.phone,
                email: patientList?.email
            })
        }
    }, [ flag,patientList])

    const clickHandler = async () => {
        if (flag == 'update') {
            let data = await postFetch(import.meta.env.VITE_HOST + `/patient/updatepatient?id=${id}`, patient)
            console.log(data);
            if(data.success){
                setOpen(false)
                navigate('/managepatient')
                
            }
        } else {
            console.log('dd');
            let data = await postFetch(import.meta.env.VITE_HOST + '/patient/addpatient', patient)
            console.log(data);
        }
    }
    return (
        <div className='w-full max-w-[600px] h-fit mx-auto border-2 border-gray-500 rounded-md p-4 my-auto'>
            <HeadingTypo>{heading}</HeadingTypo>
            <form className='grid grid-cols-2 gap-x-5 gap-y-4'>
                <Input value={patient.name} onChange={changeHandler} name='name' placeholder={'enter name'} label={'Name'} />
                <Input value={patient.address} onChange={changeHandler} name='address' placeholder={'enter address'} label={'Address'} />
                <Input value={patient.phone} onChange={changeHandler} name='phone' placeholder={'enter Phone Number'} label={'Phone'} />
                <Input disabled={flag == 'update' ? true : false} value={patient.email} onChange={changeHandler} name='email' placeholder={'enter Email'} label={'Email'} />
                {!flag && <Input value={patient.password} onChange={changeHandler} name='password' placeholder={'enter Password'} label={'Password'} />}
            </form>
            <Button onClick={clickHandler} className={'w-full bg-green-500 text-white'}>{flag == 'update' ? 'Update Patient' : 'Add Patient'}</Button>
        </div>
    )
}

export default AddPatient