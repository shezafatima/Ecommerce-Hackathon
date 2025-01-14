import { cn } from '@/lib/utils'
import React from 'react'
interface Props{
    children:React.ReactNode
    className?:string
}
function Title({children,className}:Props) {
  return (
    <h2 className={cn('font-semibold text-2xl',className)}>{children}</h2>
  )
}

export default Title