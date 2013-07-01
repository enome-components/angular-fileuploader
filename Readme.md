
# Fileuploader

  File uploader and media picker for angular.js

![Example.gif](https://raw.github.com/Enome/angular-fileuploader/master/example.gif)

## Installation

  Install with [component(1)](http://component.io):

    $ component install enome-component/angular-fileuploader

## API

```html
<script src='https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.js'></script>
<script src='build/build.js'></script>
<script>
  require('fileuploader');
  var module = angular.module('my-app', ['fileuploader']);

  module.controller('Ctrl', function ($scope) {

    $scope.toggle = function () {
      $scope.show = !$scope.show;
    }

    $scope.files = [];

    $scope.$watch('files', function (val) {
      console.log(val);
    });

  });
</script>

<body ng-controller='Ctrl'>
  <button ng-click='toggle()'>toggle</button>
  <fileuploader url='/upload' files='files' visible='show'></fileuploader>
</body>
```

- `url=` where to post the files.
- `files=` is the array that receives the finished uploads.
- `visible=` booleans to hide and show the component.

## License

  MIT
