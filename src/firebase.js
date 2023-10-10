import firebase  from "firebase/app";
import 'firebase/firestore' ;

const firebaseConfig = {
  apiKey: "AIzaSyATjOWHmtpRj-lS34JCnXdG2j3jAxVPAkE",
  authDomain: "hooksblog-484a7.firebaseapp.com",
  projectId: "hooksblog-484a7",
  storageBucket: "hooksblog-484a7.appspot.com",
  messagingSenderId: "542272561453",
  appId: "1:542272561453:web:14275b19581138df76b3a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = firebase.firestore();