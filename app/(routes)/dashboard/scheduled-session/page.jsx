"use client"
import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ScheduledSessionList from './_components/ScheduledSessionList'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import getUser from '@/app/_GetUser/page'
import { app } from '@/config/FirebaseConfig'
import { format } from 'date-fns'

function ScheduledMeeting() {

    // const db=getFirestore(app);
    const [sessionList,setSessionList]=useState([]);
    // useEffect(()=>{
    //     getUser&&getScheduledSessions();
    // },[getUser])
    
    const getScheduledSessions=async()=>{
        // setSessionList([])
        // const q=query(collection(db,'ScheduledMeetings'),
        // where('sessionEmail','==',getUser.username));
        // const querySnapshot=await getDocs(q);

        // querySnapshot.forEach(doc=>{
        //     console.log(doc.data());
        //     setSessionList(prev=>[...prev,doc.data()])
        // })

    }

   
    const filterSessionList=(type)=>{
        if(type=='upcoming')
        {
            return sessionList.filter(item=>item.formatedTimeStamp>=format(new Date(),'t'));
        }
        else{
            return sessionList.filter(item=>item.formatedTimeStamp<format(new Date(),'t'));

        }
    }

  return (
    <div className='p-10'>
        <h2 className='font-bold text-2xl'>Scheduled Sessions</h2>
        <hr className='my-5'></hr>
        <Tabs defaultValue="upcoming" className="w-[400px]">
        <TabsList>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="expired">Expired</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
            <ScheduledSessionList
            sessionList={filterSessionList('upcoming')}
            /> </TabsContent>
        <TabsContent value="expired">
        <ScheduledSessionList
            sessionList={filterSessionList('expired')}
            /> 
        </TabsContent>
        </Tabs>

    </div>
  )
}

export default ScheduledMeeting
