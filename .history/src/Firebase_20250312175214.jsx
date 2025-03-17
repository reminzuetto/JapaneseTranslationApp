import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signInWithProvider = (provider) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("User Info:", result.user);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export {
  auth,
  signInWithProvider,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
};
