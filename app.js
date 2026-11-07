// Firebase connection: replace the placeholder values with your own web-app config.
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY",
  authDomain: "PASTE_YOUR_PROJECT.firebaseapp.com",
  projectId: "PASTE_YOUR_PROJECT_ID",
  storageBucket: "PASTE_YOUR_STORAGE_BUCKET",
  messagingSenderId: "PASTE_YOUR_SENDER_ID",
  appId: "PASTE_YOUR_APP_ID"
};

const status = document.getElementById("authStatus");
const authPanel = document.getElementById("auth");
document.getElementById("showAuth").onclick = () => authPanel.classList.toggle("hidden");

if (firebaseConfig.apiKey.startsWith("PASTE_")) {
  status.textContent = "Firebase setup pending: add your Firebase web configuration in app.js.";
  document.getElementById("signup").disabled = true;
  document.getElementById("login").disabled = true;
} else {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  document.getElementById("signup").onclick = async () => {
    try { await createUserWithEmailAndPassword(auth, email.value.trim(), password.value); }
    catch (e) { status.textContent = e.message; }
  };
  document.getElementById("login").onclick = async () => {
    try { await signInWithEmailAndPassword(auth, email.value.trim(), password.value); }
    catch (e) { status.textContent = e.message; }
  };
  document.getElementById("logout").onclick = () => signOut(auth);
  onAuthStateChanged(auth, user => {
    status.textContent = user ? `Signed in as ${user.email}` : "Not signed in.";
    document.getElementById("logout").classList.toggle("hidden", !user);
  });
}
