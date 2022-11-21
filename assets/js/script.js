var apiKey = 'e9bb626143e41a3cff776af495a489dc';
var searchButton = document.getElementsByClassName('btn-primary');
var cityInput = document.getElementsByClassName('form-contrl');
var weatherURL = 'https://api.openweathermap.org/data/2.5/forecast?appid=e9bb626143e41a3cff776af495a489dc&units=imperial&q=' + city;
var city = cityInput.value;
console.log(city);


searchButton.addEventListener(getCity);

function displayWeather() {
    getCity();
}

function getCity() {
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + city '&limit=5&appid=e9bb626143e41a3cff776af495a489dc')
    .then(function () {
        return Response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    


var obj = {
    dateT : formatDate(list[0].dt_txt),
    humidity : list[0].main.humidity,
    speed: list[0].wind.speed,
    temp: list[0].main.temp,
    lat : position.lat,
    lon: position.lon
};

//when we put in a city name grab the lat and lon from data
//use lat and lon to to grab wheather for that city
