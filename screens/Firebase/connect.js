// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALyLTB0onkH_Qfm5Vz38YGVOJSKIL_tZo",
  authDomain: "projectmobile2023-f7374.firebaseapp.com",
  projectId: "projectmobile2023-f7374",
  storageBucket: "projectmobile2023-f7374.appspot.com",
  messagingSenderId: "814891466824",
  appId: "1:814891466824:web:6703160010e385b33d587d",
  measurementId: "G-XC946CK996"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)