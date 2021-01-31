import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBUUECvRVj-Nzz58s5DyDrwEGLsdCWx5G0",
    authDomain: "crwn-db-f90ef.firebaseapp.com",
    projectId: "crwn-db-f90ef",
    storageBucket: "crwn-db-f90ef.appspot.com",
    messagingSenderId: "1071620015432",
    appId: "1:1071620015432:web:6e62447fee84bf72071f7d",
    measurementId: "G-Y09TS4V03S"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
