import React, { useState } from 'react'
import Select from '../components/common/Select'
import HeadingTypo from '../components/common/HeadingTypo'
import Input from '../components/common/Input'
import Option from '../components/common/Option'
import Button from '../components/common/Button'
import { postFetch } from '../config/postFetch'

const BookAppointment = () => {

  const[appointment,setAppointment]=useState({
   
    blood:'',
    date:'',
    category:'',
    doctor:''
  })

  const changeHandler=(e)=>{
    setAppointment((prv)=>({
      ...prv,
      [e.target.name]:e.target.value
    }))
  }

  const clickHandler=async()=>{
    let data=await postFetch(import.meta.env.VITE_HOST+'/appointment/bookappointment',appointment)
  }
  return (
    <div className='w-full max-w-[700px] h-fit mx-auto border-2 border-gray-500 rounded-md p-4 my-auto'>
        <HeadingTypo>Book Appointment</HeadingTypo>
        <form className='grid grid-cols-2 items-center gap-x-5 gap-y-4'>
               
                <Input value={appointment.blood} onChange={changeHandler} name={'blood'} placeholder={'enter Blood Group'} label={'Blood Group'}/>
                <Input value={appointment.date} onChange={changeHandler} name={'date'} placeholder={'enter Date'} label={'Date'}/>
                <Input value={appointment.category} onChange={changeHandler} name={'category'} placeholder={'enter Category'} label={'Category'}/>
                <Select onChange={changeHandler} name={'doctor'} label={'Select Doctor'}>
                    <Option defaultSelect value={''}>Select Doctor</Option>
                    <Option value={11}>John Doe</Option>
                </Select>
        </form>
                <Button onClick={clickHandler} className={'w-full bg-green-500 text-white'}>Book Appointment</Button>
    </div>
  )
}

export default BookAppointment