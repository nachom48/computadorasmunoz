import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYDV0wTN1BTrYLdO6tx12tqIpjE5QYqqw",
  authDomain: "ecommerce-computadoras-munoz.firebaseapp.com",
  projectId: "ecommerce-computadoras-munoz",
  storageBucket: "ecommerce-computadoras-munoz.appspot.com",
  messagingSenderId: "905605960211",
  appId: "1:905605960211:web:8cdb92c0d2cffd38b065e6",
  measurementId: "G-YV5PJM8TXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);