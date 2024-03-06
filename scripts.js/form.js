// empeche le default behaviour du formulaire lors du submit en cas derreur -> il ne refraichit pas la page
let formulaire = document.getElementById("formulaire");
formulaire.addEventListener("submit", function (e) {
  e.preventDefault();
  validateInput();
});

//verification contenu formulaire
function validateInput() {
  var fname = document.getElementById("first").value; //retrieve first name value
  var lname = document.getElementById("last").value; //retrieve last name value
  var email = document.getElementById("email").value; //retrieve email value
  var emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i; //regex for email
  var birthday = document.getElementById("birthdate").value; //retrieve birthdate value
  var tourQuantity = document.getElementById("quantity").value; //retrieve tournament quantity value
  var location = document.querySelectorAll('input[type="radio"]:checked'); //retrieve location

  // check first name
  if (fname == "" || fname.length < 2 || fname.search(/^[a-zA-Z]+$/) == -1) {
    alert("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    console.log("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    document.querySelector("#first").style.border = "2px solid red";
    document.querySelector(".errorFirst").style.display = "block";
  }
  // check last name
  else if (
    lname == "" ||
    lname.length < 2 ||
    lname.search(/^[a-zA-Z]+$/) == -1
  ) {
    alert("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    console.log("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    document.querySelector("#last").style.border = "2px solid red";
    document.querySelector(".errorLast").style.display = "block";
  }
  //check email
  else if (email == "") {
    alert("Veuillez entrer une adresse email valide.");
    console.log("Please Enter Email");
    document.querySelector("#email").style.border = "2px solid red";
    document.querySelector(".errorEmail").style.display = "block";
  } else if (email.search(emailRegEx) == -1) {
    alert("Veuillez entrer une adresse email valide.");
    console.log("Please enter a valid email address.");
    document.querySelector("#email").style.border = "2px solid red";
    document.querySelector(".errorEmail").style.display = "block";
  }
  // check birthdate
  else if (!birthday) {
    alert("Vous devez entrer votre date de naissance.");
    console.log("Please select Birth Date");
    document.querySelector("#birthdate").style.border = "2px solid red";
    document.querySelector(".errorBOD").style.display = "block";
  }
  // check location radiobuttons
  else if (location.length === 0) {
    alert("Vous devez choisir une option.");
    console.log("Please select at least one location");
    document.querySelector(".errorLocation").style.display = "block";
  }
  // check tournament quantity
  else if (tourQuantity == "") {
    alert("Please enter a number");
    console.log("Please enter a number");
    document.querySelector("#quantity").style.border = "2px solid red";
    document.querySelector(".errorQuantity").style.display = "block";
  } else if (tourQuantity < 0) {
    alert("Please enter a positive number");
    console.log("Please enter a positive number");
    document.querySelector("#quantity").style.border = "2px solid red";
    document.querySelector(".errorQuantity").style.display = "block";
  } else if (tourQuantity > 99) {
    alert("Please enter a number between 0 and 99");
    console.log("Please enter a number between 0 and 99");
    document.querySelector("#quantity").style.border = "2px solid red";
    document.querySelector(".errorQuantity").style.display = "block";
  }
  // check terms of use
  else if (document.getElementById("checkbox1").checked == false) {
    alert("You must accept the terms of use");
    console.log("You must accept the terms of use");
  }
  // closes the form if all fields are filled
  else {
    alert("Form Submitted Successfully");
    console.log("Form Submitted Successfully");
    launchValidation();
  }
}
