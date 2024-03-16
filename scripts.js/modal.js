//fonction pour la reponsivness
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeForm = document.querySelector(".close");
const closeValidation = document.querySelectorAll(".fenetreFermeture");
const buttonValidation = document.querySelector(".btn-close-form");
const validInputs = document.querySelectorAll(".error");
const navBurger = document.querySelector(".main-navbar");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  navBurger.style.zIndex = "1";
}

function launchValidation() {
  formData.forEach((data) => (data.style.display = "none"));
  closeValidation.forEach((data) => (data.style.display = "flex"));
  // hides error messages
  // validInputs.forEach((data) => (data.style.display = "none"));
}

// CLOSING THE FORM
// close modal function
function closeModal() {
  modalbg.style.display = "none";

  // shouldnt put this here because it will show the validation message even if form is invalid but user clicks on X
  // closeValidation.forEach((data) => (data.style.display = "flex"));
}
// close modal event
closeForm.addEventListener("click", closeModal);

// close validation message
buttonValidation.addEventListener("click", closeModal);
