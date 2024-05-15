import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Header() {
  return (
    <div>
      <div  className='flex items-center justify-between p-5 shadow-md'>
        <Image src='/logo.svg' width={100} height={100} 
        className='w-[100px] md:w-[100px]'/>
        <ul className='hidden md:flex gap-14 font-medium text-lg ml-20'>
            <li className='hover:text-primary transition-all duration-300 cursor-pointer'>About Us</li>
            <li className='hover:text-primary transition-all duration-300 cursor-pointer'>Contact Us</li>
            
        </ul>
        <div className='flex gap-2'>
            <Link href='/login' passHref><Button variant="ghost">Login</Button></Link>
            <Button>Get Started</Button>
        </div>
      </div>
    </div>
  )
}
