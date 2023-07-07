import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnEe9bQGRzJf0p6exzY81uZ02B2D4_n4w",
  authDomain: "librarysystem-61c60.firebaseapp.com",
  projectId: "librarysystem-61c60",
  storageBucket: "librarysystem-61c60.appspot.com",
  messagingSenderId: "455632095787",
  appId: "1:455632095787:web:c3cc22dff51fce3a88786e",
  measurementId: "G-Z43MNMX8ZN"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
