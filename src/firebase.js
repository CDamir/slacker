import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCbZPUcZ9Xvu3FTgiPhb9pEHdy2qlSBjJQ",
    authDomain: "slacker-7d756.firebaseapp.com",
    databaseURL: "https://slacker-7d756.firebaseio.com",
    projectId: "slacker-7d756",
    storageBucket: "slacker-7d756.appspot.com",
    messagingSenderId: "167078027921",
    appId: "1:167078027921:web:52056bd30a8986fc"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase;