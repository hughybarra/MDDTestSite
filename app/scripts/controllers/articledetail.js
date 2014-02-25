'use strict';

/* global Firebase */
angular.module('mddtestSiteApp')
.controller('ArticledetailCtrl',['$scope', '$location', '$firebase', function ($scope, $location, $firebase) {
	var url = 'https://mddproj.firebseio.com' + $location.$$path;
	$scope.items = $firebase( new Firebase(url));
}]);
