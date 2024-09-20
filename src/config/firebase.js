import { initializeApp} from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBKKx2Eek6EbSVKgSsAIimxIXG_SG41mLE",
  authDomain: "fir-learn-1f5c0.firebaseapp.com",
  projectId: "fir-learn-1f5c0",
  storageBucket: "fir-learn-1f5c0.appspot.com",
  messagingSenderId: "429108730352",
  appId: "1:429108730352:web:0365d705a542fbc3642535",
  measurementId: "G-QRXKXQS5FW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const google= new GoogleAuthProvider()
export const db = getFirestore(app);
export const storage = getStorage(app);