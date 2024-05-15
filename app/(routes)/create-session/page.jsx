"use client"
import React, { useState } from 'react'
import SessionForm from './_components/sessionForm'
import PreviewSessions from './_components/PreviewSessions';

export default function CreateSession() {
  const [formValue, setFormValue] = useState();
    return (
    <div className='grid grid-cols-1 md:grid-cols-3'>
        {/* Meeting Form */}
        <div className='shadow-md border h-screen'>
            <SessionForm setFormValue={(v) => setFormValue(v)}/>
        </div>
        {/* PReview */}
        <div className='md:col-span-2'>
         <PreviewSessions formValue={formValue}/>
        </div>
      
    </div>
  )
}
