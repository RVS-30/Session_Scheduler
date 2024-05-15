import { Input } from '@/components/ui/input'
import React from 'react'

function UserFormInfo({setUserName,setUserEmail}) {
  return (
    <div className='p-4 px-8 flex flex-col gap-3'>
        <h2 className='font-bold text-xl'>Enter Details</h2>
        <div>
            <h2>Name *</h2>
            <Input onChange={(event)=>setUserName(event.target.value)} />
        </div>
        <div>
            <h2>Email *</h2>
            <Input onChange={(event)=>setUserEmail(event.target.value)}/>
        </div>
        
        
    </div>
  )
}

export default UserFormInfo