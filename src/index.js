let now = new Date();

function time() {
  let hourNow = fullHour(now.getHours());
  let minutesNow = fullMinutes(now.getMinutes());
  let timePlace = document.querySelector("#current-time");
  return (timePlace.innerHTML = `${hourNow}:${minutesNow}`);
}
function fullMinutes(minutesNow) {
  if (minutesNow < 10) {
    return "0" + now.getMinutes();
  } else {
    return minutesNow;
  }
}
function fullHour(hourNow) {
  if (hourNow < 10) {
    return "0" + now.getHours();
  } else {
    return hourNow;
  }
}

time();

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

function day2Day() {
  let date = now.getDate();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[now.getDay() + 1];
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
  let day2Place = document.querySelector("#secondday");
  return (day2Place.innerHTML = `${day}`);
}
day2Day();

function day3Day() {
  let date = now.getDate();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[now.getDay() + 2];
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
  let day3Place = document.querySelector("#thirdday");
  return (day3Place.innerHTML = `${day}`);
}
day3Day();

function day4Day() {
  let date = now.getDate();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[now.getDay() + 3];
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
  let day4Place = document.querySelector("#fourthday");
  return (day4Place.innerHTML = `${day}`);
}
day4Day();

function day5Day() {
  let date = now.getDate();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[now.getDay() + 4];
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
  let day5Place = document.querySelector("#fifthday");
  return (day5Place.innerHTML = `${day}`);
}
day5Day();

function day6Day() {
  let date = now.getDate();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[now.getDay() + 5];
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
  let day6Place = document.querySelector("#sixthday");
  return (day6Place.innerHTML = `${day}`);
}
day6Day();

function day7Day() {
  let date = now.getDate();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[now.getDay() + 6];
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
  let day7Place = document.querySelector("#seventhday");
  return (day7Place.innerHTML = `${day}`);
}
day7Day();

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let cityHeading = document.querySelector("#city-input");
  let currentCity = document.querySelector("#search-input").value;
  searchCity(currentCity);
}

function searchCity(currentCity) {
  let apiKey = "2508b75b8cfd9ad6ef1af480d0065588";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&units=metric&appid=${apiKey}`;
  axios.get(`${apiUrl}`).then(showTemperatureToday);
  axios.get(`${apiUrl}`).then(showCity);
  axios.get(`${apiUrl}`).then(showHumidity);
  axios.get(`${apiUrl}`).then(showWeather);
  axios.get(`${apiUrl}`).then(showWind);

  apiUrl = `api.openweathermap.org/data/2.5/forecast?q=${currentCity}&units=metric&appid=${apiKey}`;
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

function showTemperatureSecondDay(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  let message = `${temperature}°C`;
  let displayTemp2 = document.querySelector("#temp-second-day");
  displayTemp2.innerHTML = message;
}
showTemperatureSecondDay();

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
