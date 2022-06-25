// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMLINUoA5hk2EUKgMp5ghhVPivMOdoqK8",
  authDomain: "accessadventure-auth.firebaseapp.com",
  projectId: "accessadventure-auth",
  storageBucket: "accessadventure-auth.appspot.com",
  messagingSenderId: "924190041587",
  appId: "1:924190041587:web:cd7f485c80cb64b67d1e86"
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };