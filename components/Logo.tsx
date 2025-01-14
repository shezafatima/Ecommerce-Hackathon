import { cn } from '../lib/utils';
import Link from 'next/link'
import React from 'react'
interface Props {
  children:React.ReactNode;
  className?:string

} 
function Logo({children,className}:Props) {
    return (
      <Link href={'/'}>
      <h1 className={cn('text-[34px] text-[#0D0E43] font-semibold',className)}>
        {children}</h1></Link>
    )
  }
  
  export default Logo