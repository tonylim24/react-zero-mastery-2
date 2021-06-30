import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCy6nAwcOUKeMv7-iZ6KWEDpE2T2c2lJx8",
  authDomain: "react-zero-mastery-2.firebaseapp.com",
  projectId: "react-zero-mastery-2",
  storageBucket: "react-zero-mastery-2.appspot.com",
  messagingSenderId: "322216740084",
  appId: "1:322216740084:web:7fef0ab612b9d8ed64caa1",
  measurementId: "G-4EJTVZYELR",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
