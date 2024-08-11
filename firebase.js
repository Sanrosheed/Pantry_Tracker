// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyBnBvnNDvT-LDBEE1oRRihez7gq8RSEY",
  authDomain: "pantry-tracker-dadfd.firebaseapp.com",
  projectId: "pantry-tracker-dadfd",
  storageBucket: "pantry-tracker-dadfd.appspot.com",
  messagingSenderId: "22880453878",
  appId: "1:22880453878:web:ad49178ef7392ff0e058d7",
  measurementId: "G-QBMNK2N6T4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
