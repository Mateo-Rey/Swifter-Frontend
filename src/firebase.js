import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCgwG5iBjKMmQFCOnFUhD9dbHe_qCsnY0s",
  authDomain: "swifter-chat.firebaseapp.com",
  projectId: "swifter-chat",
  storageBucket: "swifter-chat.appspot.com",
  messagingSenderId: "827100983239",
  appId: "1:827100983239:web:ba8c89985ac17a89b2f3e2",
});

export const auth = app.auth()
