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
const modalCloseBtn = document.querySelector(".close");
const firstname = document.querySelector("#first");
const lastname = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const town = document.getElementsByName('location');
const firstnameDataError = document.querySelector(".formData[data-error]");
const lastnameDataError = document.querySelector(".formData[data-error1]");
const emailDataError = document.querySelector(".formData[data-error2");
const birthdateDataError = document.querySelector(".formData[data-error3");
const quantityDataError = document.querySelector(".formData[data-error4]");
const locationDataError = document.querySelector(".formData[data-error5]");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
modalCloseBtn.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// control fistname input
function firstNameValidity() {
  if (firstname.validity.valid) {
    alert("firstname.validity.valid Ok");
    firstnameDataError.removeAttribute("data-error-visible");    
    return true;  }
  if (!firstname.validity.valid) {   
    
    alert("firstname.validity.valid non Ok");    
    firstnameDataError.setAttribute("data-error", "Erreur sur le prénom"); 
    firstnameDataError.setAttribute("data-error-visible", "true");      
    firstname.focus();    
    return false;
  }
}

// control lastname input
function lastNameValidity() {  
  if (lastname.validity.valid) {  
    alert("lastname.validity.valid Ok");   
    removeError(lastnameDataError);
    return true;
  }  
  if (!lastname.validity.valid) {        
    alert("lastname.validity.valid non Ok");
    lastnameDataError.setAttribute("data-error", "Erreur sur le nom");   
    lastnameDataError.setAttribute("data-error-visible", "true");                       
    lastname.focus();    
    return false;
  }
}

// control email input
function emailValidity() {  
  if (email.validity.valid) {
    alert("email.validity OK");
    removeError(emailDataError);
    return true;
  }
  if (!email.validity.valid) {
    alert("email.validity.valid non Ok");
    emailDataError.setAttribute("data-error", "Erreur sur le mail");
    emailDataError.setAttribute("data-error-visible", "true");     
    email.focus();
    return false;
  }
}

// control birthdate input
function birthdateValidity() {  
  if (birthdate.validity.valid) {
    alert("birthdate.validity Ok");
    removeError(birthdateDataError);
    return true;
  }
  if (!birthdate.validity.valid) {
    alert("birthdate.validity.valid non Ok");
    birthdateDataError.setAttribute("data-error", "Erreur sur la date de naissance");
    birthdateDataError.setAttribute("data-error-visible", "true");   
    birthdate.focus();         
    return false;
  }
}

// control quantity input
function quantityValidity() {  
  if (quantity.validity.valid) {
    alert("quantity.validity Ok");
    removeError(quantityDataError);
    return true;
  }
  if (!quantity.validity.valid) {
    alert("quantity.validity.valid non Ok");
    quantityDataError.setAttribute("data-error", "Une quantité est demandé");
    quantityDataError.setAttribute("data-error-visible", "true");   
    quantity.focus();       
    return false;
  }
}

// control location input
function locationValidity() {  
  const town = document.querySelector('input[name=location]:checked'); 
  if (town !== null) {
    alert("town Ok");
    removeError(locationDataError);
    return true;
  }
  if (town === null) {
    alert("town.validity.valid non Ok");
    locationDataError.setAttribute("data-error", "Une ville doit être indiquée");
    locationDataError.setAttribute("data-error-visible", "true");     
    return false;
  }
}  

// remove errors
function removeError(el) {
  el.removeAttribute("data-error-visible");
  el.removeAttribute("data-error");
}

// form validation function
function validate() {        
  firstNameValidity(); 
  lastNameValidity(); 
  emailValidity();  
  birthdateValidity(); 
  quantityValidity(); 
  locationValidity();  

  if (!firstNameValidity() || !lastNameValidity() || !emailValidity()
    || !birthdateValidity() || !quantityValidity() || !locationValidity())   { 
    alert("Veuillez compléter le formulaire");
    return false;
  } else {
    alert("Formulaire complété");
  }
}
