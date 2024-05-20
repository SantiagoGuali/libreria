// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyCBKAkgixaP9ILHs_jZ3z6PK1eCoVHAP6w",
    authDomain: "libreria-1768a.firebaseapp.com",
    projectId: "libreria-1768a",
    storageBucket: "libreria-1768a.appspot.com",
    messagingSenderId: "1086861662717",
    appId: "1:1086861662717:web:52aa999b3235e2a5da6194"
    };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  // Initialize Cloud Firestore and get a reference to the service
  const db = firebase.firestore();