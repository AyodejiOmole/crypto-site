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
    if(window.localStorage.getItem("balance") === "0") {
      alert("Unfortunately, you do not have sufficient balance to withdraw!");
    } else {
      // alert("withdrawal in process");
      document.querySelector(".popup2").classList.add("active");
    }
  } else {
    alert("fill in the required details");
  }
});

document.querySelector(".close-btn2").addEventListener("click", () => {
  document.querySelector(".popup2").classList.remove("active");
});


document.querySelector("#signal").addEventListener("click", function() {
  document.querySelector(".invoice-card-row").classList.remove("active");
})