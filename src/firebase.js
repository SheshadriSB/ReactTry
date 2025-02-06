import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut 
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration (Ensure your environment variables are set in a .env file)
const firebaseConfig = {
    apiKey: "AIzaSyAqfryqAf4UONF8BFJYjIXj75zj1hXO7CY",
    authDomain: "empportal-129dd.firebaseapp.com",
    projectId: "empportal-129dd",
    storageBucket: "empportal-129dd.firebasestorage.app",
    messagingSenderId: "633396008009",
    appId: "1:633396008009:web:8508aa4f8655329e651b98",
    measurementId: "G-XXTP21TXFT"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Authentication functions
const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
const register = (email, password) => createUserWithEmailAndPassword(auth, email, password);
const logout = () => signOut(auth);

// Auth state change listener
const onAuthStateChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export { auth, db, login, register, logout, onAuthStateChange };
