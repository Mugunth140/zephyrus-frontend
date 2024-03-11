// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDwytPhsUww0nT9bvNUQqcU6FgANQ6KcPk",
    authDomain: "zephyrus-e95cb.firebaseapp.com",
    projectId: "zephyrus-e95cb",
    storageBucket: "zephyrus-e95cb.appspot.com",
    messagingSenderId: "686625347192",
    appId: "1:686625347192:web:0c4c8ff476299c9ac9bf8d",
    measurementId: "G-2PWBCN15LY"
  };


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export { firebase };