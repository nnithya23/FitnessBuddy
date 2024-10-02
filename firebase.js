// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD95ydVR7Y2ybk4M-ZOEXBX0XfhTTbPbVw",
  authDomain: "fitnessbuddy-93d8f.firebaseapp.com",
  projectId: "fitnessbuddy-93d8f",
  storageBucket: "fitnessbuddy-93d8f.appspot.com",
  messagingSenderId: "903544480417",
  appId: "1:903544480417:web:4935db242487ec42ad86e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = firebase.firestore();