// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// GoogleAuthProvider,
// signInWithPopup
// sendPasswordResetEmail,
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWoD3yZtiVpt-BWF2NffldU9E7LSKTpto",
  authDomain: "happybook-3b57a.firebaseapp.com",
  projectId: "happybook-3b57a",
  storageBucket: "happybook-3b57a.firebasestorage.app",
  messagingSenderId: "373281081033",
  appId: "1:373281081033:web:486ab2845a52d8f4c6ef18",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();

export const createUserWithEmailAndPass = async (email, pass) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, pass);
    const user = response.user;
    return user;
  } catch (error) {
    throw new error("something is wrong");
  }
};

export const singInUserWithEmainPass = async (email, pass) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, pass);
    return res.user;
  } catch (error) {
    throw error(error);
  }
};

export const resetUserPass = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.log(error);
  }
};

export const userSigninWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleAuthProvider);
    return res.user;
  } catch (error) {
    console.log(error);
  }
};
export const userSigninWithFacebook = async () => {
  try {
    const res = await signInWithPopup(auth, facebookAuthProvider);
    const user = res.user;
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};
