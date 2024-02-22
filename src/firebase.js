// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  singOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_runuwr4iq2oqdF5u4rilAx87EGILUpA",
  authDomain: "guestbook-fab79.firebaseapp.com",
  projectId: "guestbook-fab79",
  storageBucket: "guestbook-fab79.appspot.com",
  messagingSenderId: "419559084552",
  appId: "1:419559084552:web:370e2b26e76aed4c5ef7bd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    return user;
  } catch (error) {
    throw error;
  }
};
const loginWithEmailAndPassword = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const user = res.user;
    return user;
  } catch (error) {
    throw error;
  }
};
export {
  auth,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
  singOut,
};
