'use strict';

/* global Firebase */
angular.module('mddtestSiteApp')
  .controller('HomeCtrl', [ '$scope', '$location', '$rootScope', '$firebase', 'checklogin', function ($scope, $location, $rootScope, $firebase, checklogin) {


	checklogin.isLoggedIn();
  // hiding form
	$scope.newSub = false;
	var url = 'https://mddproj.firebaseio.com/subjects';

	$scope.items = $firebase( new Firebase(url));

	$scope.items.$bind($scope, 'remoteItems');


	// clicks
	$scope.addSubject = function(){
		// swaps out the form
		$scope.newSub = true;
	};
	// back button
	$scope.backLink = function(){
		$scope.newSub= false;
	};
	// submit new subject
	$scope.submitNewSubject = function(){
		var url = 'https://mddproj.firebaseio.com/subjects';

		$scope.subjectsHome = $firebase(new Firebase(url));
		$scope.subjectsHome.$add($scope.mainSubjects);
		// $scope.subjectsHome = '';
		delete $scope.subjectHome;
		$scope.newSub= false;
	};
	// subject clicked
	$scope.subjectClicked = function(){
		var view = '/subjects/'+this.$id;
		$rootScope.currentSelection = view;
		$location.path(view);
	};
}]);
