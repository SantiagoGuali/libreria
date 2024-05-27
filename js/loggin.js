import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { sendEmailVerification, getAuth, signInWithPopup,
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
  onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";


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


loggin.addEventListener('click', (e) => {
  var email = document.getElementById("correo").value;
  var password = document.getElementById("contraseña").value;

  signInWithEmailAndPassword(auth, email, password).then(cred => { 
    console.log(cred.user);
    auth.onAuthStateChanged(user => {
      if(user){
        console.log("Usuario activo")
        var mail = user.emailVerified;
        if(mail){
          window.location.href = "inicio.html";
        } else {
          auth.signOut(); 
        }
      } else {
        console.log("Usuario inactivo"); 
        alert("El usuario se encuentra desabilitado")
      }
    });
  }).catch(error =>{
    
    const errorCode = error.code;
    console.log(errorCode)
    if(errorCode == 'auth/invalid-email') {
        alert("Correo inválido"); 
    } else if(errorCode == "auth/user-disabled") {
        alert("Usuario deshabilitado");
    } else if(errorCode == "auth/user-not-found") {
        alert("Usuario inexistente"); 
    } else if(errorCode == "auth/wrong-password") {
        alert("Contraseña inválida");
    } else if(errorCode == "auth/invalid-credential")
      alert("Usuario o contraseña incorrecto")
  });
});



cerrar.addEventListener("click", (e) =>{
  auth.singOut().then(()=> {
      alert("Sesion cerrada")
  }).catch((error) => {
      alert("Error al cerrar sesion")
  })
})