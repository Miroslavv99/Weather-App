export class Renderer {
  constructor(weatherService) {
    this.weatherService = weatherService;
  }

  async renderWeatherCard(city) {
    const weatherHeader = document.querySelector(".weather-header");
    weatherHeader.innerHTML = "";
    const weatherFooter = document.querySelector(".weather-footer");
    weatherFooter.innerHTML = "";

    try {
      const weatherData = await this.weatherService.createWeatherData(city);

      const cityName = document.createElement("span");
      cityName.classList.add("city");
      cityName.textContent = weatherData.city;
      weatherHeader.appendChild(cityName);

      const country = document.createElement("span");
      country.classList.add("country");
      country.textContent = weatherData.country;
      weatherHeader.appendChild(country);

      const tempContainer = document.createElement("div");
      tempContainer.classList.add("temp-container");
      weatherHeader.appendChild(tempContainer);

      const temperature = document.createElement("span");
      temperature.classList.add("temperature");
      temperature.textContent = weatherData.temperature;
      tempContainer.appendChild(temperature);

      const weatherIcon = document.createElement("img");
      weatherIcon.classList.add("weather-icon", "weather-img");
      weatherIcon.src = weatherData.icon;
      tempContainer.appendChild(weatherIcon);

      const temperatureSwitch = document.createElement("div");
      temperatureSwitch.classList.add("temp-switch");
      tempContainer.appendChild(temperatureSwitch);

      const celsius = document.createElement("button");
      celsius.classList.add("celsius");
      celsius.textContent = "C";
      temperatureSwitch.appendChild(celsius);

      const fahrenheit = document.createElement("button");
      fahrenheit.classList.add("fahrenheit");
      fahrenheit.textContent = "F";
      temperatureSwitch.appendChild(fahrenheit);

      celsius.addEventListener("click", () => {
        temperature.textContent = weatherData.temperature;
      });

      fahrenheit.addEventListener("click", () => {
        temperature.textContent = `${this.toggleToFahrenheit(
          weatherData.temperature
        )}F`;
      });

      const sunriseImg = document.createElement("img");
      sunriseImg.classList.add("footer-img");
      sunriseImg.src = "./images/sunrise.svg";
      weatherFooter.appendChild(sunriseImg);

      const sunriseContainer = document.createElement("div");
      sunriseContainer.classList.add("info-container");
      weatherFooter.appendChild(sunriseContainer);

      const sunriseTitle = document.createElement("h2");
      sunriseTitle.textContent = "sunrise";
      sunriseContainer.appendChild(sunriseTitle);

      const sunrise = document.createElement("span");
      sunrise.textContent = weatherData.sunrise;
      sunriseContainer.appendChild(sunrise);

      const sunsetImg = document.createElement("img");
      sunsetImg.classList.add("footer-img");
      sunsetImg.src = "./images/sunset.svg";
      weatherFooter.appendChild(sunsetImg);

      const sunsetContainer = document.createElement("div");
      sunsetContainer.classList.add("info-container");
      weatherFooter.appendChild(sunsetContainer);

      const sunsetTitle = document.createElement("h2");
      sunsetTitle.textContent = "sunset";
      sunsetContainer.appendChild(sunsetTitle);

      const sunset = document.createElement("span");
      sunset.textContent = weatherData.sunset;
      sunsetContainer.appendChild(sunset);

      const humidityImg = document.createElement("img");
      humidityImg.classList.add("footer-img");
      humidityImg.src = "./images/humidity.svg";
      weatherFooter.appendChild(humidityImg);

      const humidityContainer = document.createElement("div");
      humidityContainer.classList.add("info-container");
      weatherFooter.appendChild(humidityContainer);

      const humidityTitle = document.createElement("h2");
      humidityTitle.textContent = "humidity";
      humidityContainer.appendChild(humidityTitle);

      const humidity = document.createElement("span");
      humidity.textContent = weatherData.humidity;
      humidityContainer.appendChild(humidity);

      const windSpeedImg = document.createElement("img");
      windSpeedImg.classList.add("footer-img");
      windSpeedImg.src = "./images/windy.svg";
      weatherFooter.appendChild(windSpeedImg);

      const windSpeedContainer = document.createElement("div");
      windSpeedContainer.classList.add("info-container");
      weatherFooter.appendChild(windSpeedContainer);

      const windSpeedTitle = document.createElement("h2");
      windSpeedTitle.textContent = "wind speed";
      windSpeedContainer.appendChild(windSpeedTitle);

      const windSpeed = document.createElement("span");
      windSpeed.textContent = weatherData.windspeed;
      windSpeedContainer.appendChild(windSpeed);
    } catch (error) {
      console.error(error);
    }
  }

  async renderWeeklyForecast(city) {
    const weatherBody = document.querySelector(".weather-body");
    weatherBody.innerHTML = "";

    const weatherTrack = document.createElement("div");
    weatherTrack.classList.add("weather-track");
    weatherBody.appendChild(weatherTrack);

    try {
      const weeklyData = await this.weatherService.createWeeklyWeatherData(
        city
      );

      weeklyData.forEach((data) => {
        const weatherCard = document.createElement("div");
        weatherCard.classList.add("weekly-card");
        weatherTrack.appendChild(weatherCard);

        const date = document.createElement("span");
        date.classList.add("date");
        date.textContent = data.date.split(",");
        weatherCard.appendChild(date);

        const conditions = document.createElement("span");
        conditions.classList.add("conditions");
        conditions.textContent = data.conditions;
        weatherCard.appendChild(conditions);

        const iconImg = document.createElement("img");
        iconImg.classList.add("weather-img");
        iconImg.src = data.icon;
        weatherCard.appendChild(iconImg);

        const rangeContainer = document.createElement("div");
        rangeContainer.classList.add("range-container");
        weatherCard.appendChild(rangeContainer);

        const tempMin = document.createElement("span");
        tempMin.textContent = `${data.tempMin}°`;
        rangeContainer.appendChild(tempMin);

        const range = document.createElement("div");
        range.classList.add("temp-range");
        rangeContainer.appendChild(range);

        const tempMax = document.createElement("span");
        tempMax.textContent = `${data.tempMax}°`;
        rangeContainer.appendChild(tempMax);
      });
    } catch (error) {
      console.error(error);
    }
  }

  toggleToFahrenheit(temp) {
    const fahrenheit = (9 / 5) * parseInt(temp) + 32;
    return Math.round(fahrenheit);
  }
}
