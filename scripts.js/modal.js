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
const closeValidation = document.querySelector(".btn-close-form");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function launchValidation() {
  formData.style.display = "none";
  closeValidation.style.display = "block";
}

// CLOSING THE FORM
// close modal function
function closeModal() {
  modalbg.style.display = "none";
}
// close modal event
closeForm.addEventListener("click", closeModal);

// close validation message
closeValidation.addEventListener("click", closeModal);
