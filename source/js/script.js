import '../scss/style.scss';
import links from "./links";
import objectFit from "./objectFit";
import menu from "./menu";
menu();
objectFit();
links();

if ($(window).width() < 680) {
  $('.features__items').slick();
}