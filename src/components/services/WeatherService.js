import { WeatherData } from "../WeatherData";
import { WeeklyData } from "../WeatherData";

export class WeatherService {
  constructor(weatherRepository, selectIcon) {
    this.selectIcon = selectIcon;
    this.weatherRepository = weatherRepository;
  }

  async createWeatherData(city) {
    try {
      const data = await this.weatherRepository.getWeather(city);
      const weatherObject = new WeatherData(
        data.resolvedAddress.split(",")[0],
        data.resolvedAddress.split(",")[
          data.resolvedAddress.split(",").length - 1
        ],
        this.selectIcon.getIconPath(data.currentConditions.icon),
        `${Math.round(data.currentConditions.temp)}°`,
        `${data.currentConditions.sunrise.slice(0, 5)}`,
        data.currentConditions.sunset.slice(0, 5),
        `${Math.round(data.currentConditions.humidity)}%`,
        `${data.currentConditions.windspeed}km/h`
      );
      return weatherObject;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async createWeeklyWeatherData(city) {
    try {
      const data = await this.weatherRepository.getWeather(city);
      const weeklyArray = data.days.map((day) => {
        const weatherObject = new WeeklyData(
          new Date(day.datetime).toLocaleDateString("en", {
            weekday: "long",
          }),
          this.selectIcon.getIconPath(day.icon),
          day.conditions,
          Math.round(day.tempmin),
          Math.round(day.tempmax)
        );
        return weatherObject;
      });
      return weeklyArray.splice(0, 7);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
