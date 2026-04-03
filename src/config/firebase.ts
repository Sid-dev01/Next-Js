// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZEI7KeBwPci41NOHTgSpMZNkYq6PE2Sk",
  authDomain: "learning-firebase-2934d.firebaseapp.com",
  projectId: "learning-firebase-2934d",
  storageBucket: "learning-firebase-2934d.firebasestorage.app",
  messagingSenderId: "200309056764",
  appId: "1:200309056764:web:35d5de7061491dd3482379",
  measurementId: "G-EHY3DRX1F0"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export default app;