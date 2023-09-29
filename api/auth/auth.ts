// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAymmgIRoscG_zE10npM3qklfcCoHRahq4",
  authDomain: "tap-card-d1cde.firebaseapp.com",
  projectId: "tap-card-d1cde",
  storageBucket: "tap-card-d1cde.appspot.com",
  messagingSenderId: "601487805349",
  appId: "1:601487805349:web:cf755329a4542a7da3b64c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)