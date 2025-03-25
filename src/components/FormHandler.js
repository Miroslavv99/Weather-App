export class FormHandler {
  constructor(renderer) {
    this.renderer = renderer;
  }

  handleSearch() {
    const cityInput = document.querySelector("#city-input");
    const cityForm = document.querySelector(".search-bar");

    cityForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const cityValue = cityInput.value;

      const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityValue}?unitGroup=metric&key=ARXRWGKP6GYRWFHS4Q73E3FAP&contentType=json`;

      try {
        await this.renderer.renderWeatherCard(url);
        await this.renderer.renderWeeklyForecast(url);
      } catch (error) {
        console.error(error);
      }
    });
  }
}
