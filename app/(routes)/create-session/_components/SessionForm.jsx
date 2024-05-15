"use client"
import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input'
import { ChevronLeft } from 'lucide-react'
import { toast } from 'sonner';
import { useRouter } from 'next/navigation'
import LocationOption from '@/app/_utils/LocationOption';
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import { app } from '@/config/FirebaseConfig'


export default function SessionForm({setFormValue}) {
    const [location,setLocation] = useState();
    const [sessionName,setSessionName] = useState();
    const [duration,setDuration] = useState(30);
    const [locationUrl,setLocationUrl] = useState();
//  const db=getFirestore(app);
    const router=useRouter();
    useEffect(()=>{
        setFormValue({
            sessionName:sessionName,
            duration:duration,
            location:location,
            locationUrl:locationUrl
           
        })
    },[sessionName,duration,location,locationUrl])

    
   function onCreateClick() {
         toast('New Session Created!');
         router.push('/dashboard/session-type');
        // const id=Date.now().toString();
        // await setDoc(doc(db,'MeetingEvent',id),{
        //     id:id,
        //     sessionName:sessionName,
        //     duration:duration,
        //     locationUrl:locationUrl,
        //     sessionId:doc(db,'Session',getUser?.username),
        //     createdBy:user?.name
        // })
          
       }
    return (
        <div className='p-8 '>
        <Link href={'/dashboard'}>
          <h2 className='flex gap-2'>
             <ChevronLeft/> Cancel</h2>
             </Link>
         <div className='mt-4'>
             <h2 className='font-bold text-2xl my-4'>Create New Session</h2>
             
         </div>
         <hr className='border-t-2 mb-3 border-gray-300 w-full'></hr>
         <div className='flex flex-col gap-3 my-4'>
             <h2 className='font-bold'>Session Name *</h2>
             <Input placeholder="Name of your Session"
             onChange={(event)=>setSessionName(event.target.value)}
             />
 
             <h2 className='font-bold'>Duration *</h2>
            
             <DropdownMenu>
                 <DropdownMenuTrigger asChild>
                 <Button variant="outline" className="max-w-40">{duration} Min</Button>
                 </DropdownMenuTrigger>
                 <DropdownMenuContent>
                     <DropdownMenuItem onClick={()=>setDuration(15)}>15 Min</DropdownMenuItem>
                     <DropdownMenuItem onClick={()=>setDuration(30)}>30 Min</DropdownMenuItem>
                     <DropdownMenuItem onClick={()=>setDuration(45)}>45 Min</DropdownMenuItem>
                     <DropdownMenuItem onClick={()=>setDuration(60)}>60 Min</DropdownMenuItem>
                 </DropdownMenuContent>
                 </DropdownMenu>
 
             <h2 className='font-bold'>Location *</h2>
             <div className='grid grid-cols-2 gap-3 items-center'>
                 {LocationOption.map((option,index)=>(
                     <div key={index} className={`border flex flex-col
                      justify-center items-center 
                      p-3 rounded-lg cursor-pointer
                      hover:bg-blue-100 hover:border-primary
                      ${location==option.name&&'bg-blue-100 border-primary'}`}
                      onClick={()=>setLocation(option.name)}
                      >
                         <Image src={option.icon} width={30} height={30}
                         alt={option.name}/>
                         <h2>{option.name}</h2>
                     </div>
                 ))}
             </div>
             {location&&<>
             <h2 className='font-bold'>Add {location} Url *</h2>
             <Input placeholder='Add Url'
             onChange={(event)=>setLocationUrl(event.target.value)}
             />
             </>}
             
             
         </div>
 
         <Button className="w-full mt-9"
         disabled={(!sessionName||!duration||!location||!locationUrl)}
         onClick={onCreateClick}>Create</Button>
     </div>
   )
  
}
