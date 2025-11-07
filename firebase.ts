// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCim5YfZq9Y5_aazRFF5Q2I9KIyZuHUhRI",
  authDomain: "smpn-19mataram.firebaseapp.com",
  databaseURL: "https://smpn-19mataram-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smpn-19mataram",
  storageBucket: "smpn-19mataram.firebasestorage.app",
  messagingSenderId: "477417210481",
  appId: "1:477417210481:web:ac6c07d9e987f8befcd1d0",
  measurementId: "G-RDQW58090E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);