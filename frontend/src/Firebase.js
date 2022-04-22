// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2Yg9cMFnEmb34xcG1xt0QjolfUOdTy3g",
  authDomain: "internbee-auth.firebaseapp.com",
  projectId: "internbee-auth",
  storageBucket: "internbee-auth.appspot.com",
  messagingSenderId: "1089880375392",
  appId: "1:1089880375392:web:d3adfa272b99cbe0504305",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const email = result.user.email;

      localStorage.setItem("email", email);
    })
    .catch((error) => {
      console.log(error);
    });
};
