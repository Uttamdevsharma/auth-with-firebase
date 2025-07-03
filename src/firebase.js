// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJzcl4bQimJoxxSKTEHOyguPYn5bqDoxc",
  authDomain: "fir-auth-practice-26f99.firebaseapp.com",
  projectId: "fir-auth-practice-26f99",
  storageBucket: "fir-auth-practice-26f99.firebasestorage.app",
  messagingSenderId: "242165773296",
  appId: "1:242165773296:web:6cea9471bf5f11000d2335",
  measurementId: "G-REESPV1SWP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
