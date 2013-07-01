require('angular-dnd-directives');

var module = window.angular.module('fileuploader', ['dnd-directives']);

module.run(function ($templateCache) {
  $templateCache.put('template.html', require('./template'));
});

var controllers = require('./js/controllers');
var directives = require('./js/directives');

module.controller('MainController', controllers.MainController);
module.directive('fileuploader', directives.fileuploader);
