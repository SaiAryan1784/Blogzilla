// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import getAuth from Firebase Auth

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPlK2Uk8mxxTfLA3AnFOj8_C-j4FqXmx8",
  authDomain: "blogzilla-8a740.firebaseapp.com",
  projectId: "blogzilla-8a740",
  storageBucket: "blogzilla-8a740.appspot.com",
  messagingSenderId: "1061798540246",
  appId: "1:1061798540246:web:0a6c2edeb954670efaaa77",
  measurementId: "G-SG0DB96T3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app); // Initialize auth with getAuth

// Now you can use the auth object for authentication functionalities
