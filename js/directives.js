var directives = {

  fileuploader: function ($parse) {

    return {
      restrict: 'E',
      controller: 'MainController',
      templateUrl: 'template.html',
      scope: {
        url: '@',
        visible: '=',
        export: '=files',
      }
    };

  }

};

module.exports = directives;
