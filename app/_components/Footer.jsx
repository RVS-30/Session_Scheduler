import React from 'react'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className='fixed bottom-0 w-full bg-blue-900 backdrop-blur-md'>
      <div className='container mx-auto py-3 flex flex-col items-center text-white'>
        
        <div className='flex justify-center mb-3'>
          <a href="https://instagram.com/rajveex" target="_blank" rel="noopener noreferrer">
            <Image src='/Ig.png' alt='Instagram' width={28} height={28} className='mx-2 drop-shadow-lg' />
          </a>
          <a href="https://linkedin.com/in/rajveer30" target="_blank" rel="noopener noreferrer">
            <Image src='/linkedin.png' alt='LinkedIn' width={28} height={28} className='mx-2 drop-shadow-lg' />
          </a>
          <a href="https://github.com/RVS-30" target="_blank" rel="noopener noreferrer">
            <Image src='/github.png' alt='GitHub' width={28} height={28} className='mx-2 drop-shadow-lg' />
          </a>
          
        </div>
        <p className='text-white text-xs'>Copyright © {currentYear} RVS-30. All rights reserved</p>
      </div>
    </div>
  )
}
