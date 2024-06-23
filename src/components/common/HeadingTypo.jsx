import React from 'react'
import { twMerge } from 'tailwind-merge'

const HeadingTypo = ({children,className}) => {
  return <h1 className={twMerge('text-4xl mb-5 font-semibold',className)}>{children}</h1>
}

export default HeadingTypo