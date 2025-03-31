// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase-admin/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyB0R_zdzIYYCMsY4xU8XC-J5yaLywpbi_A",
  authDomain: "prepwise-592bf.firebaseapp.com",
  projectId: "prepwise-592bf",
  storageBucket: "prepwise-592bf.firebasestorage.app",
  messagingSenderId: "370532160209",
  appId: "1:370532160209:web:14a6d608b7cb9921d7abf0",
  measurementId: "G-QX0EMP3GNW"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);