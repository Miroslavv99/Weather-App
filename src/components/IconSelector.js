export class SelectIcon {
  getIcon(icon) {
    const weatherImg = document.createElement("img");
    weatherImg.classList.add("weather-img");

    switch (icon) {
      case "partly-cloudy-night":
      case "partly-cloudy-day":
        weatherImg.src = "/images/cloudy.svg";
        break;

      case "cloudy":
      case "wind":
        weatherImg.src = "/images/cloudy.svg";
        break;

      case "rain":
      case "showers-day":
      case "showers-night":
        weatherImg.src = "/images/rainy.svg";
        break;

      case "fog":
        weatherImg.src = "/images/fog.svg";
        break;

      case "snow":
      case "snow-showers-day":
      case "snow-showers-night":
        weatherImg.src = "/images/snow.svg";
        break;

      case "thunder-rain":
      case "thunder-showers-day":
      case "thunder-showers-night":
        weatherImg.src = "/images/thunder-rain.svg";
        break;

      case "clear-day":
      case "clear-night":
        weatherImg.src = "/images/sunny.svg";
        break;
    }
    return weatherImg;
  }
}
