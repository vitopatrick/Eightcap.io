import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// these are the firebase config files
const firebaseConfig = {
  apiKey: "AIzaSyAeC3_SIN4lX8Q1E6U-njGAv9UJCFaqlz4",
  authDomain: "eighcap-io.firebaseapp.com",
  projectId: "eighcap-io",
  storageBucket: "eighcap-io.appspot.com",
  messagingSenderId: "667015270739",
  appId: "1:667015270739:web:e8af2d35a94643c42411a6",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);