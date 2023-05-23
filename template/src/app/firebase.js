import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// Paste in your firebaseConfig object here from firebase console (if you are using firebase)
const firebaseConfig = {
}

// Uncomment the lines below if you are using firebase

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

// setPersistence(auth, browserLocalPersistence);

// export const db = getFirestore(app);
// export const provider = new GoogleAuthProvider();
// export default app;