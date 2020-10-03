import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCbzqryq-4VmlrSu7JhswmTcmIxNW4joPg",
    authDomain: "crwn-ecmrc-db-160bf.firebaseapp.com",
    databaseURL: "https://crwn-ecmrc-db-160bf.firebaseio.com",
    projectId: "crwn-ecmrc-db-160bf",
    storageBucket: "crwn-ecmrc-db-160bf.appspot.com",
    messagingSenderId: "316696889649",
    appId: "1:316696889649:web:1d384e5bff2d24dc184810",
    measurementId: "G-083L60JRNS"
  };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider); 

export default firebase;