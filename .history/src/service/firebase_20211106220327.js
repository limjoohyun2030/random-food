// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP,
  authDomain: process.env.REACT_APP,
  databaseURL: process.env.REACT_APP,
  projectId: process.env.REACT_APP,
  appId: process.env.REACT_APP,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
