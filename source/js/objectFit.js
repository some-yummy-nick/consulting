import objectFitImages from 'object-fit-images';

export default function objectFit() {
  var objectFitImages = require('object-fit-images');
  var someImages = document.querySelectorAll('img');
  objectFitImages(someImages);
}