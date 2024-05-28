// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUlLS8QDAaU0JYdhfhukN0ZcpLlKo-Zjs",
  authDomain: "pelihara-279ad.firebaseapp.com",
  projectId: "pelihara-279ad",
  storageBucket: "pelihara-279ad.appspot.com",
  messagingSenderId: "38444169887",
  appId: "1:38444169887:web:069e8aabceac8a99f300aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
