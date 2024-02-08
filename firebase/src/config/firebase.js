// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtCinjaFvKNcPjUHweNaAQ72Sf7AAXqjw",
  authDomain: "fir-project-e1488.firebaseapp.com",
  projectId: "fir-project-e1488",
  storageBucket: "fir-project-e1488.appspot.com",
  messagingSenderId: "79149616208",
  appId: "1:79149616208:web:027bbab4066f3be4289555",
  measurementId: "G-C2HV7KE3CQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();