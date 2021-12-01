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
const firstnameDataError = document.querySelector(".formData[data-error]");
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

// buttons modal endForm
document.querySelector(".endFormBtn1").addEventListener("click", closeEndForm);
document.querySelector(".endFormBtn2").addEventListener("click", cancelEndForm);

function closeEndForm() {
  document.getElementById("reserve").submit();
  modalEndForm.style.display = "none";
}

function cancelEndForm() {
  modalEndForm.style.display = "none";
  modalbg.style.display = "block";
}

// launch modal endForm
document.querySelector(".btn-submit").addEventListener("click", launchEndForm);

function launchEndForm(e) {  
  e.preventDefault();  
  if (validate()) {
    modalbg.style.display = "none";
    modalEndForm.style.display = "block";  
    document.getElementById('myTopnav').scrollTop = 0;
    for (const item of modalBtn) {
      item.disabled = true;      
    }    
  }  
}

// listen firstname input
firstname.addEventListener("input", firstnameValue);
function firstnameValue() {
   firstNameValidity();  
}
  // control fistname input
  function firstNameValidity() {
    if (firstname.validity.valid) {    
   //   alert("firstname.validity.valid Ok");
      firstnameDataError.removeAttribute("data-error-visible");
      return true;
    }
    if (!firstname.validity.valid) {  
   //    alert("firstname.validity.valid non Ok");    
      firstnameDataError.setAttribute("data-error", "Erreur sur le prénom");
      firstnameDataError.setAttribute("data-error-visible", "true");
      firstname.focus();
      return false;
    }
  }

// listen lastname input
lastname.addEventListener("input", lastnameValue);
function lastnameValue() {
  lastNameValidity();
}

  // control lastname input
  function lastNameValidity() {
    if (lastname.validity.valid) {
   //   alert("lastname.validity.valid Ok");   
      removeError(lastnameDataError);
      return true;
    }   
      if (!lastname.validity.valid) {
     //   alert("lastname.validity.valid non Ok");
        lastnameDataError.setAttribute("data-error", "Erreur sur le nom");
        lastnameDataError.setAttribute("data-error-visible", "true");
        lastname.focus();
        return false;
      }
    }
  
// listen email input
email.addEventListener("input", emailValue);
function emailValue() {
  emailValidity();
}

  // control email input
function emailValidity() { 
    if (email.validity.valid) {
     // alert("email.validity OK");
      removeError(emailDataError);
      return true;
    }  
    if (!email.validity.valid) {
    //  alert("email.validity.valid non Ok");
      emailDataError.setAttribute("data-error", "Erreur sur le mail");
      emailDataError.setAttribute("data-error-visible", "true");
      email.focus();
      return false;
    }  
  }

  // listen bithdate input
  birthdate.addEventListener("change", birthdateValue);
  function birthdateValue() {
    birthdateValidity();
  }

  // control birthdate input
  function birthdateValidity() {
    if (birthdate.validity.valid) {
    //  alert("birthdate.validity Ok");
      removeError(birthdateDataError);
      return true;
    }
    if (!birthdate.validity.valid) {    
   //   alert("birthdate.validity.valid non Ok");
      birthdateDataError.setAttribute("data-error", "Erreur sur la date de naissance");
      birthdateDataError.setAttribute("data-error-visible", "true");
      birthdate.focus();
      return false;
    }
}
  
// listen quantity input
quantity.addEventListener("input", quantityValue);
function quantityValue() {
  quantityValidity();
}
  // control quantity input
  function quantityValidity() {
    if (quantity.validity.valid) {
    //  alert("quantity.validity Ok");
      removeError(quantityDataError);
      return true;
    }
    if (!quantity.validity.valid) {
   //  alert("quantity.validity.valid non Ok");
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
  //    alert("town Ok");
      removeError(locationDataError);
      return true;
    }
    if (town === null) {
   //   alert("town.validity.valid non Ok");
      locationDataError.setAttribute("data-error", "Une ville doit être indiquée");
      locationDataError.setAttribute("data-error-visible", "true");
      return false;
    }
}

checkboxInput.addEventListener("change", checkboxValue);
function checkboxValue() {
  checkboxValidity();
}
  // control checkbox input
function checkboxValidity() {  
    if (checkboxInput.validity.valid) {
   //   alert("checkboxInput Ok");
      removeError(checkboxDataMissing);
      return true;
    }
    if (!checkboxInput.validity.valid) {
    //  alert("checkbox.validity.valid Non Ok");
      checkboxDataMissing.setAttribute("data-error", "Veuillez accepter les conditions");
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
