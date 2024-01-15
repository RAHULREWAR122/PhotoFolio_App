// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMskykY_8rfEKFcaHa24_uMpMMLAc5zm0",
  authDomain: "photofolio-31009.firebaseapp.com",
  projectId: "photofolio-31009",
  storageBucket: "photofolio-31009.appspot.com",
  messagingSenderId: "973142629122",
  appId: "1:973142629122:web:63fdc95bed54e839a2801b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export
export const db = getFirestore(app);
