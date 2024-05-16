import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCIeGGEBbBPSVmDIENPvkj_iN_XmzBkUs",
  authDomain: "event-4de17.firebaseapp.com",
  projectId: "event-4de17",
  storageBucket: "event-4de17.appspot.com",
  messagingSenderId: "632539873790",
  appId: "1:632539873790:web:950d95a7c050f2e435c0af",
  measurementId: "G-SHYH4TCXX8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};