import '../scss/style.scss';
import links from "./links";
import objectFit from "./objectFit";
import menu from "./menu";
import scroll from "./scroll";
import map from "./map";

map();
scroll();
menu();
objectFit();
links();

if ($(window).width() < 680) {
  $('.features__items').slick();
}

$('.clients__items').slick({
  centerMode: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

var headerItem = document.querySelectorAll(".header__item--submenu");
headerItem.forEach(function (item, i, arr) {
  item.addEventListener("click", function () {
    let submenu = item.querySelector(".header__submenu");
    submenu.classList.toggle("js-hided");
  });
});
