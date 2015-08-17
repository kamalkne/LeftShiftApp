weatherMapModule.controller('weatherMapController', ['$scope', '$http', '$parse', 'weatherMapFactory', '$rootScope', 
	function ($scope, $http, $parse, weatherMapFactory, $rootScope) {

		$rootScope.showLoader = false;
		$scope.cityArray = [];
		$scope.data = [];
		$scope.cityEntered = function(){
			$scope.data = [];
			$scope.cityArray.forEach(function(instance) {
				$rootScope.showLoader = true;
				weatherMapFactory.getCityWeather(instance).then(function(data){
					$scope.data.push(data);
					$rootScope.showLoader = false;
				}, function(){
					alert("Please try after some time..!");
				});
			});
			
		};
		
		$scope.removeCity = function(cityToBeRemoved) {
			var index = $scope.cityArray.indexOf(cityToBeRemoved);
			$scope.cityArray.splice(index, 1);
		}
		
		$scope.addCityToArray = function() {
			$scope.cityArray.push($scope.city);
			$scope.city = "";
		};
		
		$scope.yehchala = function() {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition( 
					function (position) {
						console.log("man chala");
						$scope.lat =  position.coords.latitude;
						$scope.lng =  position.coords.longitude;
					},
					function(err){
						console.log("something is printed" + err.code);
					}
				);
			} else { 
				console.log("yeh nai chl raha");
			}
		};
	}
]);