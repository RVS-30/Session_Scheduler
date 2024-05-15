// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "session-scheduler-8f9b4.firebaseapp.com",
  projectId: "session-scheduler-8f9b4",
  storageBucket: "session-scheduler-8f9b4.appspot.com",
  messagingSenderId: "821853353381",
  appId: "1:821853353381:web:6e5849bc21ec6ef8a9e44c",
  measurementId: "G-T5HW3RGX12"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
