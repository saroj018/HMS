import React, { useEffect, useState } from 'react'
import HeadingTypo from '../../components/common/HeadingTypo'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'
import { postFetch } from '../../config/postFetch'
import { getFetch } from '../../config/getFetch'
import { useNavigate } from 'react-router-dom'

const AddReceptionist = ({ heading, flag, id,setOpen }) => {

  const [receptionist, setReceptionist] = useState({
    name: '',
    address: '',
    email: '',
    password: '',
    phone: ''
  })
  const [receptionistList, setReceptionistList] = useState([])
  const navigate=useNavigate()

  const changeHandler = (e) => {
    setReceptionist((prv) => ({
      ...prv,
      [e.target.name]: e.target.value
    }))
  }


  const getReceptionist = async () => {
    if (flag == 'update') {
      let receptionist = await getFetch(import.meta.env.VITE_HOST + `/receptionist/getsinglereceptionist?id=${id}`)
      console.log(receptionist);
      setReceptionistList(receptionist?.data)
    }
  }

  useEffect(() => {
    getReceptionist()
  }, [])

  useEffect(() => {
    if (flag == 'update' && receptionistList) {
      setReceptionist({
        name: receptionistList?.name,
        address: receptionistList?.address,
        password: '',
        phone: receptionistList?.phone,
        email: receptionistList?.email,

      })
    }
  }, [flag, receptionistList])

  const clickHandler = async () => {
    if (flag == 'update') {
      let data = await postFetch(import.meta.env.VITE_HOST + `/receptionist/updatereceptionist?id=${id}`, receptionist)
      console.log(data);
      if (data.success) {
        setOpen(false)
        navigate('/managereceptionist')

      }
    } else {

      await postFetch(import.meta.env.VITE_HOST + '/receptionist/addreceptionist', receptionist)
    }
  }


  return (
    <div className='w-full max-w-[600px] h-fit mx-auto border-2 border-gray-500 rounded-md p-4 my-auto'>
      <HeadingTypo>{heading}</HeadingTypo>
      <form className='grid grid-cols-2 gap-x-5 gap-y-4'>
        <Input onChange={changeHandler} name={'name'} value={receptionist.name} placeholder={'enter name'} label={'Name'} />
        <Input onChange={changeHandler} name={'address'} value={receptionist.address} placeholder={'enter address'} label={'Address'} />
        <Input onChange={changeHandler} name={'phone'} value={receptionist.phone} placeholder={'enter Phone Number'} label={'Phone'} />
        <Input disabled={flag == 'update' ? true : false} onChange={changeHandler} name={'email'} value={receptionist.email} placeholder={'enter Email'} label={'Email'} />
        {!flag&&<Input onChange={changeHandler} name={'password'} value={receptionist.password} placeholder={'enter Password'} label={'Password'} />}
      </form>
      <Button onClick={clickHandler} className={'w-full bg-green-500 text-white'}>{flag == 'update' ? 'Update Receptionist' : 'Add Receptionist'}</Button>
    </div>
  )
}

export default AddReceptionist