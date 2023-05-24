let navMain = document.querySelector(".site-nav");
let navToggle = document.querySelector(".site-nav__toggle");
let header = document.querySelector(".main-header");

navMain.classList.remove("site-nav--nojs");
navMain.classList.add("site-nav--closed");
navMain.classList.remove("site-nav--opened");
header.classList.remove("main-header--nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("site-nav--closed")) {
    navMain.classList.remove("site-nav--closed");
    navMain.classList.add("site-nav--opened");
  } else {
    navMain.classList.add("site-nav--closed");
    navMain.classList.remove("site-nav--opened");
  }
});
