function getVillanovaWeatherConditions(){
	var url = "http://api.openweathermap.org/data/2.5/weather?q=Villanova&APPID=45b358559502836c3c3b11aff339a647";
	$.getJSON(url, function(data) {

		console.log(data.weather[0]['description']);
		var weatherConditions = data.weather[0]['description'];

		document.getElementById("villanovaWeatherConditions").innerHTML = weatherConditions;
	});
}

function getTappanWeatherConditions(){
	var url = "http://api.openweathermap.org/data/2.5/weather?q=Tappan&APPID=45b358559502836c3c3b11aff339a647";
	$.getJSON(url, function(data) {

		console.log(data.weather[0]['description']);
		var weatherConditions = data.weather[0]['description'];

		document.getElementById("tappanWeatherConditions").innerHTML = weatherConditions;
	});
}

function getVillanovaWeatherTemperature(){
	var url = "http://api.openweathermap.org/data/2.5/weather?q=Villanova&APPID=45b358559502836c3c3b11aff339a647";
	$.getJSON(url, function(data) {

		var weatherTemperature = data.main['temp'];
		var weatherTemperatureF = Math.round(1.8*(weatherTemperature - 273) + 32);

		console.log(weatherTemperatureF);

		document.getElementById("villanovaWeatherTemperature").innerHTML = weatherTemperatureF;
	});
}

function getTappanWeatherTemperature(){
	var url = "http://api.openweathermap.org/data/2.5/weather?q=Tappan&APPID=45b358559502836c3c3b11aff339a647";
	$.getJSON(url, function(data) {

		var weatherTemperature = data.main['temp'];
		var weatherTemperatureF = Math.round(1.8*(weatherTemperature - 273) + 32);

		console.log(weatherTemperatureF);

		document.getElementById("tappanWeatherTemperature").innerHTML = weatherTemperatureF;
	});
}
