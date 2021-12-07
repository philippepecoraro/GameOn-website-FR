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
const modalEndForm = document.querySelector(".endForm");
const firstname = document.querySelector("#first");
const lastname = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const checkboxInput = document.querySelector("#checkbox1");
const firstnameDataError = document.querySelector(".formData[data-error0]");
const lastnameDataError = document.querySelector(".formData[data-error1]");
const emailDataError = document.querySelector(".formData[data-error2");
const birthdateDataError = document.querySelector(".formData[data-error3");
const quantityDataError = document.querySelector(".formData[data-error4]");
const locationDataError = document.querySelector(".formData[data-error5]");
const checkboxDataMissing = document.querySelector(".formData[data-error6]");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
document.querySelector(".close").addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
  document.getElementById('reserve').reset();   
  for (const item of formData) {    
    item.removeAttribute("data-error");
    item.removeAttribute("data-error-visible");
  }
  for (const item of modalBtn) {
    item.disabled = false;    
  }    
}

// close modal endForm
function closeEndForm() {
 document.getElementById("reserve").submit();
  modalEndForm.style.display = "none";
}

// launch modal endForm
document.querySelector(".btn-submit").addEventListener("click", launchEndForm);

function launchEndForm(e) {  
  e.preventDefault();  
  if (validate()) {
    modalbg.style.display = "none";
    modalEndForm.style.display = "block";
    window.scrollTo(0, 0);
    setTimeout(closeEndForm, 3000);
    for (const item of modalBtn) {
      item.disabled = true;
    }
  }  
}          

// listen firstname input
firstname.addEventListener("input", firstNameValidity);

// control fistname input
function firstNameValidity() {
  if (firstname.validity.valid) {       
    removeError(firstnameDataError);
    return true;
  }
  if (!firstname.validity.valid) {       
    firstnameDataError.setAttribute("data-error", "Veuillez entrer un minimum de 2 caractères pour le champ du prénom");
    firstnameDataError.setAttribute("data-error-visible", "true");
    firstname.focus();
    return false;
  }
}

// listen lastname input
lastname.addEventListener("input", lastNameValidity);

// control lastname input
function lastNameValidity() {
  if (lastname.validity.valid) {    
    removeError(lastnameDataError);
    return true;
  }   
   if (!lastname.validity.valid) {     
      lastnameDataError.setAttribute("data-error", "Veuillez entrer un minimum de 2 caractères pour le champ du nom");
      lastnameDataError.setAttribute("data-error-visible", "true");
      lastname.focus();
      return false;
   }
}
  
// listen email input
email.addEventListener("input", emailValidity);

// control email input
function emailValidity() { 
  if (email.validity.valid) {    
      removeError(emailDataError);
      return true;
  }  
  if (!email.validity.valid) {   
      emailDataError.setAttribute("data-error", "Veuillez entrer une adresse mail correct");
      emailDataError.setAttribute("data-error-visible", "true");
      email.focus();
      return false;
  }  
}

// listen birthdate input
birthdate.addEventListener("change", birthdateValidity);

// control birthdate input
function birthdateValidity() {
  if (birthdate.validity.valid) {  
    removeError(birthdateDataError);
    return true;
  }
  if (!birthdate.validity.valid) {      
    birthdateDataError.setAttribute("data-error", "Vous devez entrer votre date de naissance");
    birthdateDataError.setAttribute("data-error-visible", "true");
    birthdate.focus();
    return false;
  }
}
  
// listen quantity input
quantity.addEventListener("input", quantityValidity);

// control quantity input
function quantityValidity() {
  if (quantity.validity.valid) {    
    removeError(quantityDataError);
    return true;
  }
  if (!quantity.validity.valid) {   
    quantityDataError.setAttribute("data-error", "Une quantité entre 0 et 99 est demandé");
    quantityDataError.setAttribute("data-error-visible", "true");
    quantity.focus();
    return false;
  }
  }

// listen location input  
const townInput = document.querySelectorAll("input[name=location]");
townInput.forEach((locationInput) => locationInput.addEventListener("input", locationValidity));

// control location input
function locationValidity() {
  const town = document.querySelector('input[name=location]:checked');    
  if (town !== null) {  
    removeError(locationDataError);    
    return true;
  }
  if (town === null) {   
    locationDataError.setAttribute("data-error", "Vous devez choisir une option");
    locationDataError.setAttribute("data-error-visible", "true");    
    return false;
  }  
}

// listen checkbox input
checkboxInput.addEventListener("change", checkboxValidity);

// control checkbox input
function checkboxValidity() {  
  if (checkboxInput.validity.valid) {  
    removeError(checkboxDataMissing);
    return true;
  }
  if (!checkboxInput.validity.valid) {   
    checkboxDataMissing.setAttribute("data-error", "Vous devez vérifier que vous acceptez les termes et conditions");
    checkboxDataMissing.setAttribute("data-error-visible", "true");
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
  if (firstNameValidity() && lastNameValidity() && emailValidity()
    && birthdateValidity() && quantityValidity() && locationValidity()
    && checkboxValidity()) {   
      return true;     
    }
     else {      
      return false;
    }
}
