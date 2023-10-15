import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCWQi5bXC3dqlSlt53ssn_UDsDXmnJllLU",
  authDomain: "loginsample-88cc9.firebaseapp.com",
  projectId: "loginsample-88cc9",
  storageBucket: "loginsample-88cc9.appspot.com",
  messagingSenderId: "276994388182",
  appId: "1:276994388182:web:6ae08f8eb7f2eb36c25977",
  measurementId: "G-TWDCQ9JGT2"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };


