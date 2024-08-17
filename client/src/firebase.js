// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-15d98.firebaseapp.com",
  projectId: "mern-blog-15d98",
  storageBucket: "mern-blog-15d98.appspot.com",
  messagingSenderId: "60161990995",
  appId: "1:60161990995:web:9ec351af7983a4aaed01a6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

