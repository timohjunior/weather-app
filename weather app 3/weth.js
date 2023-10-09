var seach = document.querySelector('#seach');
seach.addEventListener('keypress', setFunc);


function setFunc(e) {
    if(e.keyCode == 13) {
        getData(seach.value);
    }
}

function getData(value) {
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+value+'&appid=772f0aba3e6469819e470140cf4c3e7f')
    .then(function (response) {
        return response.json();
    })
    .then(function (weather) {
        document.querySelector('#city').innerHTML = weather.name;
        document.querySelector('#temp').innerHTML = weather.main.temp;
        document.querySelector('#max_temp').innerHTML = "min: " + weather.main.temp_min + " °C" ;
        document.querySelector('#min_temp').innerHTML = "max: " +weather.main.temp_max + " °C";
        document.querySelector('#weather').innerHTML = weather.weather[0].main;
        document.querySelector('#weather_des').innerHTML = weather.weather[0].description;
        document.querySelector('#wind_dir').innerHTML = "wind direction: " + weather.wind.deg+ "mph" ;
        document.querySelector('#wind_speed').innerHTML =  "wind speed: " + weather.wind.speed + "km/h";
    })
    .catch(function (err) {
        console.log(err);
    });
}