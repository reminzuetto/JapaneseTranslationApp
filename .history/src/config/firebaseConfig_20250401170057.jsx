import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const githubProvider = new GithubAuthProvider();

export const signInWithProvider = async (provider) => {
  try {
    const result = await auth.signInWithPopup(provider);
    const user = result.user;
    console.log("User signed in: ", user);
  } catch (error) {
    console.error("Error signing in: ", error);
  }
};
