// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANi8mOWSiaCrKBBXNRWjXAYxMeQT4YHUQ",
    authDomain: "appbase145.firebaseapp.com",
    projectId: "appbase145",
    storageBucket: "appbase145.appspot.com",
    messagingSenderId: "599184105705",
    appId: "1:599184105705:web:eb3a0e99c4e98e504c1078"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

