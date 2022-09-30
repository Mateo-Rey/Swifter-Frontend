import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBgHumMZaS3hIzaZXnpWRen6WpOpwgcU_U",
    authDomain: "mrey-social-media-backend.firebaseapp.com",
    projectId: "mrey-social-media-backend",
    storageBucket: "mrey-social-media-backend.appspot.com",
    messagingSenderId: "573558605936",
    appId: "1:573558605936:web:9b13decd27cb3aee948cb5"
  });

export const auth = app.auth()
