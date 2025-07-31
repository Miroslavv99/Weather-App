import { WeatherRepository } from "../components/repositories/WeatherRepository";
import { DataService } from "../components/services/DataService";
import { WeatherService } from "../components/services/WeatherService";

describe("Data service tests", () => {
  test("Data test one", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ city: "London", weather: "Cloudy" }),
      })
    );
    const dataService = new DataService();
    const url = "https://api.example.com/weather?city=London";
    const data = await dataService.fetchJson(url);

    expect(global.fetch).toHaveBeenCalledWith(url);
    expect(data).toEqual({ city: "London", weather: "Cloudy" });
  });

  test("Data test one", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        status: 404,
        json: () => Promise.resolve({ city: "London", weather: "Cloudy" }),
      })
    );
    const dataService = new DataService();
    const url = "https://api.example.com/weather?city=London";

    await expect(dataService.fetchJson(url)).rejects.toThrow(
      "An error has occurred: 404"
    );

    expect(global.fetch).toHaveBeenCalledWith(url);
  });
});

test("Weather repository", async () => {
  const mockData = { city: "London", weather: "Cloudy" };
  const mockDataService = {
    fetchJson: jest.fn(() => Promise.resolve(mockData)),
  };

  const apiKey = "TEST KEY";
  const weatherRepository = new WeatherRepository(mockDataService, apiKey);

  const city = "London";
  const data = await weatherRepository.getWeather(city);

  expect(mockDataService.fetchJson).toHaveBeenCalledWith(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json`
  );
  expect(data).toEqual(mockData);
});

describe("Weather service", () => {
  test("Create Weather Data", async () => {
    const mockData = {
      resolvedAddress: "London, UK",
      currentConditions: {
        icon: "cloudy",
        temp: 18.6,
        sunrise: "06:12:00",
        sunset: "20:45:00",
        humidity: 73,
        windspeed: 14,
      },
    };

    const mockWeatherRepository = {
      getWeather: jest.fn(() => Promise.resolve(mockData)),
    };

    const mockSelectIcon = {
      getIconPath: jest.fn(() => "icon.svg"),
    };

    const weatherService = new WeatherService(
      mockWeatherRepository,
      mockSelectIcon
    );

    const result = await weatherService.createWeatherData("London");

    expect(result.temperature).toBe("19°");
  });

  test("Create Weekly Weather Data", async () => {
    const mockWeeklyData = {
      resolvedAddress: "London, UK",
      currentConditions: {
        icon: "cloudy",
        temp: 18.6,
        sunrise: "06:12:00",
        sunset: "20:45:00",
        humidity: 73,
        windspeed: 14,
      },
      days: [
        {
          datetime: "2024-08-01",
          icon: "rain",
          conditions: "Rain",
          tempmin: 16,
          tempmax: 22,
        },
        {
          datetime: "2024-08-02",
          icon: "cloudy",
          conditions: "Cloudy",
          tempmin: 17,
          tempmax: 23,
        },
      ],
    };

    const mockWeatherRepository = {
      getWeather: jest.fn(() => Promise.resolve(mockWeeklyData)),
    };

    const mockSelectIcon = {
      getIconPath: jest.fn(() => Promise.resolve("icon.svg")),
    };

    const weatherService = new WeatherService(
      mockWeatherRepository,
      mockSelectIcon
    );

    const result = await weatherService.createWeeklyWeatherData("London");

    expect(result[0].tempMin).toBe(16);
  });
});
