'use strict';

angular.module('mddtestSiteApp')
  .directive('navbar', function () {
    return {
			templateUrl: 'views/nav/navBar.html',
			restrict: 'E',
			controller: function($rootScope){
				// console.log($rootScope.loginObj);
			},
			link: function postLink(scope, element, attrs, $rootScope) {
			// postLink(scope, element, attrs)
				scope.navToggle = false;

				scope.navStat = [
					'snv-container-right',
					'snv-container-push-toleft'
				];

				scope.getStat = function(){
					// console.log('getStat');
					var divStat = '';

					if (scope.navToggle === false){
						// options is off the page
						divStat = 'snv-container-right';

						// push main page to left
						scope.containerstat = 'main-container-push-open';
					}else if (scope.navToggle === true){
						divStat = 'snv-container-right-open';
						$rootScope.containerStat = 'main-container-push';
					}
					// console.log(divStat);
					return divStat;

				};

				scope.barToggle = function(){
					// console.log('bar toggle');
					if(scope.navToggle === false){
						scope.navToggle = true;
					}else if (scope.navToggle === true){
						scope.navToggle = false;
					}
				};

				// Clicks
				scope.hideBar = function(){
					// console.log('hidebar');
					scope.barToggle();
					scope.getStat();
				};

				scope.optionsClick = function(){

					// console.log('options clicked');
					scope.barToggle();
					scope.getStat();
				};


				scope.logUserOut = function(){
						// console.log($rootScope.loginObj);
				};

			}
    };
  });
