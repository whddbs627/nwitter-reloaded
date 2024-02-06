import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-vY0f_IQ4sf0jkoXRKofAO3Ed1HXx7Qk",
  authDomain: "nwitter-reloaded-23d29.firebaseapp.com",
  projectId: "nwitter-reloaded-23d29",
  storageBucket: "nwitter-reloaded-23d29.appspot.com",
  messagingSenderId: "1095209204013",
  appId: "1:1095209204013:web:aa52731f2c6735c79bbba4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);