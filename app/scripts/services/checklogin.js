'use strict';

angular.module('mddtestSiteApp')
.factory('checklogin', function () {

	var user;

	return {
		setUser: function(someUser){
			user = someUser;
			console.log(user);
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

});
