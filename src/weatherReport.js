// ./src/weatherReport.js

export default class WeatherReport {
  constructor(data) {
    this.location = data.resolvedAddress;
    this.description = data.description;
    this.temp = Math.round((parseInt(data.currentConditions.temp) - 32) / 1.8);
    this.windspeed = Math.round(parseInt(data.currentConditions.windspeed) * 1.609344);
  }
}
