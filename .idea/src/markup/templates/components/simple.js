// This file was automatically generated from simple.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace templates.components.simple.
 */

if (typeof templates == 'undefined') { var templates = {}; }
if (typeof templates.components == 'undefined') { templates.components = {}; }
if (typeof templates.components.simple == 'undefined') { templates.components.simple = {}; }


templates.components.simple.view = function(opt_data, opt_ignored) {
  var output = '<div id="carousel" class="content__carousel"><button class="content__carousel-arrow previous">\u21E6</button><div class="gallery"><ul class="galery__images">';
  var itemList4 = opt_data.carousel;
  var itemListLen4 = itemList4.length;
  for (var itemIndex4 = 0; itemIndex4 < itemListLen4; itemIndex4++) {
    var itemData4 = itemList4[itemIndex4];
    output += templates.components.simple.carouselItem({class: ' ' + soy.$$escapeHtml(itemData4['class']) + ' '});
  }
  output += '</ul></div><button class="content__carousel-arrow following">\u21E8</button></div>';
  return output;
};
if (goog.DEBUG) {
  templates.components.simple.view.soyTemplateName = 'templates.components.simple.view';
}


templates.components.simple.carouselItem = function(opt_data, opt_ignored) {
  return '<li><div class="galery__images-item ' + soy.$$escapeHtml(opt_data['class']) + '"></div></li>';
};
if (goog.DEBUG) {
  templates.components.simple.carouselItem.soyTemplateName = 'templates.components.simple.carouselItem';
}
