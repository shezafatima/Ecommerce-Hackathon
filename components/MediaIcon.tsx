import React from 'react'
import Image from 'next/image'

function MediaIcon() {
  return (
    <div className='flex items-center justify-center gap-4'>
        <Image
        src="/facebook.png"
        alt='facebook'
        width={1000}
        height={1000}
className='w-4 h-4'
        />
         <Image
        src="/insta1.png"
        alt='facebook'
        width={1000}
        height={1000}
className='w-4 h-4'
        />
         <Image
        src="/twitter.png"
        alt='facebook'
        width={1000}
        height={1000}
      className='w-4 h-4'  
        />

    </div>
  )
}

export default MediaIcon