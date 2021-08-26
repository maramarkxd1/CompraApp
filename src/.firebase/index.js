import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBs_2ewSTVzaWFD8_lLmebfJNfbdUnc_7o",
  authDomain: "primerproyecto-8a8a9.firebaseapp.com",
  projectId: "primerproyecto-8a8a9",
  storageBucket: "primerproyecto-8a8a9.appspot.com",
  messagingSenderId: "481722977158",
  appId: "1:481722977158:web:f2d77056e4beec5996ba07"
};

const app = initializeApp(firebaseConfig);
export const db =  getFirestore();
