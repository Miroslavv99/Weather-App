export class FormHandler {
  constructor(renderer) {
    this.renderer = renderer;
    this.handleSearch();
  }

  handleSearch() {
    const cityInput = document.querySelector("#city-input");
    const cityForm = document.querySelector(".search-bar");

    cityForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const cityValue = cityInput.value;

      try {
        await this.renderer.renderWeatherCard(cityValue);
        await this.renderer.renderWeeklyForecast(cityValue);
      } catch (error) {
        console.error(error);
      }
      cityForm.reset();
    });
  }
}
