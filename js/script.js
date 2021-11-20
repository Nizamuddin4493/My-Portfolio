const popupArr = [
  {
    title: 'Profesional Art Printing Data More',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    piture: './images/Tags.png',
  },
  {
    title: 'Data Dashboard healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    piture: './images/Tags.png',
  },
  {
    title: 'Awesome Website Portfolio Design',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    piture: './images/Tags.png',
  },
  {
    title: 'Profesional Art Printing Data More',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    piture: './images/Tags.png',
  },
  {
    title: 'Data Dashboard healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    piture: './images/Tags.png',
  },
  {
    title: 'Awesome Website Portfolio Design',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    piture: './images/Tags.png',
  },
];

const cartsContainer = document.querySelector('#cartsContainer');
const menu = document.querySelector('.burger-icon');
const menuBody = document.querySelector('.menu');
const close = document.querySelector('.close_btn');
const clsoePopupBtn = document.querySelector('.popup_close');
const popup = document.querySelector('.popup');
const menuM = document.querySelector('.burger-icon');
const menuBody = document.querySelector('.menu');
const close = document.querySelector('.close_btn');
const portfolio = document.querySelector('#portfolio');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');

const closeMenu = () => {
  menuBody.classList.toggle('invisible');
};

const closePopup = () => {
  popup.classList.toggle('invisible');
};

menuM.addEventListener('click', () => {
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

const popelement = (cartDesign) => {
  const cardDiv = document.createElement('div');
  const cardH2 = document.createElement('h2');
  const cardP = document.createElement('p');
  const cardDiv2 = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardBtn = document.createElement('button');
  cardDiv.classList = 'cart-2';
  cardBtn.classList = 'card-btn-2';
  cardH2.textContent = cartDesign.title;
  cardP.textContent = cartDesign.description;
  cardImg.srcset = cartDesign.piture;
  cardBtn.textContent = 'See Project';
  cardBtn.setAttribute('onclick', 'closePopup()');
  cardDiv.appendChild(cardH2);
  cardDiv.appendChild(cardP);
  cardDiv.appendChild(cardDiv2);
  cardDiv.appendChild(cardBtn);
  cardDiv2.appendChild(cardImg);
  cartsContainer.appendChild(cardDiv);
};

popupArr.forEach((element) => {
  popelement(element);
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

