export class WeatherService {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }
  async getApiData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`An error has occurred: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
