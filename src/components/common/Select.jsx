import React from 'react'

const Select = ({children,label}) => {
  return (
    <div className='flex flex-col gap-y-3 '>
        <label htmlFor="sel">{label}</label>
        <select id='sel' className='border-2 border-gray-500 h-[50px] rounded-md'>{children}</select>
    </div>
  )
}

export default Select