// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

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
const googleAuthProvider = new GoogleAuthProvider();
const registerWithEmailAndPassword = async (email, password) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    return user;
  } catch (error) {
    throw error;
  }
};
const loginWithEmailAndPassword = async (email, password) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const user = res.user;
    return user;
  } catch (error) {
    throw error;
  }
};

const sendPasswordReset = async (email) => {
  // eslint-disable-next-line no-useless-catch
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    throw error;
  }
};

const signInWithGoogle = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const res = await signInWithPopup(auth, googleAuthProvider);
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
  sendPasswordReset,
  signInWithGoogle,
};
