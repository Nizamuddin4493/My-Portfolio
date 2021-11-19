const menu = document.querySelector('.burger-icon');
const menuBody = document.querySelector('.menu');
const close = document.querySelector('.close_btn');

const portfolio = document.querySelector('#portfolio');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');

const closeMenu = () => {
  menuBody.classList.toggle('invisible');
};

menu.addEventListener('click', () => {
  closeMenu();
});

close.addEventListener('click', () => {
  closeMenu();
});

portfolio.addEventListener('click', () => {
  closeMenu();
});

about.addEventListener('click', () => {
  closeMenu();
});

contact.addEventListener('click', () => {
  closeMenu();
});

// Code for Form Validation

const setError = (error) => {
  document.querySelector('.formError').innerHTML = error;
};

const validateForm = () => {
  let returnVal = true;
  const email = document.querySelector('#f-email').value;
  if (email === email.toLowerCase()) {
    return returnVal;
  }
  if (email !== email.toLowerCase()) {
    setError('* Please make sure the Email is in Lower Case');
    returnVal = false;
  }
  return returnVal;
};

validateForm();
