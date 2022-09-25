import {API_key, location} from './constants';
import createTemperatureRange from './createTemperatureRange';

class WeatherApi {
    constructor({ baseUrl, headers }) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }
  
   
  
    getWeather() {
      const url = new URL(this._baseUrl);
      const params = {
        key: API_key,
        q: `${location.latitude},${location.longitude}`,
        days: 1
      };

      Object.keys(params).forEach((key) =>
        url.searchParams.append(key, params[key])
      );
      return fetch(url).then((res) => res.json())
      .then((res)=> {
        console.log(res);
        return {
            temp: res.current.temp_f,
            range: createTemperatureRange(res.current.temp_f),
            location: res.location.name
        };
      })

    }

  }
  
  //initalize newsApi instance
  const weatherApi = new WeatherApi({
    baseUrl: "https://api.weatherapi.com/v1/forecast.json",
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  export default weatherApi;