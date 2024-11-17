// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1IUpSxRgfef3B7PxzYA_Pep-zUwGa_EM",
  authDomain: "fir-first-concept-project.firebaseapp.com",
  projectId: "fir-first-concept-project",
  storageBucket: "fir-first-concept-project.firebasestorage.app",
  messagingSenderId: "199232980989",
  appId: "1:199232980989:web:c3aa5105b5cecee5783b94",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
