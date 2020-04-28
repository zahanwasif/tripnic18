import firebase from "@react-native-firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyAaKIsHkoQPEWT9CSATctpoJ-MXYDHKHhM",
  authDomain: "tripnic-18.firebaseapp.com",
  databaseURL: "https://tripnic-18.firebaseio.com",
  projectId: "tripnic-18",
  storageBucket: "tripnic-18.appspot.com",
  messagingSenderId: "338070094498",
  appId: "1:338070094498:web:e153e43e3027298b9e0dfb",
  measurementId: "G-SW4EHGHGBX"
};

// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}


export default firebase
