export class WeatherData {
  constructor(city, country, icon, conditions, temperature, description) {
    this.city = city;
    this.country = country;
    this.conditions = conditions;
    this.icon = icon;
    this.temperature = temperature;
    this.description = description;
  }
}
