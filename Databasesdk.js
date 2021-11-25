// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZlX3T9ryR6oQDRJtkpteYS5bVJpp88z0",
  authDomain: "socially-1df04.firebaseapp.com",
  projectId: "socially-1df04",
  storageBucket: "socially-1df04.appspot.com",
  messagingSenderId: "408212621806",
  appId: "1:408212621806:web:5ae3d315e144c86a5766ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  var db = firebase.firestore();