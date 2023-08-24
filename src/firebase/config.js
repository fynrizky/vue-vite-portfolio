import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; //getDocs, addDoc dll. firebase v9

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7e_Gmmr50ypYbmW-AuLMeX7vbVrqX_Sw",
  authDomain: "contact-fynrizky.firebaseapp.com",
  projectId: "contact-fynrizky",
  storageBucket: "contact-fynrizky.appspot.com",
  messagingSenderId: "639406744784",
  appId: "1:639406744784:web:ea7b0a41def8a723ec6ad5",
  measurementId: "G-XHLV56MG7G"
};



initializeApp(firebaseConfig);
const db = getFirestore();

export default db;