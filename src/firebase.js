// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyAqfryqAf4UONF8BFJYjIXj75zj1hXO7CY",
  authDomain: "empportal-129dd.firebaseapp.com",
  projectId: "empportal-129dd",
  storageBucket: "empportal-129dd.firebasestorage.app",
  messagingSenderId: "633396008009",
  appId: "1:633396008009:web:8508aa4f8655329e651b98",
  measurementId: "G-XXTP21TXFT"

};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
