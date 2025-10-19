// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkgPYNKirRLXWtUBSaWdiBK1ygNssyhek",
  authDomain: "dragon-news-37713.firebaseapp.com",
  projectId: "dragon-news-37713",
  storageBucket: "dragon-news-37713.firebasestorage.app",
  messagingSenderId: "340437912397",
  appId: "1:340437912397:web:8bb8af7ba3864374508504",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
