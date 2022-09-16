import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC65y38oNAEDQC5kFyt1qvHv5CV3CSBook",
  authDomain: "house-marketplace-app-c29b3.firebaseapp.com",
  projectId: "house-marketplace-app-c29b3",
  storageBucket: "house-marketplace-app-c29b3.appspot.com",
  messagingSenderId: "101693008120",
  appId: "1:101693008120:web:fe9d63b77dde44cea1730d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()