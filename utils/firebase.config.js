import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD8iTkkT81UmvaeUoMJeN1mUz-FQqU2XO4",
  authDomain: "portfolio-1d81e.firebaseapp.com",
  projectId: "portfolio-1d81e",
  storageBucket: "portfolio-1d81e.appspot.com",
  messagingSenderId: "254986454393",
  appId: "1:254986454393:web:760a8c7fd85866a05f5ba8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
