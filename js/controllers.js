var normalize = require('normalized-upload');
var Upload = require('upload');
var utils = require('./utils');

var controllers = {

  MainController: function ($scope) {

    $scope.files = [];
    $scope.class = '';

    $scope.dragover = function (e) {
      e.preventDefault();
      $scope.class = 'enter';
    };

    $scope.dragleave = function ($event) {
      $scope.class = '';
    };

    $scope.toggle = function () {
      $scope.visible = !$scope.visible;
    };

    $scope.drop = function (e) {
      e.preventDefault();
      normalize(e, function (e) {
        e.items.forEach(function (item) {
          if (!utils.contains($scope.files, item)) {
            $scope.files.push(item);
          }
        });
      });

      $scope.class = '';
    };

    $scope.upload = function () {

      $scope.files.forEach(function (file) {

        if (file.progress !== 100) {
          var upload = new Upload(file);
          upload.to($scope.url);

          upload.on('progress', function (e) {
            $scope.$apply(function () {
              file.progress = parseInt(Math.ceil(e.percent), 10);
            });
          });

          upload.on('end', function (e) {

            $scope.$apply(function () {
              file.event = e;
            });

            if (e.status === 200) {
              $scope.$apply(function () {
                $scope.export.push(file);
              });
            }

          });

        }

      });

    };

    $scope.hasError = function (file) {
      if (file.event && file.event.status !== 200) {
        return true;
      }

      return false;
    };

  }

};

module.exports = controllers;
