 import firebase from "firebase/app";
 import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBg-p0jZJ5tDdjHiGjTYA8bjNGGgRxO3r0",
    authDomain: "todoist-88c60.firebaseapp.com",
    projectId: "todoist-88c60",
    storageBucket: "todoist-88c60.appspot.com",
    messagingSenderId: "694053797641",
    appId: "1:694053797641:web:6efb5a277d5dfaf6a79dd8",
    measurementId: "G-LJ6703WHWX"
});

export {firebaseConfig as firebase};