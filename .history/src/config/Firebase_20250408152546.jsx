import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signInWithProvider = async (provider) => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("User Info:", result.user);
    return result; // return về kết quả
  } catch (error) {
    console.error("Error:", error);
    throw error; // throw lỗi ra ngoài để xử lý
  }
};

export {
  auth,
  signInWithProvider,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
};
