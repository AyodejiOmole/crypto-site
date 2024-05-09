import { getApps, initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getDatabase, ref } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDM0gKo2knwRT5C9oKtHCSwcxtAaLv5-Z4",
    authDomain: "formlogin-1f7b5.firebaseapp.com",
    databaseURL: "https://formlogin-1f7b5-default-rtdb.firebaseio.com",
    projectId: "formlogin-1f7b5",
    storageBucket: "formlogin-1f7b5.appspot.com",
    messagingSenderId: "481557094456",
    appId: "1:481557094456:web:0fcf70749cdd5208d946cd",
    measurementId: "G-W85GZDS7DP"
};

// Initialize Firebase using configuration above.

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

const len = getApps();

// Initializes the firebase database using the firebase app instance created above.
const database = getDatabase(app);

// It creates a reference to the realtime database of the project. 
const dbRef = ref(database);

// Initialize Firebase authentication
const auth = getAuth(app);

export {auth, dbRef, app, len, database}