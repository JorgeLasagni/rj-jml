// Import the functions you need from the SDKs you need
import { initializeApp }                from "firebase/app";
import { getFirestore }                 from "firebase/firestore";
import { getAuth, GoogleAuthProvider }  from "firebase/auth";

const firebaseConfig = {
  apiKey:             "AIzaSyCsd0y59yDn1IyxSkdbhKEPI3wQGKt1P-0",
  authDomain:         "jml-reactjs.firebaseapp.com",
  projectId:          "jml-reactjs",
  storageBucket:      "jml-reactjs.appspot.com",
  messagingSenderId:  "776661661511",
  appId:              "1:776661661511:web:dd159ac0be403f27cf3e62"
};

// Initialize Firebase
        const app   = initializeApp(firebaseConfig);
export  const db    = getFirestore(app)
export  const auth  = getAuth(app)
export const provider = new GoogleAuthProvider()