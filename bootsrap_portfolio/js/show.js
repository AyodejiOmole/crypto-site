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



const btn = document.querySelector('#bitcoin');

btn.addEventListener('click', () => {
  const codeToCopy = 'bc1q9m7t3dk7y7se06zfsckah97c5up96x956l28rh';
  navigator.clipboard.writeText(codeToCopy);
  alert('copied to clipboard');
});

const btn1 = document.querySelector('#ethereum');

btn1.addEventListener('click', () => {
  const codeToCopy = '0xe678a83aD3727d3f2C54D25A1a5C30A8A9aeBF1E';
  navigator.clipboard.writeText(codeToCopy);
  alert('copied to clipboard');
});

const btn2 = document.querySelector('#usdt');

btn2.addEventListener('click', () => {
  const codeToCopy = '0xe678a83aD3727d3f2C54D25A1a5C30A8A9aeBF1E';
  navigator.clipboard.writeText(codeToCopy);
  alert('copied to clipboard');
});
const btn3 = document.querySelector('#btc-cash');

btn3.addEventListener('click', () => {
  const codeToCopy = 'qp4qyn84gghfv204uzzd83l3slg60zq5ngyc4l0xcj';
  navigator.clipboard.writeText(codeToCopy);
  alert('copied to clipboard');
});



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


document.querySelector("#signal").addEventListener("click", function() {
  document.querySelector(".invoice-card-row").classList.remove("active");
})
