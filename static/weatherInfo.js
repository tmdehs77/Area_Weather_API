const buttonSeoul = document.getElementById("Seoul");
const buttonBusan = document.getElementById("Busan");
const buttonDaejeon = document.getElementById("Daejeon");
const buttonCheonan = document.getElementById("Cheonan");
const buttonUlsan = document.getElementById("Ulsan");
const weather_text = document.getElementById("weather_state");
const weather_temp = document.getElementById("weather_temp");

const apiKey = "0be87df02cd14b1d08489cd0372b5b0e";
const url1 =
  "http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${apiKey}";

const url2 =
  "http://api.openweathermap.org/data/2.5/weather?q=Busan&appid=${apiKey}";

const url3 =
  "http://api.openweathermap.org/data/2.5/weather?q=Daejeon&appid=${apiKey}";

const url4 =
  "http://api.openweathermap.org/data/2.5/weather?q=Cheonan&appid=${apiKey}";

const url5 =
  "http://api.openweathermap.org/data/2.5/weather?q=Ulsan&appid=${apiKey}";

const getSeoulWeather = function () {
  axios.get(url1).then((response) => {
    weather_text.innerText = "날씨 : " + response.data.weather[0].description;
    weather_temp.innerText =
      "온도 : " + Math.round(response.data.main.temp - 273) + "도";
  });
};

const getBusanWeather = function () {
  axios.get(url2).then((response) => {
    weather_text.innerText = "날씨 : " + response.data.weather[0].description;
    weather_temp.innerText =
      "온도 : " + Math.round(response.data.main.temp - 273) + "도";
  });
};

const getDaejeonWeather = function () {
  axios.get(url3).then((response) => {
    weather_text.innerText = "날씨 : " + response.data.weather[0].description;
    weather_temp.innerText =
      "온도 : " + Math.round(response.data.main.temp - 273) + "도";
  });
};

const getCheonanWeather = function () {
  axios.get(url4).then((response) => {
    weather_text.innerText = "날씨 : " + response.data.weather[0].description;
    weather_temp.innerText =
      "온도 : " + Math.round(response.data.main.temp - 273) + "도";
  });
};

const getUlsanWeather = function () {
  axios.get(url5).then((response) => {
    weather_text.innerText = "날씨 : " + response.data.weather[0].description;
    weather_temp.innerText =
      "온도 : " + Math.round(response.data.main.temp - 273) + "도";
  });
};

buttonSeoul.addEventListener("click", getSeoulWeather);
buttonBusan.addEventListener("click", getBusanWeather);
buttonDaejeon.addEventListener("click", getDaejeonWeather);
buttonCheonan.addEventListener("click", getCheonanWeather);
buttonUlsan.addEventListener("click", getUlsanWeather);
