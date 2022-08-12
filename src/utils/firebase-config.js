import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBCVzDCs_sjw9QHhxpl0APlrG4FSBawy-o",
  authDomain: "react-netflix-clone-a1f49.firebaseapp.com",
  projectId: "react-netflix-clone-a1f49",
  storageBucket: "react-netflix-clone-a1f49.appspot.com",
  messagingSenderId: "446686939322",
  appId: "1:446686939322:web:fd8fd6a3df61336490da83",
  measurementId: "G-X7LRDKQTDW"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
