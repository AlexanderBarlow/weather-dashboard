var apiKey = 'e9bb626143e41a3cff776af495a489dc';
var searchButton = document.querySelector('.btn');
var cityInput = document.querySelector('.city-input');
var cityNameApply = document.querySelector('.City');
var tempApply = document.querySelectorAll('temp');
var windApply = document.querySelectorAll('wind');
var humidityApply = document.getElementsByClassName('humidity');
var userForm = document.getElementsByClassName('form-control')
var listedCities = document.getElementById('city-list');


var formHandler = function (event) {
    event.preventDefault();
// On click we want to take the user input and pass it through the api
//return the api data and store it in variables
//append variables to the page respectively
var city = cityInput.value
var apiURL = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city + ', US&limit=6&appid=' + apiKey;

fetch(apiURL)
.then(function(response) {
    console.log(response);
    response.json().then(function (data) {
        console.log(data[0]);
        var returnedCity = data[0].name;
        localStorage.setItem("city", city);
        lat = data[0].lat;
        localStorage.setItem("lat", lat);
        lon = data[0].lon;
        localStorage.setItem("lon", lon);
        console.log(returnedCity);
        console.log(lat);
        console.log(lon);

        
    });

    displayData();

})
}

function displayData () {
    getWeather();
    city = localStorage.getItem("city");
    cityNameApply.append(city);
    lat = localStorage.getItem('lat');
    console.log(lat);
    lon = localStorage.getItem('lon');
    console.log(lon);
    temp = localStorage.getItem('temp');
    wind = localStorage.getItem('wind');
    humidity = localStorage.getItem('humidity');
};

function getWeather() {
    lat = localStorage.getItem('lat');
    console.log(lat);
    lon = localStorage.getItem('lon');
    console.log(lon);
    
    
    var weatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=' + apiKey


    fetch(weatherURL)
    .then(function(response) {
    console.log(response);
    response.json().then(function (data) {
        console.log(data);
        temp = data.main.temp;
        console.log(temp);
        localStorage.setItem("temp",temp);
        wind = data.wind.speed
        localStorage.setItem("wind", wind);
        humidity = data.main.humidity;
        localStorage.setItem('humidity', humidity);
    });
})
}

cityInput.addEventListener('submit', formHandler);
searchButton.addEventListener('click', formHandler);
