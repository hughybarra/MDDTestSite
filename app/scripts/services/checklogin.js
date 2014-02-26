'use strict';

angular.module('mddtestSiteApp')
.factory('checklogin', ['$rootScope', function () {

	var user;

	return {
		setUser: function(someUser){
			user = someUser;
		},
		isLoggedIn: function(){
			var userStat;

			if (user){
				userStat = true;
			}else{
				userStat = false;
			}
			return userStat;

		}
	};

}]);
