weatherMapModule.service('weatherMapFactory', function ($http, $parse, $q) {

	this.getCityWeather = function(city) {
		var deferred = $q.defer();
		var url = 'http://api.openweathermap.org/data/2.5/forecast/city?q=' + city + '&APPID=3fa65bb4e100f40bc9fabc3ea4498b77';
		$http.get(url).then(function(data){
			deferred.resolve(data);
		}, function(error) {
			deferred.reject(error);
		});
	return deferred.promise;
    };
});