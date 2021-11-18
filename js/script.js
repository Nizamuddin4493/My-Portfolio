const menu = document.querySelector('.burger-icon');

const menuBody = document.querySelector('.menu');

const close = document.querySelector('.close_btn');

const clsoePopupBtn = document.querySelector('.popup_close');

const popup = document.querySelector('.popup');

const portfolio = document.querySelector('#portfolio');

const about = document.querySelector('#about');

const contact = document.querySelector('#contact');

const closeMenu = () => {
  menuBody.classList.toggle('invisible');
};

const closePopup = () => {
  popup.classList.toggle('invisible');
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

clsoePopupBtn.addEventListener('click', () => {
  closePopup();
});
