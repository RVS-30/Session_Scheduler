import React from 'react'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className='flex flex-col justify-center items-center my-20'>
      <div className='text-center max-w-4xl mb-10'>
        <h2 className='font-bold text-[60px] text-slate-700'>
            Easy Scheduling ahead
        </h2>
        <h2 className='text-xl mt-5 text-slate-500'>Simplify Scheduling, Share Availability, 
            Book Success! Welcome to SESSION SCHEDULER, 
            Where Time Meets Collaboration</h2>
      </div> 
      <hr className='border-t-2 mb-3 border-gray-300 w-1/2'></hr>
      <p className='text-lg'>
        New to our App? | <Link href='/signup' className='text-primary font-semibold hover:underline'>Sign up</Link>
      </p>
      
    </div>
  )
}
