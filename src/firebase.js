// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2SQlWC7zumXxAs-dG7jlasPtwXnBBiBI",
  authDomain: "youngchaos-firebase.firebaseapp.com",
  projectId: "youngchaos-firebase",
  storageBucket: "youngchaos-firebase.appspot.com",
  messagingSenderId: "390022239738",
  appId: "1:390022239738:web:fefc664adfc4259784c043",
  measurementId: "G-N8LLLJJE68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);