// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMbbIKUlwt8KWurymD6AJp5IRXWB_dalA",
  authDomain: "orgaminder-bc4f1.firebaseapp.com",
  projectId: "orgaminder-bc4f1",
  storageBucket: "orgaminder-bc4f1.appspot.com",
  messagingSenderId: "900106598500",
  appId: "1:900106598500:web:43b13e2210b97de7c80771",
  measurementId: "G-P6XJD2PZD6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export { analytics, auth };
