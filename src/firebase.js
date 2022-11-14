// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-SK5HcLGRL3If50gvPfe4RzoOeM3lh3A",
  authDomain: "limitless-adc29.firebaseapp.com",
  projectId: "limitless-adc29",
  storageBucket: "limitless-adc29.appspot.com",
  messagingSenderId: "391752301803",
  appId: "1:391752301803:web:74135d06566e43f64392ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
