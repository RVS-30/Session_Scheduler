"use client"
import React from 'react'
import Image from 'next/image'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Header() {
  
  const router = useRouter();

  async function handleLogout(){
    try {
      const response = await axios.get('/api/users/logout');
            
      if (response.status === 200) {
          router.push('/');
      }
  } catch (error) {
      console.log(error);
  }
  }
  
  return (
    <div>
      <div  className='flex items-center justify-between p-5 shadow-md'>
        
        <div className='hidden md:flex gap-4 font-medium text-lg float-start text-center'>
            Welcome! to Session Scheduler
            
        </div>
        <div className='flex gap-2'>
            <Button variant="destructive" onClick = {handleLogout}>Logout</Button>
            
        </div>
      </div>
    </div>
  )
}
