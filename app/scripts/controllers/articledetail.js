'use strict';

/* global Firebase */
angular.module('mddtestSiteApp')
.controller('ArticledetailCtrl',['$scope', '$location', '$firebase', function ($scope, $location, $firebase) {

	var url = 'https://mddproj.firebaseio.com' + $location.$$path;
	// $scope.items = $firebase( new Firebase(url));
	$scope.items = $firebase(new Firebase(url));

}]);


