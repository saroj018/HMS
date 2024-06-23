import React from 'react'
import Select from '../components/common/Select'
import HeadingTypo from '../components/common/HeadingTypo'
import Input from '../components/common/Input'
import Option from '../components/common/Option'
import Button from '../components/common/Button'

const BookAppointment = () => {
  return (
    <div className='w-full max-w-[700px] h-fit mx-auto border-2 border-gray-500 rounded-md p-4 my-auto'>
        <HeadingTypo>Book Appointment</HeadingTypo>
        <form className='grid grid-cols-2 items-center gap-x-5 gap-y-4'>
                <Input placeholder={'enter name'} label={'Name'}/>
                <Input placeholder={'enter address'} label={'Address'}/>
                <Input placeholder={'enter Phone Number'} label={'Phone'}/>
                <Input placeholder={'enter Email'} label={'Email'}/>
                <Input placeholder={'enter Blood Group'} label={'Blood Group'}/>
                <Input placeholder={'enter Date'} label={'Date'}/>
                <Input placeholder={'enter Category'} label={'Category'}/>
                <Select label={'Select Doctor'}>
                    <Option defaultSelect value={''}>Select Doctor</Option>
                    <Option value={'demo'}>John Doe</Option>
                    <Option value={'demo'}>John Doe</Option>
                    <Option value={'demo'}>John Doe</Option>
                </Select>
        </form>
                <Button className={'w-full bg-green-500 text-white'}>Book Appointment</Button>
    </div>
  )
}

export default BookAppointment