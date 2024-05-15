"use client"
import React, { useEffect, useState } from 'react'
import MeetingInfoSelection from '../_components/MeetingInfoSelection';
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { app } from '@/config/FirebaseConfig';

function SharedMeetingEvent({params}) {
    const db=getFirestore(app);
    const [sessionInfo,setSessionInfo]=useState();
    const [eventInfo,setEventInfo]=useState();
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        params&&MeetingInfoSelection();
    },[params])

   
     // Used to get session Info and Event Details for Give Login User/Session Owner
     
    const getMeetingInfo=async()=>{
        // setLoading(true)
        // const q=query(collection(db,'Session'),where('sessionName','==',params.session));
        // const docSnap=await getDocs(q);
        // docSnap.forEach((doc)=>{
        //     setSessionInfo(doc.data())
        // });
       
        // const docRef=doc(db,'MeetingEvent',params?.meetingEventId);
        // const result=await getDoc(docRef);
        // setEventInfo(result.data());

        // setLoading(false)

    }

  return (
    <div>
        <MeetingInfoSelection eventInfo={eventInfo}
        sessionInfo={sessionInfo} />
    </div>
  )
}

export default SharedMeetingEvent
