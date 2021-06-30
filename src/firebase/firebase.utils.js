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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // If user is not logged in, then do nothing.
  if (!userAuth) return;

  // If user is logged in, proceed to query firestore to get document
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
