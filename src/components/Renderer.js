import { WeatherService } from "./WeatherService";

export class Renderer {
  constructor(weatherDataFactory) {
    this.weatherDataFactory = weatherDataFactory;
  }

  async renderWeatherCard(url) {
    const weatherCard = document.querySelector(".weather-card");
    weatherCard.innerHTML = "";

    try {
      const weatherData = await this.weatherDataFactory.createWeatherData(url);

      const city = document.createElement("span");
      city.textContent = weatherData.city;
      weatherCard.appendChild(city);

      const country = document.createElement("span");
      country.textContent = weatherData.country;
      weatherCard.appendChild(country);

      const weatherIcon = weatherData.icon;
      weatherCard.appendChild(weatherIcon);

      const conditions = document.createElement("span");
      conditions.textContent = weatherData.conditions;
      weatherCard.appendChild(conditions);

      const temperature = document.createElement("span");
      temperature.textContent = weatherData.temperature;
      weatherCard.appendChild(temperature);

      const description = document.createElement("span");
      description.textContent = weatherCard.description;
      weatherCard.appendChild(description);
    } catch (error) {
      console.error(error);
    }
  }
}
