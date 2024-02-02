import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBm4ygRPZWlFE622S3f7SDxNBViZHVQofk",
  authDomain: "project-sem-3-b3666.firebaseapp.com",
  projectId: "project-sem-3-b3666",
  storageBucket: "project-sem-3-b3666.appspot.com",
  messagingSenderId: "1006755327277",
  appId: "1:1006755327277:web:55092a97355e37ff3577a4",
};

let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, db, provider, storage };
