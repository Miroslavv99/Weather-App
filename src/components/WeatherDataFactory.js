import { WeatherData } from "./WeatherData";
import { WeeklyData } from "./WeatherData";

export class WeatherDataFactory {
  constructor(weatherService, selectIcon) {
    this.selectIcon = selectIcon;
    this.weatherService = weatherService;
  }

  async createWeatherData(url) {
    try {
      const data = await this.weatherService.getApiData(url);
      const weatherObject = new WeatherData(
        data.resolvedAddress.split(",")[0],
        data.resolvedAddress.split(",")[1],
        this.selectIcon.getIcon(data.currentConditions.icon),
        data.currentConditions.conditions,
        `${Math.round(data.currentConditions.temp)}°`,
        data.description
      );
      return weatherObject;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async createWeeklyWeatherData(url) {
    try {
      const data = await this.weatherService.getApiData(url);
      const weeklyArray = data.days.map((day) => {
        const weatherObject = new WeeklyData(
          this.selectIcon.getIcon(day.icon),
          day.conditions,
          Math.round(day.temp),
          day.conditions
        );
        return weatherObject;
      });
      return weeklyArray;
    } catch {}
  }
}
