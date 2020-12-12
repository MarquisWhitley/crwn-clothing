import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAiam60LHE-ZA-m04rufqYdDbiYjwv27nY',
  authDomain: 'crown-db-fded4.firebaseapp.com',
  projectId: 'crown-db-fded4',
  storageBucket: 'crown-db-fded4.appspot.com',
  messagingSenderId: '426404028821',
  appId: '1:426404028821:web:aca280427cfd1d426e169c',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
