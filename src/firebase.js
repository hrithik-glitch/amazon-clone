// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBApQnO9nD3CJbyos5agcRuy75nBid1IvE",
  authDomain: "clone-45394.firebaseapp.com",
  databaseURL: "https://clone-45394.firebaseio.com",
  projectId: "clone-45394",
  storageBucket: "clone-45394.appspot.com",
  messagingSenderId: "168774785172",
  appId: "1:168774785172:web:85416123562d8ce428bc81",
  measurementId: "G-6PYLNZFJSW",
});

const auth = firebase.auth();

export { auth };
