import "../public/styles.css";

import { DataService } from "./components/DataService";
import { Renderer } from "./components/Renderer";
import { SelectIcon } from "./components/IconSelector";
import { WeatherDataManager } from "./components/WeatherDataManager";
import { FormHandler } from "./components/FormHandler";

const dataService = new DataService();
const selectIcon = new SelectIcon();
const weatherDataManager = new WeatherDataManager(dataService, selectIcon);
const renderer = new Renderer(weatherDataManager);
const formHandler = new FormHandler(renderer);

document.addEventListener("DOMContentLoaded", () => {
  formHandler.handleSearch();
});

document.addEventListener("DOMContentLoaded", () => {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London?unitGroup=metric&key=3FE8XQ2ASVBX4KYRDQAP5UJY8&contentType=json`;

  try {
    renderer.renderWeatherCard(url);
    renderer.renderWeeklyForecast(url);
  } catch {}
});
