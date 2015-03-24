var App = angular.module('App', []);

App.controller('mainController', function($scope, $http) {
	var lang = "english";

	$scope.langview = "$";
	$scope.cent = 45;
	$scope.and = "and ";
	$scope.centview = " cent";
	
	$scope.submit = submit;
	$scope.changelang = changelang;
    

	function changelang(){
		$scope.result = "";
		if (lang === "english"){
			lang = "indonesian";
			$scope.langview = "Rp";
			$scope.and = "dan ";
			$scope.centview = " sen";
		}else {
			lang = "english";
			$scope.langview = "$";
			$scope.and = "and ";
			$scope.centview = " cent";
		}
	}

	function submit(amount,change) {
		var num = amount ? amount.toString(): "0";
		var cent = change ? change.toString(): "0";
		console.log(num);
		console.log(cent);
		var	data = {
				num: [num,cent],
				lang: lang
			}
		$http.post('/convert', {data:data})
			.success(function(data) {
				console.log(data);
				$scope.result = data.word[0];
				$scope.result2 = data.word[1];
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};
});
