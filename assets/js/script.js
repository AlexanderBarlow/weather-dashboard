var apiKey = 'e9bb626143e41a3cff776af495a489dc';
var searchButton = document.getElementsByClassName('btn-primary');
var cityInput = document.getElementsByClassName('form-contrl');
var weatherURL = 'https://api.openweathermap.org/data/2.5/forecast?appid=e9bb626143e41a3cff776af495a489dc&units=imperial&q=' + city;
var city = cityInput.value;
console.log(city);
var cityName = getElementsByClassName('City');
var temp = getElementsByClassName('temp');
var wind = getElementsByClassName('wind');
var humidity = getElementsByClassName('humidity');


searchButton.addEventListener('click', getCity);


