// Firebase connection: replace the placeholder values with your own web-app config.
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const firebaseConfig = firebaseConfig = {

  apiKey: "AIzaSyAB6IXj2rwK5l-z_BOvv6HAEsfJOfq3SGU",

  authDomain: "free-fire-nepal-2e9ad.firebaseapp.com",

  projectId: "free-fire-nepal-2e9ad",

  storageBucket: "free-fire-nepal-2e9ad.firebasestorage.app",

  messagingSenderId: "189242809975",

  appId: "1:189242809975:web:03d9bced654253b70a3072",

  measurementId: "G-X5RCHPWVM3"

};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
content_copy
