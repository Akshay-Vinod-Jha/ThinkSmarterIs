// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHE2zsycSgUjbKU1Te5vjR-bBW70ttp4I",
  authDomain: "thinksmarter-67ca8.firebaseapp.com",
  projectId: "thinksmarter-67ca8",
  storageBucket: "thinksmarter-67ca8.appspot.com",
  messagingSenderId: "610602523519",
  appId: "1:610602523519:web:d94d1af8c34ebbdddf184a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
