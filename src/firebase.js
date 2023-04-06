// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqbmgum1UYDe16ADmarnTJlSd2AYPQqZg",
  authDomain: "raiden-ddac8.firebaseapp.com",
  projectId: "raiden-ddac8",
  storageBucket: "raiden-ddac8.appspot.com",
  messagingSenderId: "225817393644",
  appId: "1:225817393644:web:290d09ee77658390a7a8c9",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
