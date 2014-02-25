'use strict';

angular.module('mddtestSiteApp')
  .directive('newsubform', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink() {
      // postLink(scope, element, attrs)
      }
    };
  });
