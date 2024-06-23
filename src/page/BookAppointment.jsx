import React, { useEffect, useState } from 'react'
import Select from '../components/common/Select'
import HeadingTypo from '../components/common/HeadingTypo'
import Input from '../components/common/Input'
import Option from '../components/common/Option'
import Button from '../components/common/Button'
import { postFetch } from '../config/postFetch'
import { getFetch } from '../config/getFetch'

const BookAppointment = () => {

  const[appointment,setAppointment]=useState({
   
    blood:'',
    date:'',
    category:'',
    doctor:''
  })
  const[doctor,setDoctor]=useState([])

  const changeHandler=(e)=>{
    setAppointment((prv)=>({
      ...prv,
      [e.target.name]:e.target.value
    }))
  }

  let getDoctorList=async()=>{
    let item=await getFetch(import.meta.env.VITE_HOST+'/doctor/getalldoctor')
    setDoctor(item.data)
  }

  useEffect(()=>{
    getDoctorList()
  },[])

  const clickHandler=async()=>{
    let data=await postFetch(import.meta.env.VITE_HOST+'/appointment/bookappointment',appointment)
  }
  return (
    <div className='w-full max-w-[700px] h-fit mx-auto border-2 border-gray-500 rounded-md p-4 my-auto'>
        <HeadingTypo>Book Appointment</HeadingTypo>
        <form className='grid grid-cols-2 items-center gap-x-5 gap-y-4'>
               
                <Input value={appointment.blood} onChange={changeHandler} name={'blood'} placeholder={'enter Blood Group'} label={'Blood Group'}/>
                <Input value={appointment.date} onChange={changeHandler} type='date' name={'date'} placeholder={'enter Date'} label={'Date'}/>
                <Input value={appointment.category} onChange={changeHandler} name={'category'} placeholder={'enter Category'} label={'Category'}/>
                <Select onChange={changeHandler} name={'doctor'} label={'Select Doctor'}>
                    <Option defaultSelect value={''}>Select Doctor</Option>
                    {
                      doctor.map((ele,index)=>{
                       return <Option key={index} defaultSelect value={ele._id}>{ele.name}</Option>
                        
                      })
                    }
                </Select>
        </form>
                <Button onClick={clickHandler} className={'w-full bg-green-500 text-white'}>Book Appointment</Button>
    </div>
  )
}

export default BookAppointment