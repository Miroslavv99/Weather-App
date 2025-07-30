export class SelectIcon {
  getIconPath(icon) {
    switch (icon) {
      case "partly-cloudy-night":
        return "images/cloudy-night.svg";
      case "partly-cloudy-day":
        return "images/partly-cloudy.svg";
      case "cloudy":
      case "wind":
        return "images/cloudy.svg";
      case "rain":
      case "showers-day":
      case "showers-night":
        return "images/rainy.svg";
      case "fog":
        return "images/fog.svg";
      case "snow":
      case "snow-showers-day":
      case "snow-showers-night":
        return "images/snow.svg";
      case "thunder-rain":
      case "thunder-showers-day":
      case "thunder-showers-night":
        return "images/thunderstorm.svg";
      case "clear-day":
      case "clear-night":
        return "images/sunny.svg";
      default:
        return "images/default.svg";
    }
  }
}
