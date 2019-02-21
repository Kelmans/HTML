// This file was automatically generated from comments.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace templates.components.comments.
 */

if (typeof templates == 'undefined') { var templates = {}; }
if (typeof templates.components == 'undefined') { templates.components = {}; }
if (typeof templates.components.comments == 'undefined') { templates.components.comments = {}; }


templates.components.comments.comment = function(opt_data, opt_ignored) {
  var output = '<div class="comments contents"><div class="comments__headline"><h1>\u041E\u0422\u0417\u042B\u0412\u042B</h1></div><div  class="comments__repository">';
  var itemList4 = opt_data.comments;
  var itemListLen4 = itemList4.length;
  for (var itemIndex4 = 0; itemIndex4 < itemListLen4; itemIndex4++) {
    var itemData4 = itemList4[itemIndex4];
    output += templates.components.comments.commentItem({baseClass: ' ' + soy.$$escapeHtml(itemData4.baseClass) + ' ', classAvatar: ' ' + soy.$$escapeHtml(itemData4.classAvatar) + ' ', headlineText: ' ' + soy.$$escapeHtml(itemData4.headlineText) + ' ', text: ' ' + soy.$$escapeHtml(itemData4.text) + ' '});
  }
  output += '</div><input type="button"  name="buttonShow" class="show-more" value="Show More" ></div>';
  return output;
};
if (goog.DEBUG) {
  templates.components.comments.comment.soyTemplateName = 'templates.components.comments.comment';
}


templates.components.comments.commentItem = function(opt_data, opt_ignored) {
  return '<div class="' + soy.$$escapeHtml(opt_data.baseClass) + '"><div class="' + soy.$$escapeHtml(opt_data.classAvatar) + '"> </div><div class="comment__text"> <h5>' + soy.$$escapeHtml(opt_data.headlineText) + '</h5><p>' + soy.$$escapeHtml(opt_data.text) + '</p> </div></div>';
};
if (goog.DEBUG) {
  templates.components.comments.commentItem.soyTemplateName = 'templates.components.comments.commentItem';
}
