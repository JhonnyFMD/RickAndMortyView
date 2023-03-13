import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyBif5PNAQ8Uvekm5GfL4uxmUC5xPhdoxRY",
  authDomain: "rick-and-morty-viewer.firebaseapp.com",
  projectId: "rick-and-morty-viewer",
  storageBucket: "rick-and-morty-viewer.appspot.com",
  messagingSenderId: "403318014163",
  appId: "1:403318014163:web:31cd0101f7d450b5ee9426"
};

export const FirebaseApp  = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp );

export const FirebaseDB   = getFirestore( FirebaseApp );
