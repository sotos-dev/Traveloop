// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWwnxtDVRkJfZizQak_vPOcD5BFHN6tYI",
  authDomain: "traveloop-c8526.firebaseapp.com",
  projectId: "traveloop-c8526",
  storageBucket: "traveloop-c8526.appspot.com",
  messagingSenderId: "718430524821",
  appId: "1:718430524821:web:28f9a5b941cbe9fc83129c",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
