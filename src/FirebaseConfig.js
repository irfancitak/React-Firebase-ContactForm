import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvOi4GW6y9gJbtaSwL7XFdB7Nz72lR0uo",
  authDomain: "react-vol.firebaseapp.com",
  projectId: "react-vol",
  storageBucket: "react-vol.appspot.com",
  messagingSenderId: "487326518820",
  appId: "1:487326518820:web:f91ff07a8b7edad2bfd2b1",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
