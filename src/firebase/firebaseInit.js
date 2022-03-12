//here the frontend is hooked with the back end-firebase
import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAS1r8zUAtVVkyUMKBk3CedllSApFwMCiY",
  authDomain: "vuejs-b722e.firebaseapp.com",
  projectId: "vuejs-b722e",
  storageBucket: "vuejs-b722e.appspot.com",
  messagingSenderId: "75757549935",
  appId: "1:75757549935:web:cd4365c2451e3ef1cb909a"
};

  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();