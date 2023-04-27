import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyCaSodrCVZ0LSVhBVgg1kW4DW_Vwg0ewlM",
    authDomain: "formlogin-1ba5e.firebaseapp.com",
    projectId: "formlogin-1ba5e",
    storageBucket: "formlogin-1ba5e.appspot.com",
    messagingSenderId: "426462914664",
    appId: "1:426462914664:web:c4ae93be9d87a9ac79f3dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initializes the firebase database using the firebase configuration provided above.
const database = getDatabase(app);
// It creates a reference to the realtime database of the project. 
const dbRef = ref(database);


const user_name = document.getElementById("users-name");
const balance = document.getElementById("user-balance");
// Makes use of the DomContentLoaded, i.e. the event that is triggered as the HTML content - only the HTML content - of the document gets loaded, document event to retrieve the details of the user from the database and populate the necessary regions.
document.addEventListener("DOMContentLoaded", async () => { 
    try {
        // Gets the response from the firebase realtime database. 
        const res = await getData(dbRef);

        // Retrieves the snapshot by calling the vall() function of the response gotten above.
        const snapshot = res.val();
        console.log(snapshot);

        // Updates the "Hi welcome" segment of the dashboard by adding the names of the the user gotten from the database.
        user_name.innerHTML = `Hi, ${snapshot.name}`;

        // Updates the balnce displayed on the dashboard using the data gotten from the realtime database.
        balance.innerHTML = `$${snapshot.balance}`
    } catch(error) {
        console.log(error.message);
    }    
});

function getData(ref) {
    // Retrieves the details of the specific user using the id that has been saved to localStorge on user login. 
    // It returns a promise that is to be resolved using async/await or ".then & .catch"
    return get(child(ref, `users/${window.localStorage.getItem("id")}`));
}