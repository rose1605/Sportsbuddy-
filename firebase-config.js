// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAr8aY0L6kZf_A3sa2XbW5mlX5Dmd3YRfo",
    authDomain: "sportsbuddy-aaa70.firebaseapp.com",
    databaseURL: "https://sportsbuddy-aaa70-default-rtdb.firebaseio.com",
    projectId: "sportsbuddy-aaa70",
    storageBucket: "sportsbuddy-aaa70.appspot.com",
    messagingSenderId: "843139791916",
    appId: "1:843139791916:web:eebf9db648931cfbfe6589",
    measurementId: "G-1X2EJJB9NK"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
