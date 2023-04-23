// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Set up client credentials with environment variables
const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

// Initialize the Firebase app with client credentials
const app = initializeApp(clientCredentials);

// Export Firebase auth and Firestore instances for use in other parts of the application
export const auth = getAuth(app);
export const db = getFirestore(app);
