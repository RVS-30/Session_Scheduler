import { Input } from '@/components/ui/input'

import React from 'react'
import SessionList from './_components/SessionList'
export default function SessionType() {
  return (
    <div className='p-5'>
      <div className='flex flex-col gap-5'>
        <h2 className='font-bold text-3xl'>Session Type</h2>
        
        <hr></hr>
      </div>
      <SessionList />

    </div>
  )
}
