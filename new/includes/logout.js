// Add at the top of your JS file
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";

// Firebase config (same as used during login)
const firebaseConfig = {
  apiKey: "AIzaSyCq8eXVoQtt_l9EFkIhYxzoUvW7HOIvZzk",
  authDomain: "pcu-maps-5d985.firebaseapp.com",
  projectId: "pcu-maps-5d985",
  storageBucket: "pcu-maps-5d985.firebasestorage.app",
  messagingSenderId: "922913954447",
  appId: "1:922913954447:web:c9f2db5e796c56fb7b2efa",
};

// Initialize Firebase app + auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle logout click
const logoutBtn = document.getElementById("logout");
logoutBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      alert("Logged out successfully!");
      window.location.href = "/index.html"; // Redirect to login page
    })
    .catch((error) => {
      console.error("Logout error:", error);
      alert("Logout failed. Try again.");
    });
});
