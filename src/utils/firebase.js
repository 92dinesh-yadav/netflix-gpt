// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUR5JJxQMw71mgEjah7sF-vECsK_D2KAQ",
  authDomain: "netflixgpt-b86e1.firebaseapp.com",
  projectId: "netflixgpt-b86e1",
  storageBucket: "netflixgpt-b86e1.appspot.com",
  messagingSenderId: "299714624469",
  appId: "1:299714624469:web:56bb449da3f92235939b5c",
  measurementId: "G-QWRNGL75YY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();