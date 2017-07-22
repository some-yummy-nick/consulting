module.exports = {
  plugins: [
    require('autoprefixer')({}),
    require('postcss-easysprites')({
      imagePath: 'source/images/',
      spritePath: 'source/images'
    }),
    require('postcss-line-height-px-to-unitless')(), //line-height из px в число
    require('postcss-inline-svg')(), //вставка svg в css
    require('postcss-filter-gradient'),//поддержка градиентов ниже ie9
    require("postcss-color-rgba-fallback"),//добавляет цвет если нет поддержки прозрачности
    require('postcss-rgb-plz'),//конвертирует hex в rgb
    require('postcss-object-fit-images'),
    require('postcss-assets')({
      loadPaths: ['source/images/base64']
    }),
    require('css-mqpacker')({
      sort: true
    })
  ]
}