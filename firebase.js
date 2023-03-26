// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2WTDcQD7G-aydRkNS8kupyQGULA2Wyqo",
  authDomain: "neiteng-diary.firebaseapp.com",
  projectId: "neiteng-diary",
  storageBucket: "neiteng-diary.appspot.com",
  messagingSenderId: "144955445094",
  appId: "1:144955445094:web:eb29fe423d3d144f5202a7",
  measurementId: "G-84YV5510S3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Work only on browser
if(typeof window !== 'undefined'){
  const analytics = getAnalytics(app);
}

export const db = getFirestore();