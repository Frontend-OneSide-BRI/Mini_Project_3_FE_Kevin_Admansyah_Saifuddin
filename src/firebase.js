// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdkK25jomvDJVVvtTou0GSRKmZfWOzvgg",
  authDomain: "netvin-be976.firebaseapp.com",
  projectId: "netvin-be976",
  storageBucket: "netvin-be976.appspot.com",
  messagingSenderId: "354973302029",
  appId: "1:354973302029:web:c94252882077b9b730c444",
  measurementId: "G-XRNV06JM92"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)


