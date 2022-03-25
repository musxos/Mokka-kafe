// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSKdYierNrzeAGgLHtm0XeZHI1myibB6s",
  authDomain: "makeqrmenu.firebaseapp.com",
  projectId: "makeqrmenu",
  storageBucket: "makeqrmenu.appspot.com",
  messagingSenderId: "252471776846",
  appId: "1:252471776846:web:7eef5696a7d23429f7151f",
  measurementId: "G-XCKCQ5G9KN",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth();

export { db };
export { auth };
