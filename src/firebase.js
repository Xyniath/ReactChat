import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCu7xoGW_yRUFWJFgG0htj_6OCKHChIpqo",
    authDomain: "reactchat-ce1b2.firebaseapp.com",
    projectId: "reactchat-ce1b2",
    storageBucket: "reactchat-ce1b2.appspot.com",
    messagingSenderId: "206627902705",
    appId: "1:206627902705:web:f2dddd891554a594714550"
}).auth();