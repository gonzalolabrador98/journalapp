import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyChcZD5nmWhorv2vZm__H6h-u4sESp08mk',
  authDomain: 'react-journal-376e2.firebaseapp.com',
  databaseURL: 'https://react-journal-376e2-default-rtdb.firebaseio.com',
  projectId: 'react-journal-376e2',
  storageBucket: 'react-journal-376e2.appspot.com',
  messagingSenderId: '272733241465',
  appId: '1:272733241465:web:638778f92c878e81f754a8',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
