import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { format } from 'date-fns'
import { CalendarCheck, Clock, LoaderIcon, MapPin, Timer } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import TimeDateSelection from './TimeDateSelection'
import UserFormInfo from './UserFormInfo'
import { collection, doc, getDocs, getFirestore, query, setDoc, where } from 'firebase/firestore'
import { app } from '@/config/FirebaseConfig'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import Plunk from '@plunk/node'



export default function MeetingInfoSelection({eventInfo, sessionInfo}) {
  const [date,setDate]=useState(new Date())
    const [timeSlots,setTimeSlots]=useState();
    const [enableTimeSlot,setEnabledTimeSlot]=useState(false);
    const [selectedTime,setSelectedTime]=useState();
    const [userName,setUserName]=useState();
    const [userEmail,setUserEmail]=useState();
    const [prevBooking,setPrevBooking]=useState([]);
    const [step,setStep]=useState(1);
    
    const router=useRouter();
    useEffect(()=>{
        eventInfo?.duration&&createTimeSlot(eventInfo?.duration)
    },[eventInfo])

        const createTimeSlot=(interval)=>{
        const startTime = 8 * 60; // 8 AM in minutes
        const endTime = 22 * 60; // 10 PM in minutes
        const totalSlots = (endTime - startTime) / interval;
        const slots = Array.from({ length: totalSlots }, (_, i) => {
      const totalMinutes = startTime + i * interval;
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      const formattedHours = hours > 12 ? hours - 12 : hours; // Convert to 12-hour format
      const period = hours >= 12 ? 'PM' : 'AM';
      return `${String(formattedHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${period}`;
    });
 
    setTimeSlots(slots); 
    }

    const handleDateChange=(date)=>{
      setDate(date);
      const day=format(date,'EEEE');
      if(sessionInfo?.daysAvailable?.[day])
      {
        getPrevEventBooking(date)
          setEnabledTimeSlot(true)
      }
      else{
         
          setEnabledTimeSlot(false)
      }
  }

  const handleScheduleEvent=async()=>{

    
const docId=Date.now().toString();
    setLoading(true)
await setDoc(doc(db,'ScheduledSessions',docId),{
    sessionName:sessionInfo.sessionName,
    sessionEmail:sessionInfo.email,
    selectedTime:selectedTime,
    selectedDate:date,
    formatedDate:format(date,'PPP'),
    formatedTimeStamp:format(date,'t'),
    duration:eventInfo.duration,
    locationUrl:eventInfo.locationUrl,
    eventId:eventInfo.id,
    id:docId,
    userName:userName,
    userEmail:userEmail,
    
}).then(resp=>{
    toast('Session Scheduled successfully!');
    
    
})
}
const getPrevEventBooking=async(date_)=>{
  const q=query(collection(db,'ScheduledMeetings'),
  where('selectedDate','==',date_),
  where('eventId','==',eventInfo.id));

  const querySnapshot=await getDocs(q);

  querySnapshot.forEach((doc)=>{
    console.log("--",doc.data());
    setPrevBooking(prev=>[...prev,doc.data()])
  })
}
  return (
    <div className='p-5 py-10 shadow-lg m-5 border-t-8'>
       <Image src='/logo.svg' alt='logo'
       width={100}
       height={100}/>
       <div className='grid grid-cols-1 md:grid-cols-3 mt-5'>
            {/* Meeting Info  */}
            <div className='p-4 border-r'>
                <h2>Session info.{/*{sessionInfo?.sessionName}*/}</h2>
                <h2
                className='font-bold text-3xl'
                >{eventInfo?.sessionName?eventInfo?.sessionName:'Session Name'}</h2>
                <div className='mt-5 flex flex-col gap-4'>
                <h2 className='flex gap-2'><Clock/>{eventInfo?.duration} Min </h2>
                    <h2 className='flex gap-2'><MapPin/>{eventInfo?.locationType} Meeting </h2>
                    <h2 className='flex gap-2'><CalendarCheck/>{format(date,'PPP')}  </h2>
                  {selectedTime&&  <h2 className='flex gap-2'><Timer/>{selectedTime}  </h2>}
                  
                    <Link href={eventInfo?.locationUrl?eventInfo?.locationUrl:'#'}
                    className='text-primary'
                    >{eventInfo?.locationUrl}</Link>
                </div>
            </div>
            {/* Time & Date Selction  */}
            <TimeDateSelection
            date={date}
            enableTimeSlot={enableTimeSlot}
            handleDateChange={handleDateChange}
            setSelectedTime={setSelectedTime}
            timeSlots={timeSlots}
            selectedTime={selectedTime}
            prevBooking={prevBooking}
           />:
           <UserFormInfo
            setUserName={setUserName}
            setUserEmail={setUserEmail}
            
           />
       </div>
       <div className='flex gap-3 justify-end'>
        {step==2&&<Button variant="outline" 
        onClick={()=>setStep(1)}>Back</Button>}
      {step==1? <Button className="mt-10 float-right"
        disabled={!selectedTime||!date}
        onClick={()=>setStep(step+1)}
       >Next
       </Button>:
       <Button disabled={!userEmail||!userName} 
       onClick={handleScheduleEvent}
       > 
       {loading?<LoaderIcon className='animate-spin'/>:'Schedule' }
      </Button>}
       </div>
    </div>
  )
}
