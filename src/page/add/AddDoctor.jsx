import React, { useEffect, useState } from 'react'
import HeadingTypo from '../../components/common/HeadingTypo'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'
import Select from '../../components/common/Select'
import Option from '../../components/common/Option'
import { postFetch } from '../../config/postFetch'
import { getFetch } from '../../config/getFetch'

const AddDoctor = ({heading,flag,id,setOpen}) => {

  const[doctor,setDoctor]=useState({
    name:'',
    email:'',
    password:'',
    shift:'',
    department:'',
    category:'',
    address:'',
    qualification:'',
    gender:''
  })
  const[doctorList,setDoctorList]=useState([])

  const changeHandler=(e)=>{
    console.log(e.target.value);
    setDoctor((prv)=>({
      ...prv,
      [e.target.name]:e.target.value
    }))
  }

  const getDoctor = async () => {
    if (flag == 'update') {
        let doctor = await getFetch(import.meta.env.VITE_HOST + `/doctor/getsingledoctor?id=${id}`)
        console.log(doctor);
        setDoctorList(doctor?.data)
    } 
}

useEffect(() => {
    getDoctor()
}, [])

  useEffect(() => {
    if (flag == 'update' && doctorList) {
        setDoctor({
            name: doctorList?.name,
            address: doctorList?.address,
            password: '',
            phone: doctorList?.phone,
            email: doctorList?.email,
            gender: doctorList?.gender,
            qualification: doctorList?.qualification,
            category: doctorList?.category,
            shift: doctorList?.shift,
            department: doctorList?.department,
        })
    }
}, [ flag,doctorList])

  const clickHandler=async()=>{
    if(flag=='update'){
      let data = await postFetch(import.meta.env.VITE_HOST + `/doctor/updatedoctor?id=${id}`, doctor)
            console.log(data);
            if(data.success){
                setOpen(false)
                navigate('/managedoctor')
                
            }
    }else{

      await postFetch(import.meta.env.VITE_HOST+'/doctor/adddoctor',doctor)
    }
  }
  return (
    <div className='w-full max-w-[700px] h-fit mx-auto border-2 border-gray-500 rounded-md p-4 my-auto'>
        <HeadingTypo>{heading}</HeadingTypo>
        <form className='grid grid-cols-2 gap-x-5 gap-y-4'>
                <Input value={doctor.name} onChange={changeHandler} name={'name'} placeholder={'enter name'} label={'Name'}/>
                <Input disabled={flag == 'update' ? true : false} value={doctor.email} onChange={changeHandler} name={'email'} placeholder={'enter email'} label={'Email'}/>
                <Input value={doctor.address} onChange={changeHandler} name={'address'} placeholder={'enter address'} label={'Address'}/>
                <Input value={doctor.shift} onChange={changeHandler} name={'shift'} placeholder={'enter shift'} label={'Shift'}/>
                <Input value={doctor.department} onChange={changeHandler} name={'department'} placeholder={'enter Department'} label={'Department'}/>
                <Input value={doctor.qualification} onChange={changeHandler} name={'qualification'} placeholder={'enter Qualification'} label={'Qualification'}/>
                <Input value={doctor.category} onChange={changeHandler} name={'category'} placeholder={'enter category'} label={'Category'}/>
                {!flag&&<Input value={doctor.password} onChange={changeHandler} name={'password'} placeholder={'enter password'} label={'Password'}/>}
                <Select onChange={changeHandler} value={doctor.gender} name={'gender'}>
                    <Option defaultSelect value=''>Select Gender</Option>
                    <Option value='male'>Male</Option>
                    <Option value='female'>Female</Option>
                </Select>
        </form>
                <Button onClick={clickHandler} className={'w-full bg-green-500 text-white'}>{flag=='update'?'Update Doctor':'Add Doctor'}</Button>
    </div>
  )
}

export default AddDoctor