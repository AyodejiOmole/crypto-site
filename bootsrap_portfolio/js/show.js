import { auth, app } from "./dashboard/firebase";

const user = auth.currentUser;

if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const uid = user.uid;
}



document.querySelector("#show-payment").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("active");

});

document.querySelector("#show-payment2").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("active");

});
document.querySelector("#show-payment3").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("active");

});
document.querySelector("#show-payment4").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("active");

});

document.querySelector(".popup .close-btn").addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("active");
});


const inputField = document.getElementById("tag");

document.querySelector(".popup .button").addEventListener("click", function () {
  if (inputField && inputField.value.trim() !== "") {
    document.querySelector(".popup").classList.remove("active");
    alert("withdrawal in process");
  } else {
    alert("fill in the required details");
  }
});
