const axios = require("axios");
const url = require("url");

class OpenWeatherClient {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "http://api.openweathermap.org/data/2.5/";
  }
  get(endpoint) {
    const URL =
      url.resolve(this.baseUrl, endpoint) +
      `&units=metric&appid=${this.apiKey}`;
    return axios
      .get(URL)
      .then((res) => res.data)
      .catch((err) => Promise.reject(err.response.data.message));
  }
  async getWeather(city, country) {
    let endpoint = `weather?q=${city}`;
    if (country) {
      endpoint += `,${country}`;
    }
    return await this.get(endpoint);
  }
}

// 450f -30 /2 = c
// (32 °F − 32) × 5/9 = 0 °C

// http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${this.apiKey}

module.exports = OpenWeatherClient;
