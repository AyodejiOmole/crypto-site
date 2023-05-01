import { ref, set } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";
import { database, auth, len, app } from "../bootsrap_portfolio/js/dashboard/firebase.js"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";

// Initialize Firebase authentication and database.
// const registerName = document.getElementById("nlabel").value;

document.addEventListener("DOMContentLoaded", async () => {
    let countries = [];
    const countrySelect = document.getElementById("country");

    const response = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await response.json();
    console.log(jsonData);
    
    for (const value of jsonData) {
        let country = value.name.common;
        countries.push(country);
    }

    // Sort in alphabetical order
    countries.sort();

    countries.forEach((country) => {
        var option = document.createElement("option");
        option.value = country;
        option.text = country;

        countrySelect.appendChild(option);
    });
});

document.getElementById("btn").addEventListener('click', function () {
    console.log("LETS START FROM HERE");

    const countrySelect = document.getElementById("country");
    const accountSelect = document.getElementById("acct-type");
    const registerEmail = document.getElementById("eemail").value;
    const registerPassword = document.getElementById("lpassword").value;
    const registerName = document.getElementById("fname").value;
    const phone = document.getElementById("phone").value;

    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
        .then((userCredential) => {
            // const user = userCredential.user;
            const user = auth.currentUser;

            // Creates a collection for each user using an id unique to them in the firebase realtime database as they register using firebase auth. 
            set(ref(database, 'users2/' + user.uid), {
                name: registerName,
                email: registerEmail,
                phone_number: phone,
                password: registerPassword,
                country: countrySelect.value,
                account_type: accountSelect.value,
                balance: 0,
                profit: 0
            }).then(() => {
                // Immediately sets a local storage of the id of the user. This is to enables the dashboard retrieve the details of a particular user using their id that we can now get from local storage.
                window.localStorage.setItem("id", user.uid);

                // The user is navigated to the dashboard once the collection in the database has been created.  
                window.location.assign("../bootsrap_portfolio/index-2.html");
                
            }).catch((error) => {
                console.log(error.message);
            })            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            alert(errorMessage);
        });
})

document.getElementById("btn1").addEventListener('click', function () {
    console.log("LETS continue FROM HERE");
    const registerEmail = document.getElementById("email").value;
    const registerPassword = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, registerEmail, registerPassword) 
        .then((userCredential) => {
            // const user = userCredential.user;
            const user = auth.currentUser;
            
            console.log(user.uid);
            // Immediately sets a local storage of the id of the user. This is to enable the dashboard retrieve the details of a particular user using their id that we can now get from local storage.
            window.localStorage.setItem("id", user.uid);
            
            window.location.assign("../bootsrap_portfolio/index-2.html");
            
            console.log("it is working");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
})

// const signInButtons = document.getElementById("users-email").innerHTML=registerEmail;