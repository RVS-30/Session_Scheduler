"use client"

import { getFirestore,doc, getDoc } from "firebase/firestore"
import { app } from '@/config/FirebaseConfig'
import React from 'react'
import SessionType from "./session-type/page"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import getUser from "@/app/_GetUser/page"


export default async function Dashboard() {

//   const [loading, setLoading] = useState(true);
//   const router = useRouter();  


  // useEffect(() => {
  //   getUser&&isSessionRegistered();
  // }, [getUser])
    
  
  // // const db = getFirestore(app);
  
  // async function isSessionRegistered() {
  //   const docRef = doc(db, "Session", getUser.username );
  //   const docSnap = await getDoc(docRef);
    
  //   if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data());
  //     setLoading(false);
  //   } else {
  //     // docSnap.data() will be undefined in this case
  //     console.log("No such document!");
  //     setLoading(false);
  //      router.replace('/create-sessionName);
  //   }
  // }
  // if(loading){
  //   return <h2>Loading...</h2>
  // }
  return (
    <div>
      <SessionType />
    </div>
  )
}
