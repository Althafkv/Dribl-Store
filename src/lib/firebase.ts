import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFtlRE1d8ES8rR6M3M5NGmoSSmj--3hmE",
  authDomain: "zorzi-b83f5.firebaseapp.com",
  projectId: "zorzi-b83f5",
  storageBucket: "zorzi-b83f5.firebasestorage.app",
  messagingSenderId: "399586004450",
  appId: "1:399586004450:web:194694df61f81d4852bdbb",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
