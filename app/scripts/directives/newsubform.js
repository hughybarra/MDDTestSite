'use strict';

/* global Firebase */
angular.module('mddtestSiteApp')
  .directive('newSubForm', function () {
    return {
			templateUrl: 'views/directives/newSubForm.html',
			restrict: 'E',
			controller: function($scope, $firebase, $rootScope, $location, $routeParams){
				// init vars
				$scope.inputPrompt = true;
				$scope.master = {};// master reset var
				$scope.mainArticle = [];
				$scope.article = {};
				// setting the state of the form
				$scope.formStage = true;

				var url = 'http://mddproj.firebaseio.com/subjects/'+$routeParams.id+'/articles';
				console.log(url);

				$scope.items = $firebase(new Firebase(url));
				$scope.items.$bind($scope, 'remoteItems');

				// https://mddproj.firebaseio.com/subjects/-JGUY4nM-ooFz6CQ_GS5

				// clicks
				// swap the stage of the form
				$scope.formStageSet = function(){
					if ($scope.formStage === true){
						$scope.formStage = false;
					}else{
						$scope.formStage = true;
					}
				};
				// back button
				$scope.toggleBack = function(){
					// go back to listing state

					// maybe there is a better way to target this ? for now its global baby!
					$rootScope.formSwapToggle = false;
				};

							// append to article
				$scope.appendToArticle = function(){
					// appends new data to the article
					// hide instructions on click
					$scope.inputPrompt = false;
					// /^\s*$ match one or more white space characters *(N)times. make sure not empty string
					if (!$scope.NUSubject.comment || /^\s*$/.test($scope.NUSubject.comment )){
						console.log('comment broke');
						// error class here
					}else{
						// console.log('comment worekd');

						// append this to end of main article
						$scope.mainArticle.push({
							'type': 'NUSMessage',
							'message': $scope.NUSubject.comment
						});
						$scope.NUSubject.comment = '';
					}


					if (!$scope.NUSubject.webLink || /^\s*$/.test($scope.NUSubject.webLink )){
						// console.log('link broke');
						// error class here
					}else{
						// console.log('link ran');
						//append this to the end of main article
						// console.log($scope.NUSubject.webLink);
						$scope.mainArticle.push({
							'type': 'NUSLink',
							'message': $scope.NUSubject.webLink
						});
						$scope.NUSubject.webLink = '';
					}
				};
							// save project button
				$scope.saveProject = function(){

					$scope.article.articleTitle = $scope.NUSubject.title;
					$scope.article.message = $scope.mainArticle;
					console.log($scope.article);

					$scope.items.$add($scope.article);

					// empty the form

					// $scope.user = angular.copy($scope.master);
					$scope.article = angular.copy($scope.master);
					$scope.NUSubject.title = '';
					$scope.mainArticle = {};

					// reset the form stage
					$scope.formStageSet();
					// go back to listing state
					$rootScope.formSwapToggle = false;
				};
			},
			link: function postLink() {
			// postLink(scope, element, attrs)
			}

    };
  });
