// authGuard.js
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCq8eXVoQtt_l9EFkIhYxzoUvW7HOIvZzk",
  authDomain: "pcu-maps-5d985.firebaseapp.com",
  projectId: "pcu-maps-5d985",
  storageBucket: "pcu-maps-5d985.firebasestorage.app",
  messagingSenderId: "922913954447",
  appId: "1:922913954447:web:c9f2db5e796c56fb7b2efa",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (!user) {
    // No user is signed in, redirect to login
    window.location.href = "/index.html";
  }
});
