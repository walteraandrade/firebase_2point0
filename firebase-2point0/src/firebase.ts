import firebase from "firebase/app";
import "firebase/auth";

export const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
})

export const auth = app.auth()