import { child, get } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";
import { dbRef, app } from "./firebase.js";

const user_name = document.getElementById("users-name");
const balance = document.getElementById("user-balance");
const log_out = document.getElementById("logout");
const email = document.getElementById("users-email");

const profit = document.getElementById("user-profit");
// Makes use of the DOMContentLoaded, i.e. the event that is triggered as the HTML content - only the HTML content - of the document gets loaded, document event to retrieve the details of the user from the database and populate the necessary regions.
document.addEventListener("DOMContentLoaded", async () => { 
    try {
        // Gets the response from the firebase realtime database. 
        const res = await getData(dbRef);
        
        // Retrieves the snapshot by calling the val() function of the response gotten above.
        const snapshot = res.val();
        console.log(snapshot);

        // Updates the "Hi welcome" segment of the dashboard by adding the names of the the user gotten from the database.
        user_name.innerHTML = `Hi, ${snapshot.name}`;

        // Updates the balnce displayed on the dashboard using the data gotten from the realtime database.
        balance.innerHTML = `$${snapshot.balance}`;

        // Updates the profit balnce displayed on the dashboard using the data gotten from the realtime database.
        profit.innerHTML = `$${snapshot.profit}`

        email.innerHTML = snapshot.email;
        
    } catch(error) {
        console.log(error);
        console.log(error.message);
    }   
});

// log_out.addEventListener("click", () => {
//     app.delete();
// });

function getData(ref) {
    // Retrieves the details of the specific user using the id that has been saved to localStorge on user login. 
    // It returns a promise that is to be resolved using async/await or ".then & .catch"
    return get(child(ref, `users/${window.localStorage.getItem("id")}`));
}