// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk9hUuoLk2IBEnuVDxJVzneUTMN40mgB0",
  authDomain: "sustpc-df5f9.firebaseapp.com",
  projectId: "sustpc-df5f9",
  storageBucket: "sustpc-df5f9.appspot.com",
  messagingSenderId: "705946952799",
  appId: "1:705946952799:web:2dbacee2b936b1fedfa7ea",
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const db = getFirestore()
