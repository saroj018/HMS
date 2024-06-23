import React, { useState } from 'react'
import HeadingTypo from '../../components/common/HeadingTypo'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'
import { postFetch } from '../../config/postFetch'

const AddPatient = ({heading,flag}) => {
    const[patient,setPatient]=useState({
        name:'',
        address:'',
        password:'',
        phone:'',
        email:''
    })

    const changeHandler=(e)=>{
        setPatient((prv)=>({
            ...prv,
            [e.target.name]:e.target.value
        }))
    }

    const clickHandler=async()=>{
        console.log('dd');
        let data=await postFetch(import.meta.env.VITE_HOST+'/patient/addpatient',patient)
        console.log(data);
    }
  return (
    <div className='w-full max-w-[600px] h-fit mx-auto border-2 border-gray-500 rounded-md p-4 my-auto'>
        <HeadingTypo>{heading}</HeadingTypo>
        <form className='grid grid-cols-2 gap-x-5 gap-y-4'>
                <Input value={patient.name} onChange={changeHandler} name='name' placeholder={'enter name'} label={'Name'}/>
                <Input value={patient.address} onChange={changeHandler} name='address' placeholder={'enter address'} label={'Address'}/>
                <Input value={patient.phone} onChange={changeHandler} name='phone' placeholder={'enter Phone Number'} label={'Phone'}/>
                <Input value={patient.email} onChange={changeHandler} name='email' placeholder={'enter Email'} label={'Email'}/>
                <Input value={patient.password} onChange={changeHandler} name='password' placeholder={'enter Password'} label={'Password'}/>
        </form>
                <Button onClick={clickHandler} className={'w-full bg-green-500 text-white'}>{flag=='update'?'Update Patient':'Add Patient'}</Button>
    </div>
  )
}

export default AddPatient