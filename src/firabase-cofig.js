import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
	apiKey: process.env.FIRA_API_KEY,
	authDomain: process.env.FIRA_AUTH_DOMAIN,
	projectId: process.env.FIRA_PROJECT_ID,
	storageBucket: process.env.FIRA_STORAGE_BUCKET,
	messagingSenderId: process.env.FIRA_MESSAGING_SENDER_ID,
	appId: process.env.FIRA_APP_ID,
	measurementId: process.env.FIRA_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
