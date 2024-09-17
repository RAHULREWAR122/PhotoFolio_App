
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
<<<<<<< HEAD
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTO_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDERID,
  appId: process.env.REACT_APP_APP_ID
=======
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
>>>>>>> ee608d2f82ac244a203f96bba96629610666c85f
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export
export const db = getFirestore(app);
