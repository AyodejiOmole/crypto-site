import { ref, set } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";
import { database, auth, len, app } from "../bootsrap_portfolio/js/dashboard/firebase.js"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";

// Initialize Firebase authentication and database.
// const registerName = document.getElementById("nlabel").value;
console.log(len);
console.log(app);
document.getElementById("btn").addEventListener('click', function () {
    console.log("LETS START FROM HERE");

    const registerEmail = document.getElementById("eemail").value;
    const registerPassword = document.getElementById("lpassword").value;
    const registerName = document.getElementById("fname").value;

    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
        .then((userCredential) => {
            // const user = userCredential.user;
            const user = auth.currentUser;

            // Creates a collection for each user using an id unique to them in the firebase realtime database as they register using firebase auth. 
            set(ref(database, 'users/' + user.uid), {
                email: registerEmail,
                name: registerName,
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

        // window.location.assign("../bootsrap_portfolio/index-2.html");
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