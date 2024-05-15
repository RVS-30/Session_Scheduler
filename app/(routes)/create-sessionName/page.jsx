"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { app } from '@/config/FirebaseConfig'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'sonner'
import getUser from '@/app/_GetUser/page'

function CreateSessionName() {
    const [sessionMainName,setSessionName]=useState();


    // const db = getFirestore(app);
    const router=useRouter();

   
    //   On Create Session Button On Click to Create session and Save on Firebase
    
    const onCreateSession=async()=>{
    //     console.log("btn Click",sessionMainName);
    //     await setDoc(doc(db,'Session',getUser.username),{
    //         sessionMainName:sessionMainName.replace(" ","_"),
    //         username:getUser.username,
    //         Name:getUser.name
    //     }).then(resp=>{
    //         console.log("Document Saved");
    //         toast('New Session Name Created!');
    //         router.replace('/dashboard');
    //     })

    }
return (
    <div className='p-14 items-center flex flex-col gap-20 my-10'>
        <Image src='/logo.svg' width={200} height={200}/>
        <div className='flex flex-col items-center gap-4 max-w-3xl'>
            <h2 className='text-4xl font-bold'>What should we call your sessions?</h2>
            <p className='text-slate-500'>You can always change this later from settings</p>
            <div className='w-full'>
                <label className='text-slate-400'>Company Name</label>
                <Input placeholder="Ex. ABC Company" 
                className="mt-2"
                onChange={(event)=>setSessionName(event.target.value)}
                />
            </div>
            <Button className="w-full"
            disabled={!sessionMainName}
            onClick={onCreateSession}
            >Create Session Name</Button>
        </div>
    </div>
  )
}

export default CreateSessionName