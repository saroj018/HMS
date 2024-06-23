import React from 'react'
import HeadingTypo from '../../components/common/HeadingTypo'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'

const AddReceptionist = ({heading,flag}) => {
  return (
    <div className='w-full max-w-[600px] h-fit mx-auto border-2 border-gray-500 rounded-md p-4 my-auto'>
        <HeadingTypo>{heading}</HeadingTypo>
        <form className='grid grid-cols-2 gap-x-5 gap-y-4'>
                <Input placeholder={'enter name'} label={'Name'}/>
                <Input placeholder={'enter address'} label={'Address'}/>
                <Input placeholder={'enter Phone Number'} label={'Phone'}/>
                <Input placeholder={'enter Email'} label={'Email'}/>
        </form>
                <Button className={'w-full bg-green-500 text-white'}>{flag=='update'?'Update Receptionist':'Add Receptionist'}</Button>
    </div>
  )
}

export default AddReceptionist