this.JST = {"views/header/header": function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="header__menu bg__projects-color">\n  <p class="menu--title"> Menu</p>\n</div>\n\n\n<div class="header__logo col-xs-12">\n  <h2>ADERINSOLA</h2>\n</div>\n\n\n<div class="header__navbar col-xs-12">\n  <div id="about" class="button navigation-button">\n    <h5> about </h5>\n  </div>\n  <div id="process" class="button navigation-button">\n    <h5>process</h5>\n  </div>\n  <div id="contact" class="button navigation-button">\n    <h5>contact</h5>\n  </div>\n  <div id="claron" class="button navigation-button">\n    <h5>claron</h5>\n  </div>\n  <div id="helios" class="button navigation-button">\n    <h5>helios</h5>\n  </div>\n  <div id="freespira" class="button navigation-button">\n    <h5>freespira</h5>\n  </div>\n  <div id="gridmi" class="button navigation-button">\n    <h5>gridmi</h5>\n  </div>\n  <div id="photos" class="button navigation-button">\n    <h5>photos</h5>\n  </div>\n  <div id="toffee" class="button navigation-button">\n    <h5>toffee</h5>\n  </div>\n</div>';

}
return __p
},
"views/content/contentLayout": function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!-- short and sweet of it -->\n<div class="content-top-container col-xs-12 pad--none">\n\n</div>\n\n<!-- page process -->\n<div class="content-bottom-container col-xs-12 pad--none">\n  \n</div>';

}
return __p
},
"views/main/main": function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page-container">\n\t<!-- Header -->\n\t<div class="layout--header row marg--none">\n\t\t<div class="header__container col-xs-12 pad--none">\n\n\t\t</div>\n\t</div>\n\t<!-- / Header -->\n\n\t<!-- Main Content -->\n\t<div class="layout--content marg--none">\n\n\t</div>\n\t<!-- / Main Content -->\n</div>';

}
return __p
},
"views/common/compositeView/compositeView": function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="cv__container"></div>';

}
return __p
},
"views/common/compositeView/compositeView_item": function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="">\n\tItem\n</div>';

}
return __p
},
"views/content/executiveSummary/executiveSummary": function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="content--top">\n\t<!-- page highlight color -->\n\t<div class="background-color pad--none">\n\n\t</div>\n\n\t<!-- page slideshow -->\n\t<div class="slideshow col-xs-5 pad--none marg--top-6">\n\n\t\t<div class="col-xs-12 image--container">\n\t\t\t<div class="col-xs-12 image">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="col-xs-12">\n\t\t\t<div class="col-xs-10  col-xs-offset-1 button behind-the-scenes-button primary-button works">\n\t\t\t\t<p>behind the scenes</p>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n\t<!-- page pitch / project description -->\n\t<div class="pitch col-xs-7 marg--top-6">\n\t\t<div class="col-xs-12 title--container">\n\t\t\t<h3>' +
((__t = ( title )) == null ? '' : __t) +
'</%></h3>\n\t\t\t<div class="title--underline col-xs-1 marg--top-h"></div>\n\t\t</div>\n\n\t\t<div class="col-xs-12 callout--container">\n\t\t\t<!-- <h1 class="callout">providing clarity <br/>in crisis</h1>-->\n\t\t\t<h1 class="callout">' +
((__t = ( callout )) == null ? '' : __t) +
'</%></h1>\n\t\t</div>\n\n\t\t<div class="col-xs-12 description--container">\n\t\t\t<p class="description">\n\t\t\t\t' +
((__t = ( description )) == null ? '' : __t) +
'</%>\n\t\t\t</p>\n\t\t</div>\n\n\t\t<div class="col-xs-12 skills--container works">\n\t\t\t<div class="row">\n\t\t\t';
 _.each(skills, function(skill) { ;
__p += '\n\t\t\t\t<div class="col-xs-4 skills">\n\t\t\t\t\t<p class="skill">' +
((__t = ( skill)) == null ? '' : __t) +
'</%></p>\n\t\t\t\t</div>\n\t\t\t';
 }); ;
__p += '\n\t\t\t\n<!--\n\t\t\t\t<div class="col-xs-4 skills">\n\t\t\t\t\t<p class="skill">photography</p>\n\t\t\t\t</div>\n\t\t\t\t<div class="col-xs-4 skills">\n\t\t\t\t\t<p class="skill">branding</p>\n\t\t\t\t</div>\n\t\t\t\t<div class="col-xs-4 skills">\n\t\t\t\t\t<p class="skill">research</p>\n\t\t\t\t</div>\n-->\n\t\t\t</div>\n\n<!--\n<div class="row">\n\t<div class="col-xs-4 skills">\n\t\t<p class="skill">system architecture</p>\n\t</div>\n\t<div class="col-xs-4 skills">\n\t\t<p class="skill">interaction design</p>\n\t</div>\n\t<div class="col-xs-4 skills">\n\t\t<p class="skill">ui design</p>\n\t</div>\n</div>\n-->\n\t\t</div>\n\n\t</div>\n\n</div>';

}
return __p
},
"views/content/process/process": function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="content--bottom col-xs-12 pad--none">\n\n  ';
 _.each(process, function(processBlock) { ;
__p += '\n    <div class="process-block ' +
((__t = ( processBlock.type )) == null ? '' : __t) +
' col-xs-12">\n      <div class="process-image-container col-xs-6">\n        <img class="process-image" src="' +
((__t = ( processBlock.image )) == null ? '' : __t) +
'" alt="">\n      </div>\n      <!-- this one has padding -->\n      <div class="process-description col-xs-6 pad--h-2">\n        <h4 class="process-title">\n          ' +
((__t = ( processBlock.title )) == null ? '' : __t) +
'\n       </h4>\n\n        <p class="process-copy">\n          ' +
((__t = ( processBlock.copy )) == null ? '' : __t) +
'\n        </p>\n      </div>\n    </div>\n    ';
 }); ;
__p += '\n\n</div>';

}
return __p
}};