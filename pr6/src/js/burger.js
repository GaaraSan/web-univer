const burger_button = document.querySelector(".burger");
const burger_main = document.querySelector(".main-page");
const burger_bio = document.querySelector(".biography-page");
const burger_achiev = document.querySelector(".achievements-page");
const burger_books = document.querySelector(".books-page");
const nav_hiden = document.querySelector(".nav-hiden");

burger_button.addEventListener("click", () => {
  nav_hiden.classList.toggle("nav-hiden");
});
