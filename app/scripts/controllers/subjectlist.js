'use strict';

/* global Firebase */
angular.module('mddtestSiteApp')
.controller('SubjectlistCtrl', ['$scope', '$routeParams', '$location', '$rootScope', '$firebase',function ($scope, $routeParams, $location, $rootScope, $firebase) {
	// setting root scope var to auto hide forms
	// auto show add button
	$rootScope.forSwapToggle = true;

	console.log($routeParams.id);
	var url = 'https://mddproj.firebaseio.com/'+$routeParams.id+'/articles';
	$scope.items = $firebase( new Firebase(url));
	// wtf is remote items?


	// clicks
	$scope.formSwap = function(){
		if ($rootScope.formSwapToggle === true){
			$rootScope.formSwapToggle = false;
		}else{
			$rootScope.formSwapToggle = true;
		}
	};

	$scope.goToDetail = function(){
		// go to article detail page
		var view = '/subjects/'+$routeParams.id+'/articles/'+this.$id;
		// var view = 'article/'+this.$id;
		$location.path(view);
		// console.log(view);
	};
}]);
