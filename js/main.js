const apiKey = "63c90ce953443df021632f3b3cc2aadc";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const errorDiv = document.querySelector(".error");
const weatherDiv = document.querySelector(".weather");
const cityDiv = document.querySelector(".city");
const tempDiv = document.querySelector(".temp");
const humidityDiv = document.querySelector(".humidity");
const windDiv = document.querySelector(".wind");

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        errorDiv.style.display = "block";
        weatherDiv.style.display = "none";
    } else {
        const data = await response.json();

        cityDiv.innerHTML = data.name;
        tempDiv.innerHTML = Math.round(data.main.temp) + "°c";
        humidityDiv.innerHTML = data.main.humidity + "%";
        windDiv.innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "img/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "img/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "img/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "img/drizzle.png";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "img/snow.png";
        }

        errorDiv.style.display = "none";
        weatherDiv.style.display = "block";
    }
}

checkWeather(searchBox.value);


//https://api.openweathermap.org/data/2.5/weather?q=gothenburg&appid=63c90ce953443df021632f3b3cc2aadc