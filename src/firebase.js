import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB36UaGhFQvUqmjaHDyfrivhRjVOKIURoY",
  authDomain: "line-clone-f7507.firebaseapp.com",
  projectId: "line-clone-f7507",
  storageBucket: "line-clone-f7507.appspot.com",
  messagingSenderId: "216938604796",
  appId: "1:216938604796:web:f3b9d575940007e4fecf79"
});

const db = firebaseApp.firestore();
// どのUserがログインしているのか = auth
const auth = firebase.auth();

export {db, auth};