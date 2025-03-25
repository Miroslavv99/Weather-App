export class WeatherData {
  constructor(city, country, icon, conditions, temperature, description) {
    this.city = city;
    this.country = country;
    this.icon = icon;
    this.conditions = conditions;
    this.temperature = temperature;
    this.description = description;
  }
}

export class WeeklyData {
  constructor(icon, conditions, temperature, description) {
    this.icon = icon;
    this.conditions = conditions;
    this.temperature = temperature;
    this.description = description;
  }
}
