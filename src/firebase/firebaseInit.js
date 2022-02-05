//here the frontend is hooked with the back end-firebase

import firebase from "firebase/app";
//importing the firebase library that we need "firestore"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBSBFJK__HzZBx7BPWuWOplv7e28OhH7KU",
  authDomain: "uniproject-vue.firebaseapp.com",
  projectId: "uniproject-vue",
  storageBucket: "uniproject-vue.appspot.com",
  messagingSenderId: "367054694898",
  appId: "1:367054694898:web:0a99e5a4d949534e6aa36b"
};


  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebase.firestore();