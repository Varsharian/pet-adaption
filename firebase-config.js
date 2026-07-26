// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS1ONYkiCi-17FCPfZpjsXA2Nn_csdx7Q",
  authDomain: "pet-adoption-ad74b.firebaseapp.com",
  projectId: "pet-adoption-ad74b",
  storageBucket: "pet-adoption-ad74b.firebasestorage.app",
  messagingSenderId: "73451343038",
  appId: "1:73451343038:web:8c86cf944277fabbd822ef",
  measurementId: "G-J27W9XPS0T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export the initialized services
export { app, analytics, auth, db, storage };
