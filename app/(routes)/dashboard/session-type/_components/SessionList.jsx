"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { app } from '@/config/FirebaseConfig'
import { getFirestore, collection, query, where, getDocs, orderBy, deleteDoc, doc, getDoc } from 'firebase/firestore'
import { Clock, Copy, MapPin, Pen, Settings, Trash } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import getUser from '@/app/_GetUser/page';
  
export default function SessionList() {
    // const db = getFirestore(app);
   
    const [sessionInfo,setSessionInfo]=useState();
    const [sessionList,setSessionList]=useState([]);
        // useEffect(() => {
        //     getUser && getSessionList();
        //     getUser&& SessionInfo();
        // }, [getUser])
    const getSessionList = async () => {
    //     setSessionList([]);
    //     const q = query(collection(db, "MeetingEvent"),
    //         where("createdBy", "==", getUser?.name),
    //         orderBy('id','desc'));

    //     const querySnapshot = await getDocs(q);
    //     querySnapshot.forEach((doc) => {
    //         console.log(doc.id, " => ", doc.data());
    //         setSessionList(prevEvent=>[...prevEvent,doc.data()])
    //     });
    }

    const SessionInfo=async()=>{
    //     const docRef=doc(db,'Session',getUser.username);
    //     const docSnap=await getDoc(docRef);
    //     setSessionInfo(docSnap.data());
    }

    const onDeleteMeetingEvent=async(event)=>{
    //   await deleteDoc(doc(db, "MeetingEvent", event?.id)).then(resp=>{
    //     toast('Meeting Event Deleted!');
    //     getSessionList();
    //   })
    }

    const onCopyClickHandler=(event)=>{
    //     const meetingEventUrl=process.env.NEXT_PUBLIC_BASE_URL+'/'+sessionInfo.sessionName+'/'+event.id
    //     navigator.clipboard.writeText(meetingEventUrl);
    //     toast('Copied to Clicpboard')
    }
    return (
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 
        lg:grid-cols-3 gap-7'>
           {/* {sessionList.length>0?sessionList?.map((event,index)=>( */}
                <div className='border shadow-md 
                 rounded-lg p-5 flex flex-col gap-3'>*This is fetched from Firebase database*
                    <div className='flex justify-end'>
                        <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                        <Settings className='cursor-pointer'/>

                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          
                            <DropdownMenuItem className="flex gap-2"> <Pen/> Edit</DropdownMenuItem>
                            <DropdownMenuItem className="flex gap-2"
                            onClick={(event)=>onDeleteMeetingEvent(event)}
                            > <Trash/> Delete</DropdownMenuItem>
                         
                        </DropdownMenuContent>
                        </DropdownMenu>

                    </div>
                    <h2 className="font-medium text-xl">
                        /Event name/{/*{event?.sessionName}*/}</h2> 
                    <div className='flex justify-between'>
                    <h2 className='flex gap-2 text-gray-500'><Clock/> duration{/* {event.duration} */} Min </h2>
                    <h2 className='flex gap-2 text-gray-500'><MapPin/> location{/* {event.locationType} */}Min </h2>
                    
                    </div>
                    <hr></hr>
                    <div className='flex justify-between'>
                    <h2 className='flex gap-2 text-sm text-primary 
                    items-center cursor-pointer'
                    onClick={(event)=>{
                        onCopyClickHandler(event)
                       
                    }}>
                    <Copy className='h-4 w-4'/> Copy Link </h2>
                    <Button variant="outline" 
                    className="rounded-full text-primary border-primary ">Share</Button>
                    </div>
                </div>
            {/* ))
                 : <h2>Loading...</h2>
         }  */}
        </div>
    )
}

