import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBr_jo72yzrGc0mc1XuNLJSWj0c1J2S5UE",
  authDomain: "kharcha-kitaab.firebaseapp.com",
  projectId: "kharcha-kitaab",
  storageBucket: "kharcha-kitaab.appspot.com",
  messagingSenderId: "344545408422", 
  appId: "1:344545408422:web:d581e950ca852390f8cb67",
  measurementId: "G-B31N5ZCCX5",
};

const fire = firebase.initializeApp(config);
export default fire;
