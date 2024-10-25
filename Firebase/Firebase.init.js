// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGcvgMnTSa4hjqJeDVjmTyC9_F_rEiN2o",
  authDomain: "dragon-news-57545.firebaseapp.com",
  projectId: "dragon-news-57545",
  storageBucket: "dragon-news-57545.appspot.com",
  messagingSenderId: "15574507444",
  appId: "1:15574507444:web:d997b9c2a9a8c3c0751ce1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth ;