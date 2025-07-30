import "../public/styles.css";

import { DataService } from "./components/services/DataService";
import { WeatherService } from "./components/services/WeatherService";
import { WeatherRepository } from "./components/repositories/WeatherRepository";
import { Renderer } from "./components/Renderer";
import { SelectIcon } from "./components/IconSelector";
import { FormHandler } from "./components/FormHandler";

const dataService = new DataService();
const selectIcon = new SelectIcon();
const weatherRepository = new WeatherRepository(
  dataService,
  "3FE8XQ2ASVBX4KYRDQAP5UJY8"
);
const weatherService = new WeatherService(weatherRepository, selectIcon);
const renderer = new Renderer(weatherService);
const formHandler = new FormHandler(renderer);

document.addEventListener("DOMContentLoaded", async () => {
  try {
    await renderer.renderWeatherCard("London");
    await renderer.renderWeeklyForecast("London");
  } catch (error) {
    console.error(error);
  }
});
