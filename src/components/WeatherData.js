export class WeatherData {
  constructor(
    city,
    country,
    icon,
    temperature,
    sunrise,
    sunset,
    humidity,
    windspeed
  ) {
    this.city = city;
    this.country = country;
    this.icon = icon;
    this.temperature = temperature;
    this.sunrise = sunrise;
    this.sunset = sunset;
    this.humidity = humidity;
    this.windspeed = windspeed;
  }
}

export class WeeklyData {
  constructor(date, icon, conditions, tempMin, tempMax) {
    this.date = date;
    this.icon = icon;
    this.conditions = conditions;
    this.tempMin = tempMin;
    this.tempMax = tempMax;
  }
}
