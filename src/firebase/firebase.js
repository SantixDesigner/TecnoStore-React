import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHWtUBTuTexnlxXrCrtZza-75NqaWGeAc",
  authDomain: "tecnostore-react.firebaseapp.com",
  projectId: "tecnostore-react",
  storageBucket: "tecnostore-react.appspot.com",
  messagingSenderId: "704285204225",
  appId: "1:704285204225:web:8bd3df8f427ce9d08c0500",
  measurementId: "G-MSZ49T34HG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);