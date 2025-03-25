export class Renderer {
  constructor(weatherDataFactory) {
    this.weatherDataFactory = weatherDataFactory;
  }

  async renderWeatherCard(url) {
    const weatherCard = document.querySelector(".weather-card");
    weatherCard.innerHTML = "";

    try {
      const weatherData = await this.weatherDataFactory.createWeatherData(url);

      const temperatureSwitch = document.createElement("div");
      temperatureSwitch.classList.add("temp-switch");
      weatherCard.appendChild(temperatureSwitch);

      const celsius = document.createElement("button");
      celsius.classList.add("celsius");
      celsius.textContent = "C";
      temperatureSwitch.appendChild(celsius);

      const fahrenheit = document.createElement("button");
      fahrenheit.classList.add("fahrenheit");
      fahrenheit.textContent = "F";
      temperatureSwitch.appendChild(fahrenheit);

      const city = document.createElement("span");
      city.classList.add("city");
      city.textContent = weatherData.city;
      weatherCard.appendChild(city);

      const country = document.createElement("span");
      country.classList.add("country");
      country.textContent = weatherData.country;
      weatherCard.appendChild(country);

      const tempContainer = document.createElement("div");
      tempContainer.classList.add("temp-container");
      weatherCard.appendChild(tempContainer);

      const weatherIcon = weatherData.icon;
      weatherIcon.classList.add("weather-icon");
      tempContainer.appendChild(weatherIcon);

      const conditions = document.createElement("span");
      conditions.classList.add("conditions");
      conditions.textContent = weatherData.conditions;
      weatherCard.appendChild(conditions);

      const temperature = document.createElement("span");
      temperature.classList.add("temperature");
      temperature.textContent = weatherData.temperature;
      tempContainer.appendChild(temperature);

      const description = document.createElement("span");
      description.classList.add("description");
      description.textContent = weatherData.description;
      weatherCard.appendChild(description);

      celsius.addEventListener("click", () => {
        temperature.textContent = weatherData.temperature;
      });

      fahrenheit.addEventListener("click", () => {
        temperature.textContent = `${this.toggleToFahrenheit(
          weatherData.temperature
        )}F`;
      });
    } catch (error) {
      console.error(error);
    }
  }

  async renderWeeklyForecast(url) {
    const weeklyWeather = document.querySelector(".weekly-weather");
    weeklyWeather.innerHTML = "";

    try {
      const weeklyData = await this.weatherDataFactory.createWeeklyWeatherData(
        url
      );

      weeklyData.forEach((data) => {
        const weatherCard = document.createElement("div");
        weatherCard.classList.add("card");
        weeklyWeather.appendChild(weatherCard);

        const weatherIcon = data.icon;
        weatherCard.appendChild(weatherIcon);

        const conditions = document.createElement("span");
        conditions.textContent = data.conditions;
        weatherCard.appendChild(conditions);

        const temperature = document.createElement("span");
        temperature.textContent = data.temperature;
        weatherCard.appendChild(temperature);

        const description = document.createElement("span");
        description.textContent = data.description;
        weatherCard.appendChild(description);
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
