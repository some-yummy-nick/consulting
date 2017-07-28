export default function menu() {
  var menuIcon = document.querySelector(".header__menu-icon"),
    menu = document.querySelector(".header__menu"),
    contactIcon = document.querySelector(".header__contact-icon"),
    popup = document.querySelector(".header__popup");

  menuIcon.addEventListener("click", function () {
    menu.classList.toggle("js-hided");
  });
  contactIcon.addEventListener("click", function () {
    popup.classList.toggle("js-hided");
  });
}