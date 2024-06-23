import React from 'react'

const NumberBox = ({heading,number}) => {
  return (
    <div className='border-2 gap-y-4 bg-green-500 text-white  rounded-md p-3 grow w-full flex flex-col justify-center items-center'>
        <h1 className='text-4xl'>{heading}</h1>
        <h1 className='text-6xl'>{number}</h1>
    </div>
  )
}

export default NumberBox