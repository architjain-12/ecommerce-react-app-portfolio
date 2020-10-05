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

export const createUserProfileDocument = async (userAuth , additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName , email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({displayName , email , createdAt , ...additionalData})
        }
        catch(error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};

export default firebase;