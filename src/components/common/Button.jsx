import React from 'react'
import { twMerge } from 'tailwind-merge'

const Button = ({children,className,onClick}) => {
  return (
    <button onClick={onClick} className={twMerge('cursor-pointer py-3 mt-6 text-xl text-white rounded-md',className)}>{children}</button>
  )
}

export default Button