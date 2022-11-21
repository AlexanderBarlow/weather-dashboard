var apiKey = 'e9bb626143e41a3cff776af495a489dc';
var searchButton = document.querySelector('.btn');
var cityInput = document.querySelector('.city-input');
var cityNameApply = document.querySelector('.City');
var tempApply = document.getElementsByClassName('temp');
var windApply = document.getElementsByClassName('wind');
var humidityApply = document.getElementsByClassName('humidity');
var userForm = document.getElementsByClassName('form-control')
var city;
var returnedCity;
var lat; 
var lon;
var temp;
var wind;
var humidity;
var listedCities = document.getElementsByClassName('searched-citites');


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
        localStorage.setItem("city", lat);
        lon = data[0].lon;
        localStorage.setItem("city", lon);
        console.log(returnedCity);
        console.log(lat);
        console.log(lon);
        return;
    });
    console.log(lat);
    console.log(lon);
    console.log(returnedCity);
    
    displayData();

})
}

function displayData () {





};

cityInput.addEventListener('submit', formHandler);
searchButton.addEventListener('click', formHandler);
