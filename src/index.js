let now = new Date();

var time = {};
(function time() {
  var clock = document.querySelector("#current-time");
  (function tick() {
    var minutes,
      d = new Date();
    time.minutes = d.getMinutes();
    time.hours = d.getHours();
    time.seconds = d.getSeconds();
    time.ms = d.getMilliseconds();
    minutes = time.minutes < 10 ? "0" + time.minutes : time.minutes;
    clock.innerHTML = time.hours + ":" + minutes;
    window.setTimeout(tick, 1000);
  })();
})();

function dateToday() {
  let date = now.getDate();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[now.getDay()];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[now.getMonth()];
  let datePlace = document.querySelector("#current-date");
  return (datePlace.innerHTML = `${day}, ${date} ${month}`);
}
dateToday();

function formatHours(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let cityHeading = document.querySelector("#city-input");
  let currentCity = document.querySelector("#search-input").value;
  searchCity(currentCity);
}

function displayForecast(response) {
  let forecastElement = document.querySelector("#forecast");
  let forecast = response.data.list[0];
  console.log(forecast);
  forecastElement.innerHTML = `<div class="col-2">
            <div class="threehour">
              <h5>${formatHours(forecast.dt * 1000)}</h5>
              <img
              src = "http://openweathermap.org/img/wn/${
                forecast.weather[0].icon
              }@2x.png"/>
              <div class="weatherthreehour">
                <h6><strong>${Math.round(
                  forecast.main.temp_max
                )}°C/</strong>${Math.round(forecast.main.temp_min)}°C</h3>
              </div>
            </div>
          </div>`;
}

function showIconToday(response) {
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

function searchCity(currentCity) {
  let apiKey = "2508b75b8cfd9ad6ef1af480d0065588";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&units=metric&appid=${apiKey}`;
  axios.get(`${apiUrl}`).then(showTemperatureToday);
  axios.get(`${apiUrl}`).then(showCity);
  axios.get(`${apiUrl}`).then(showHumidity);
  axios.get(`${apiUrl}`).then(showWeather);
  axios.get(`${apiUrl}`).then(showWind);
  axios.get(`${apiUrl}`).then(showIconToday);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${currentCity}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(displayForecast);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function showTemperatureToday(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  let message = `${temperature}°C`;
  let displayTemp = document.querySelector("#temp-now");
  displayTemp.innerHTML = message;
}

function showCity(response) {
  let city = response.data.name;
  let updateCity = `${city}`;
  let h1 = document.querySelector("#city-input");
  h1.innerHTML = updateCity;
}

function showHumidity(response) {
  let humidity = response.data.main.humidity;
  let updateHumidity = `Humidity = ${humidity}%`;
  let humidityElement = document.querySelector("#humidity-now");
  humidityElement.innerHTML = updateHumidity;
}

function showWeather(response) {
  let weather = response.data.weather[0].description;
  console.log(weather);
  let updateWeather = `Weather today: ${weather}`;
  let weatherElement = document.querySelector("#weather-now");
  weatherElement.innerHTML = updateWeather;
}

function showWind(response) {
  let windSpeed = response.data.wind.speed;
  console.log(windSpeed);
  let updateWind = `${windSpeed}`;
  let windElement = document.querySelector("#wind-speed");
  windElement.innerHTML = updateWind;
}
