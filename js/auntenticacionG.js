import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCBKAkgixaP9ILHs_jZ3z6PK1eCoVHAP6w",
  authDomain: "libreria-1768a.firebaseapp.com",
  projectId: "libreria-1768a",
  storageBucket: "libreria-1768a.appspot.com",
  messagingSenderId: "1086861662717",
  appId: "1:1086861662717:web:52aa999b3235e2a5da6194"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

logginG.addEventListener("click", async (e) => {
    try {
        const result = await signInWithPopup(auth, provider);

        const user = result.user;
        window.location.href = "https://santiagoguali.github.io/libreria/";
    } catch (error) {
        console.error("Error al iniciar sesión con Google:", error);
    }
});