let menu = document.querySelector(".burger-icon");
let menuBody = document.querySelector(".menu")
let close = document.querySelector(".close_btn");

let portfolio = document.querySelector("#portfolio");
let about = document.querySelector("#about");
let contact = document.querySelector("#contact");

menu.addEventListener("click", () => {
    close_menu();
});

close.addEventListener("click", () => {
    close_menu();
});

portfolio.addEventListener("click", () => {
    close_menu();
});

about.addEventListener("click", () => {
    close_menu();
});

contact.addEventListener("click", () => {
    close_menu();
});

const close_menu = () => {
    menuBody.classList.toggle("invisible");
};

// Code for Form Validation

const setError =  (error) => {
  let element = document.querySelector('.formError').innerHTML = error;
}

const validateForm = () => {
  let returnVal = true;
  let email = document.forms['portfolioForm']['email-address'].value;
  if (email === email.toLowerCase()) {
    return returnVal;
  } else {
    setError('* Please make sure the Email is in Lower Case');
    returnVal = false;
  }
  return returnVal;
}
