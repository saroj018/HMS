import React, { useState } from 'react'
import HeadingTypo from '../../components/common/HeadingTypo'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'
import { postFetch } from '../../config/postFetch'

const AddReceptionist = ({heading,flag}) => {

  const[receptionist,setReceptionist]=useState({
    name:'',
    address:'',
    email:'',
    password:'',
    phone:''
  })

  const changeHandler=(e)=>{
    setReceptionist((prv)=>({
      ...prv,
      [e.target.name]:e.target.value
    }))
  }

  const clickHandler=async()=>{
    let data=await postFetch(import.meta.env.VITE_HOST+'/receptionist/addreceptionist',receptionist)
    console.log(data);
  }
  return (
    <div className='w-full max-w-[600px] h-fit mx-auto border-2 border-gray-500 rounded-md p-4 my-auto'>
        <HeadingTypo>{heading}</HeadingTypo>
        <form className='grid grid-cols-2 gap-x-5 gap-y-4'>
                <Input onChange={changeHandler} name={'name'} value={receptionist.name} placeholder={'enter name'} label={'Name'}/>
                <Input onChange={changeHandler} name={'address'} value={receptionist.address} placeholder={'enter address'} label={'Address'}/>
                <Input onChange={changeHandler} name={'phone'} value={receptionist.phone} placeholder={'enter Phone Number'} label={'Phone'}/>
                <Input onChange={changeHandler} name={'email'} value={receptionist.email} placeholder={'enter Email'} label={'Email'}/>
                <Input onChange={changeHandler} name={'password'} value={receptionist.password} placeholder={'enter Password'} label={'Password'}/>
        </form>
                <Button onClick={clickHandler} className={'w-full bg-green-500 text-white'}>{flag=='update'?'Update Receptionist':'Add Receptionist'}</Button>
    </div>
  )
}

export default AddReceptionist