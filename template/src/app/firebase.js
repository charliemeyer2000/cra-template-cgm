import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// Paste in your firebaseConfig object here from firebase console (if you are using firebase)
// Note - it is best practice to put this in an env file, but not necessary.An example of this looks like:

/* 

 const firebaseConfig = {
   apiKey: process.env.REACT_APP_apiKey,
   authDomain: process.env.REACT_APP_authDomain,
   projectId: process.env.REACT_APP_projectId,
   storageBucket: process.env.REACT_APP_storageBucket,
   messagingSenderId: process.env.REACT_APP_messagingSenderId,
   appId: process.env.REACT_APP_appId
 };



*/
const firebaseConfig = {};

// Uncomment the lines below if you are using firebase

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

// setPersistence(auth, browserLocalPersistence);

// export const db = getFirestore(app);
// export const provider = new GoogleAuthProvider();
// export default app;
