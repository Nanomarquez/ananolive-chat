import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBhK_yonZuLvC0l99J7ae_JvDg6XZ94Aeg",
  authDomain: "chat-ananolive.firebaseapp.com",
  projectId: "chat-ananolive",
  storageBucket: "chat-ananolive.appspot.com",
  messagingSenderId: "231394443095",
  appId: "1:231394443095:web:20b3a1b90d3526626e0812"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };