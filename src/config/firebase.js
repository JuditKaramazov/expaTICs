// Imports the required functions from the SDKs we'll need.
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// App's Firebase configuration.
const firebaseConfig = {
  apiKey: "AIzaSyCLVhyIbuWzyRyYGD8NO70L8b8iAK6MdHU",
  authDomain: "expa-tic-s.firebaseapp.com",
  projectId: "expa-tic-s",
  storageBucket: "expa-tic-s.appspot.com",
  messagingSenderId: "600860953483",
  appId: "1:600860953483:web:01962ccc8cc72e296bbd8e"
};

// Initializes Firebase and Firebase Authentication.
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
