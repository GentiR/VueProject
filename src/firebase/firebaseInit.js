import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCrIA0j8e7ysvSEuNbIOi5ezu1mWcF427w",
    authDomain: "vuejs-b516c.firebaseapp.com",
    projectId: "vuejs-b516c",
    storageBucket: "vuejs-b516c.appspot.com",
    messagingSenderId: "746458932697",
    appId: "1:746458932697:web:2de0d16b8c8bc29463a5c8"
  };

  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebase.firestore();