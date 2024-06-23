import React, { useState } from 'react'
import HeadingTypo from '../../components/common/HeadingTypo'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'
import Select from '../../components/common/Select'
import Option from '../../components/common/Option'
import { postFetch } from '../../config/postFetch'

const AddDoctor = ({heading,flag}) => {

  const[doctor,setDoctor]=useState({
    name:'',
    email:'',
    password:'',
    time:'',
    department:'',
    category:'',
    address:'',
    qualification:'',
    gender:''
  })

  const changeHandler=(e)=>{
    setDoctor((prv)=>({
      ...prv,
      [e.target.name]:e.target.value
    }))
  }

  const clickHandler=async()=>{
    await postFetch(import.meta.env.VITE_HOST+'/doctor/adddoctor',doctor)
  }
  return (
    <div className='w-full max-w-[700px] h-fit mx-auto border-2 border-gray-500 rounded-md p-4 my-auto'>
        <HeadingTypo>{heading}</HeadingTypo>
        <form className='grid grid-cols-2 gap-x-5 gap-y-4'>
                <Input value={doctor.name} onChange={changeHandler} name={'name'} placeholder={'enter name'} label={'Name'}/>
                <Input value={doctor.email} onChange={changeHandler} name={'email'} placeholder={'enter email'} label={'Email'}/>
                <Input value={doctor.address} onChange={changeHandler} name={'address'} placeholder={'enter address'} label={'Address'}/>
                <Input value={doctor.time} onChange={changeHandler} name={'time'} placeholder={'enter Time'} label={'Time'}/>
                <Input value={doctor.department} onChange={changeHandler} name={'department'} placeholder={'enter Department'} label={'Department'}/>
                <Input value={doctor.qualification} onChange={changeHandler} name={'qualification'} placeholder={'enter Qualification'} label={'Qualification'}/>
                <Input value={doctor.category} onChange={changeHandler} name={'category'} placeholder={'enter category'} label={'Category'}/>
                <Input value={doctor.password} onChange={changeHandler} name={'password'} placeholder={'enter password'} label={'Password'}/>
                <Select onChange={changeHandler} name={'gender'}>
                    <Option defaultSelect value=''>Select Gender</Option>
                    <Option value='male'>Male</Option>
                    <Option value='female'>Male</Option>
                </Select>
        </form>
                <Button onClick={clickHandler} className={'w-full bg-green-500 text-white'}>{flag=='update'?'Update Doctor':'Add Doctor'}</Button>
    </div>
  )
}

export default AddDoctor