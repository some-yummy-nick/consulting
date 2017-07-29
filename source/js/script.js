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

function initMap() {
  var centerLatLng = new google.maps.LatLng(55.8151047,37.5977991);
  var mapOptions = {
    center: centerLatLng,
    zoom: 15
  };

  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // Добавляем маркер
  var marker = new google.maps.Marker({
    position: centerLatLng,              // Координаты расположения маркера. В данном случае координаты нашего маркера совпадают с центром карты, но разумеется нам никто не мешает создать отдельную переменную и туда поместить другие координаты.
    map: map,                            // Карта на которую нужно добавить маркер
    icon: "data:image/png;base64,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"
  });
}
google.maps.event.addDomListener(window, "load", initMap);