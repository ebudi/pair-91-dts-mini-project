// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOWJ1YFdHFFCY9eAWAoVI-VJPLkKi1_RQ",
  authDomain: "reactjs-mini.firebaseapp.com",
  projectId: "reactjs-mini",
  storageBucket: "reactjs-mini.appspot.com",
  messagingSenderId: "326605407049",
  appId: "1:326605407049:web:18f4e999f260f103655098"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };