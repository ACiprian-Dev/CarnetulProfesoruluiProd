import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/analytics'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAYCr23KZFJhD-1BYQ3nKqSDLkf5wvwVGA",
    authDomain: "carnetprof.firebaseapp.com",
    databaseURL: "https://carnetprof-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "carnetprof",
    storageBucket: "carnetprof.appspot.com",
    messagingSenderId: "421268178423",
    appId: "1:421268178423:web:5824dda8fae1c05020daf2",
    measurementId: "G-0JKY53GNXR"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
const auth = firebase.auth();

//collections
const eleviCollection = db.collection('elevi')
const profesoriCollection = db.collection('profesori')
const reviewsCollection = db.collection('reviews')

export {
    db as db,
    auth as auth,
    eleviCollection as eleviCollection,
    profesoriCollection as profesoriCollection,
    reviewsCollection as reviewsCollection
}

