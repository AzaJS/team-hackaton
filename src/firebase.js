import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAumWYYRJZ0RSQZ83z3ypfI-UZNeoLYbd0",
  authDomain: "team-hackaton-a-j.firebaseapp.com",
  projectId: "team-hackaton-a-j",
  storageBucket: "team-hackaton-a-j.appspot.com",
  messagingSenderId: "840404759218",
  appId: "1:840404759218:web:b0208cb45839ab4ba90fab",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;