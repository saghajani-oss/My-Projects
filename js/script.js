let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = days[now.getDay()];
let currentHour = ("0" + now.getHours()).substr(-2);
let currentMinute = ("0" + now.getMinutes()).substr(-2);

let currentTime = document.querySelector("#date");
currentTime.innerHTML = `${currentDay} ${currentHour}:${currentMinute}`;

function weatherReport(response) {
  console.log(response);
  let temp = Math.round(response.data.main.temp);
  let temperature = document.querySelector(".degree");
  temperature.innerHTML = `${temp} °C`;

  let cityName = response.data.name;
  let CurrentCity = document.querySelector("#current-city");
  CurrentCity.innerHTML = cityName;

  let currentWind = document.querySelector(".row-two");
  currentWind.innerHTML = `Wind: ${Math.round(response.data.wind.speed)}km/h`;
}

function enterCityName(event) {
  event.preventDefault();
  let apiKey = "3bad7bd4137a5ff9f5c84125992a313a";
  let cityInput = document.querySelector("#city-name");
  let city = cityInput.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  console.log(apiUrl);

  axios.get(apiUrl).then(weatherReport);
}

let citySearch = document.querySelector("#city-search");
citySearch.addEventListener("submit", enterCityName);
