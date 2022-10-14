import {API_key, location} from './constants';
import createTemperatureRange from './createTemperatureRange';
import getCondition from './getCondition';

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
        return {
            temp: { F : `${res.current.temp_f}°F`, C : `${res.current.temp_c}°C` },
            range: createTemperatureRange(res.current.temp_f),
            location: res.location.name,
            is_day: res.current.is_day === 1,
            condition: getCondition(res.current.condition.text)
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