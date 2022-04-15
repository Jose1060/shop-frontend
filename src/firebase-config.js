import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_KEY,
	authDomain: "proyecto-tienda-d9445.firebaseapp.com",
	projectId: "proyecto-tienda-d9445",
	storageBucket: "proyecto-tienda-d9445.appspot.com",
	messagingSenderId: "273843173156",
	appId: "1:273843173156:web:c2964efbc26c8e5652a5b1",
	measurementId: "G-2LPW7TRE3E",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
