import "../public/styles.css";

import { WeatherService } from "./components/WeatherService";
import { Renderer } from "./components/Renderer";
import { SelectIcon } from "./components/IconSelector";
import { WeatherDataFactory } from "./components/WeatherDataFactory";
import { WeatherData } from "./components/WeatherData";

const cityInput = document.querySelector("#city-input");
const searchButton = document.querySelector("#search-button");

const weatherService = new WeatherService();
const selectIcon = new SelectIcon();
const weatherData = new WeatherData();
const weatherDataFactory = new WeatherDataFactory(weatherService, selectIcon);
const renderer = new Renderer(weatherDataFactory);

searchButton.addEventListener("click", () => {
  const inputValue = cityInput.value;

  renderer.renderWeatherCard(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${inputValue}?unitGroup=metric&key=ARXRWGKP6GYRWFHS4Q73E3FAP&contentType=json`
  );
});
