'use strict';

angular.module('mddtestSiteApp')
  .directive('navbar', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink() {
      // postLink(scope, element, attrs)
      }
    };
  });
