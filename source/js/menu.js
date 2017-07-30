export default function menu() {
  var menuIcon = document.querySelector(".header__menu-icon"),
    menu = document.querySelector(".header__menu"),
    headerForm = document.querySelector(".header__form"),
    success = document.querySelector(".header__success"),
    successClose = document.querySelector(".header__success-close"),
    contactIcon = document.querySelector(".header__contact-icon"),
    headerBtn = document.querySelector(".header__btn"),
    overlay = document.querySelector(".overlay"),
    popupClose = document.querySelector(".header__popup-close"),
    popup = document.querySelector(".header__popup");

  menuIcon.addEventListener("click", function () {
    menu.classList.toggle("js-hided");
  });
  contactIcon.addEventListener("click", function () {
    popup.classList.toggle("js-hided");
  });
  headerBtn.addEventListener("click", function () {
    popup.classList.toggle("js-hided");
    overlay.style.height = 100 + "%";
  });
  popupClose.addEventListener("click", function () {
    popup.classList.add("js-hided");
    overlay.style.height = 0;
  });
  headerForm.addEventListener("submit", function (e) {
    popup.classList.add("js-hided");
    success.classList.remove("js-hided");
    overlay.style.height = 100 + "%";
    e.preventDefault();
  });
  successClose.addEventListener("click", function () {
    success.classList.add("js-hided");
    overlay.style.height = 0;
  });
}