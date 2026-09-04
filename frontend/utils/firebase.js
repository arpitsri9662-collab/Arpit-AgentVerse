import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkVvTtuB1gJPeOfIvHP6WnuQ77X-jvULE",
  authDomain: "agentverse-ai-35533.firebaseapp.com",
  projectId: "agentverse-ai-35533",
  storageBucket: "agentverse-ai-35533.firebasestorage.app",
  messagingSenderId: "687463884063",
  appId: "1:687463884063:web:4721c1f2eb028571d73c2a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();