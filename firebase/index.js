// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "bus-trackly-cb576.firebaseapp.com",
  projectId: "bus-trackly-cb576",
  storageBucket: "bus-trackly-cb576.appspot.com",
  messagingSenderId: "222141672523",
  appId: "1:222141672523:web:e6cf2b8f24c728747931ce",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
// export default db =
