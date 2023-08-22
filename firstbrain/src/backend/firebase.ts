import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDXzc0Vpfyf2CLLBX-VXVwbIYvjY6bbDUM",
  authDomain: "firstbrain-cd561.firebaseapp.com",
  projectId: "firstbrain-cd561",
  storageBucket: "firstbrain-cd561.appspot.com",
  messagingSenderId: "644137422460",
  appId: "1:644137422460:web:7cb37588bc7b5477dec3f9",
  measurementId: "G-1CM82X840D"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);