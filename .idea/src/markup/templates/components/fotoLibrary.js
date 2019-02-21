// This file was automatically generated from fotoLibrary.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace templates.components.fotoLibrary.
 */

if (typeof templates == 'undefined') { var templates = {}; }
if (typeof templates.components == 'undefined') { templates.components = {}; }
if (typeof templates.components.fotoLibrary == 'undefined') { templates.components.fotoLibrary = {}; }


templates.components.fotoLibrary.fotoLibrary = function(opt_data, opt_ignored) {
  var output = '<div id="box3" class="foto_library contents">';
  var itemList4 = opt_data.fotoLibrar;
  var itemListLen4 = itemList4.length;
  for (var itemIndex4 = 0; itemIndex4 < itemListLen4; itemIndex4++) {
    var itemData4 = itemList4[itemIndex4];
    output += templates.components.fotoLibrary.album({nameAlbum: itemData4.nameAlbum, fonAlbum: itemData4.fonAlbum, fotoAlbum: itemData4.fotoAlbum});
  }
  output += '</div>';
  return output;
};
if (goog.DEBUG) {
  templates.components.fotoLibrary.fotoLibrary.soyTemplateName = 'templates.components.fotoLibrary.fotoLibrary';
}


templates.components.fotoLibrary.album = function(opt_data, opt_ignored) {
  var output = '<div  class="album ' + soy.$$escapeHtml(opt_data.fonAlbum) + '"><div  class="show_popup view_popap "  href="">' + soy.$$escapeHtml(opt_data.nameAlbum) + '</div><div class="popup-wrapper"><div class="popup photo_win "><div class="popup__close" href="#">Close</div><h2>\u0413\u0430\u043B\u0435\u0440\u0435\u044F</h2><div class="popup__images "><div class="bootom_popup pre"></div><div class="repository" id="content"><ul class="repository__img ">';
  if (opt_data.fotoAlbum) {
    var itemList19 = opt_data.fotoAlbum;
    var itemListLen19 = itemList19.length;
    for (var itemIndex19 = 0; itemIndex19 < itemListLen19; itemIndex19++) {
      var itemData19 = itemList19[itemIndex19];
      output += templates.components.fotoLibrary.nameImg({nameFoto: itemData19.nameFoto});
    }
  }
  output += '</ul></div><div class="bootom_popup nex"></div></div></div></div></div>';
  return output;
};
if (goog.DEBUG) {
  templates.components.fotoLibrary.album.soyTemplateName = 'templates.components.fotoLibrary.album';
}


templates.components.fotoLibrary.nameImg = function(opt_data, opt_ignored) {
  return '<li><div class="popup__img-item ' + soy.$$escapeHtml(opt_data.nameFoto) + '"> </div></li>';
};
if (goog.DEBUG) {
  templates.components.fotoLibrary.nameImg.soyTemplateName = 'templates.components.fotoLibrary.nameImg';
}
