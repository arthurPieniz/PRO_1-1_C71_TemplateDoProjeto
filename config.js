import firebase from "firebase";
require("@firebase/firestore");

  const firebaseConfig = {
    apiKey: "AIzaSyD6uUpem4XHSL6ktwzP8nbXPbtVxZwLQfU",
    authDomain: "pro-c71-81a88.firebaseapp.com",
    projectId: "pro-c71-81a88",
    storageBucket: "pro-c71-81a88.appspot.com",
    messagingSenderId: "141664969121",
    appId: "1:141664969121:web:052f8956549def92382be0",
    measurementId: "G-F87G6R0DPV"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
