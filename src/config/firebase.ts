import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDfa3EwKWFSFxlbnCIJu0cqv2lZDDV7nMs",
    authDomain: "collegeconnector-675fd.firebaseapp.com",
    projectId: "collegeconnector-675fd",
    storageBucket: "collegeconnector-675fd.firebasestorage.app",
    messagingSenderId: "962749565945",
    appId: "1:962749565945:web:9eeb0da7a625a786c58b28",
    measurementId: "G-HFH4ZQB1P4"
  };

// Initialize Firebase only if no apps exist
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;