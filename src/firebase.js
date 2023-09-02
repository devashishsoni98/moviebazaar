import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import config from "./config";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyS1qIXDNbpcMrs5o0pVCl76vZ02mkA5M",
  authDomain: "movie-listing-app-21385.firebaseapp.com",
  projectId: "movie-listing-app-21385",
  storageBucket: "movie-listing-app-21385.appspot.com",
  messagingSenderId: "661889161530",
  appId: "1:661889161530:web:3b1281dd8f23e0dc7bd803"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
