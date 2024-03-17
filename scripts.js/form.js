//Lors du click de submit du formulaire, on vérifie les champs et on affiche un message d'erreur si nécessaire
document
  .querySelector("#formulaire")
  .addEventListener("submit", function (event) {
    // empeche le default behaviour du formulaire lors du submit en cas derreur -> il ne refraichit pas la page
    event.preventDefault();
    // je declare autant de variables que de champs a verifier ainsi qu'aucune erreur by default

    // valeur initial de errors est false
    var errors = false;

    // declaration des differents regex utiliser pour verifier les champs du formulaire
    var regexNames =
      /^[a-zA-Z\xC0-\uFFFF]+([ \-']{0,1}[a-zA-Z\xC0-\uFFFF]+){0,2}[.]{0,1}$/;
    var regexNum = /^(?:[0-9]|[1-8][0-9]|9[0-9]?)$/;
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var regexDOB =
      /(?:\d{1,2}[-/\s]\d{1,2}[-/\s]'?\d{2,4})|(?:\d{2,4}[-/\s]\d{1,2}[-/\s]\d{1,2})|(?:(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)[\s-/,]*?\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*[-/,]?(?:\s)*'?\d{2,4})|(?:\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)(?:\s)*?[-/,]?(?:\s)*'?\d{2,4})/;

    // je declare les variables pour chaque champ du formulaire
    var first = document.querySelector("#first");
    var last = document.querySelector("#last");
    var email = document.querySelector("#email");
    var birthdate = document.querySelector("#birthdate");
    var quantity = document.querySelector("#quantity");
    var location = document.querySelectorAll('input[name="location"]');
    var locationChecked = false;
    var termsCheckbox = document.querySelector("#checkbox1");

    // je verifie chaque champ et affiche un message derreur si necessaire
    // si le champ est valide, je cache le message derreur

    // check first name
    if (first.value.trim().length < 2 || !regexNames.test(first.value.trim())) {
      document.querySelector(".errorFirst").style.display = "inline";
      errors = true;
    } else {
      document.querySelector(".errorFirst").style.display = "none";
    }

    // check last name
    if (last.value.trim().length < 2 || !regexNames.test(last.value.trim())) {
      document.querySelector(".errorLast").style.display = "inline";
      errors = true;
    } else {
      document.querySelector(".errorLast").style.display = "none";
    }

    //check email
    if (
      email.value.trim().length < 2 ||
      !email.validity.valid ||
      !regexEmail.test(email.value)
    ) {
      document.querySelector(".errorEmail").style.display = "inline";
      errors = true;
    } else {
      document.querySelector(".errorEmail").style.display = "none";
    }

    // check birthdate
    if (birthdate.value.trim().length < 2 || !regexDOB.test(birthdate.value)) {
      document.querySelector(".errorBOD").style.display = "inline";
      errors = true;
    } else {
      document.querySelector(".errorBOD").style.display = "none";
    }

    // check tournament quantity
    if (
      quantity.value.trim().length < 1 ||
      isNaN(quantity.value) ||
      quantity.value < 0 ||
      quantity.value > 99 ||
      !regexNum.test(quantity.value)
    ) {
      document.querySelector(".errorQuantity").style.display = "inline";
      errors = true;
    } else {
      document.querySelector(".errorQuantity").style.display = "none";
    }

    // check location radiobuttons
    for (var i = 0; i < location.length; i++) {
      if (location[i].checked) {
        locationChecked = true;
      }
    }

    if (!locationChecked) {
      document.querySelector(".errorLocation").style.display = "inline";
      errors = true;
    } else {
      document.querySelector(".errorLocation").style.display = "none";
    }

    // check terms of use
    if (!termsCheckbox.checked) {
      document.querySelector(".errorCheckbox").style.display = "block";
      errors = true;
    } else {
      document.querySelector(".errorCheckbox").style.display = "none";
    }

    // si aucune erreur, je lance la validation avec la fonction launchValidation (qui cache le formulaire et affiche le message de validation)
    if (!errors) {
      launchValidation();
    }

    // je retourne si il y a des erreurs ou non
    return !errors;
  });

// // empeche le default behaviour du formulaire lors du submit en cas derreur -> il ne refraichit pas la page
// let formulaire = document.getElementById("formulaire");
// formulaire.addEventListener("submit", function (e) {
//   e.preventDefault();
//   checkLocation();
//   launchValidation();
// });

// // check location radio button
// function checkLocation() {
//   const location = document.querySelectorAll('input[type="radio"]:checked'); //retrieve location
//   const errorLocation = document.querySelector(".errorLocation");
//   if (location.length === 0) {
//     errorLocation.style.display = "block";
//     alert("Vous devez choisir une option.");
//     // console.log("Please select at least one location");
//     // document.querySelector(".errorLocation").style.display = "block";
//   }
// }

// // verification contenu formulaire
// // function validateInput() {
// //   var fname = document.getElementById("first").value; //retrieve first name value
// //   var lname = document.getElementById("last").value; //retrieve last name value
// //   var email = document.getElementById("email").value; //retrieve email value
// //   var emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i; //regex for email
// //   var birthday = document.getElementById("birthdate").value; //retrieve birthdate value
// //   var tourQuantity = document.getElementById("quantity").value; //retrieve tournament quantity value
// //   var location = document.querySelectorAll('input[type="radio"]:checked'); //retrieve location

// //   // check first name
// //   if (fname == "" || fname.length < 2 || fname.search(/^[a-zA-Z]+$/) == -1) {
// //     alert("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
// //     console.log("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
// //     // document.querySelector("#first").style.border = "2px solid red";
// //     // document.querySelector(".errorFirst").style.display = "block";
// //   }
// //   // check last name
// //   else if (
// //     lname == "" ||
// //     lname.length < 2 ||
// //     lname.search(/^[a-zA-Z]+$/) == -1
// //   ) {
// //     alert("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
// //     console.log("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
// //     // document.querySelector("#last").style.border = "2px solid red";
// //     // document.querySelector(".errorLast").style.display = "block";
// //   }
// //   //check email
// //   else if (email == "") {
// //     alert("Veuillez entrer une adresse email valide.");
// //     console.log("Please Enter Email");
// //     // document.querySelector("#email").style.border = "2px solid red";
// //     // document.querySelector(".errorEmail").style.display = "block";
// //   } else if (email.search(emailRegEx) == -1) {
// //     alert("Veuillez entrer une adresse email valide.");
// //     console.log("Please enter a valid email address.");
// //     // document.querySelector("#email").style.border = "2px solid red";
// //     // document.querySelector(".errorEmail").style.display = "block";
// //   }
// //   // check birthdate
// //   else if (!birthday) {
// //     alert("Vous devez entrer votre date de naissance.");
// //     console.log("Please select Birth Date");
// //     // document.querySelector("#birthdate").style.border = "2px solid red";
// //     // document.querySelector(".errorBOD").style.display = "block";
// //   }
// //   // check location radiobuttons
// //   else if (location.length === 0) {
// //     alert("Vous devez choisir une option.");
// //     // console.log("Please select at least one location");
// //     // document.querySelector(".errorLocation").style.display = "block";
// //   }
// //   // check tournament quantity
// //   else if (tourQuantity == "") {
// //     alert("Please enter a number");
// //     console.log("Please enter a number");
// //     // document.querySelector("#quantity").style.border = "2px solid red";
// //     // document.querySelector(".errorQuantity").style.display = "block";
// //   } else if (tourQuantity < 0) {
// //     alert("Please enter a positive number");
// //     console.log("Please enter a positive number");
// //     // document.querySelector("#quantity").style.border = "2px solid red";
// //     // document.querySelector(".errorQuantity").style.display = "block";
// //   } else if (tourQuantity > 99) {
// //     alert("Please enter a number between 0 and 99");
// //     console.log("Please enter a number between 0 and 99");
// //     // document.querySelector("#quantity").style.border = "2px solid red";
// //     // document.querySelector(".errorQuantity").style.display = "block";
// //   }
// //   // check terms of use
// //   else if (document.getElementById("checkbox1").checked == false) {
// //     alert("You must accept the terms of use");
// //     console.log("You must accept the terms of use");
// //   }
// //   // closes the form if all fields are filled
// //   else {
// //     alert("Form Submitted Successfully");
// //     console.log("Form Submitted Successfully");
// //     launchValidation();
// //   }
// // }
