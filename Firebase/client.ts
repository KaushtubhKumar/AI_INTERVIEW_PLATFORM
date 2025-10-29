// / Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getApps } from "firebase-admin/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk5EpDgEt5WXvwterA5AMpKK2Jt9GMFmo",
  authDomain: "superset-f899a.firebaseapp.com",
  projectId: "superset-f899a",
  storageBucket: "superset-f899a.firebasestorage.app",
  messagingSenderId: "832766935851",
  appId: "1:832766935851:web:73277335bc234d4fa5bb6e",
  measurementId: "G-0YJKB2HLNX"
};

// Initialize Firebase
const app =!getApps.length? initializeApp(firebaseConfig):getApp()
// const analytics = getAnalytics(app);

export const auth= getAuth(app);
export const db= getFirestore(app);
