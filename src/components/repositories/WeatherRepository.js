export class WeatherRepository {
  constructor(dataService, apiKey) {
    this.dataService = dataService;
    this.apiKey = apiKey;
  }

  async getWeather(city) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${this.apiKey}&contentType=json`;
    const data = await this.dataService.fetchJson(url);
    console.log(data);
    return data;
  }
}
