import firebase from "@firebase/app";
import "@firebase/firestore";

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBOmcsuYBpkJCqecdk2peyBAAkFIsw6iY0",
  authDomain: "messages-f510a.firebaseapp.com",
  databaseURL: "https://messages-f510a.firebaseio.com",
  projectId: "messages-f510a",
  storageBucket: "messages-f510a.appspot.com",
  messagingSenderId: "936730497581",
  appId: "1:936730497581:web:ebc525598edacb90db9ea4",
  measurementId: "G-WHZDPBJ3R5"
});

export default firebase.firestore();
