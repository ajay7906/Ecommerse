// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9nx5N0-mvunYCWR6z0ms4KDZi-WxtiNU",
  authDomain: "ecommerse79.firebaseapp.com",
  projectId: "ecommerse79",
  storageBucket: "ecommerse79.appspot.com",
  messagingSenderId: "739218955168",
  appId: "1:739218955168:web:2038c4574a3c6ff781a2c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;