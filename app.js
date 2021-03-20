var button= document.querySelector('#icon'); 
var input= document.querySelector('#search-input'); 

var city= document.querySelector('#city'); 
var weather= document.querySelector('#weather');

var currentTemp= document.querySelector('#current');
var minTemp= document.querySelector('#min');
var maxTemp= document.querySelector('#max');

var wind= document.querySelector('#wind');
var humidity= document.querySelector('#humidity');
var pressure= document.querySelector('#pressure');
var icon= document.querySelector('#weather-icon');

const apiKey = '46b262bd8132cfdb0f3f2d209f0f89a2';

button.addEventListener('click', function(){

    window.city.innerHTML= 'Loading..';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${apiKey}`)
    .then(function(response){ return response.json()})
    .then(function(data){
    console.log(data)

   const city = data.name; 
   const weather= data.weather[0].description;
   const temp= Math.floor(data.main.temp);
   const minTemp= Math.floor(data.main.temp_min);
   const maxTemp= Math.floor(data.main.temp_max);

   const wind= data.wind.speed;
   const humidity= data.main.humidity;
   const pressure= data.main.pressure;  

   const icon= data.weather[0].icon;
   const iconSrc= `http://openweathermap.org/img/wn/${icon}@2x.png`;


   window.city.innerHTML= city;
   window.weather.innerHTML= weather; 

   window.currentTemp.innerHTML= `${temp}<sup>&deg;</sup>`; 
   window.minTemp.innerHTML= `${minTemp}<sup>&deg;</sup>`;
   window.maxTemp.innerHTML= `${maxTemp}<sup>&deg;</sup>`;

   window.wind.innerHTML= `Wind ${wind} m/s`;
   window.humidity.innerHTML= `Humidity ${humidity} %`;
   window.pressure.innerHTML= `Pressure ${pressure} hPa`;
   
   window.icon.src= iconSrc; 
})
})
