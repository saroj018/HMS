import React from 'react'

const Input = ({label,placeholder,name,onChange,value,type='text'}) => {
  return (
    <div className='flex flex-col gap-y-2'>
        <label htmlFor="inp" className='text-xl'>{label}</label>
        <input  onChange={onChange} value={value} name={name} id='inp' className='h-[50px] border-2 border-gray-500 rounded-md px-2' type={type} placeholder={placeholder} />
    </div>
  )
}

export default Input