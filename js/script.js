let menu = document.querySelector(".burger-icon");
let menuBody = document.querySelector(".menu")
let close = document.querySelector(".close_btn");
let clsoePopupBtn = document.querySelector(".popup_close");
let popup = document.querySelector(".popup");

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

clsoePopupBtn.addEventListener("click", () => {
    close_popup();
});

const close_menu = () => {
    menuBody.classList.toggle("invisible");
};

const close_popup = () => {
    popup.classList.toggle("invisible");
};
