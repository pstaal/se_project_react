import "./WeatherCard.css";
import getBackgroundColor from "../../utils/getBackGroundColor";
import sunny_day from "../../images/sunny_day.png";
import cloudy_day from "../../images/cloudy_day.png";
import rain_day from "../../images/rain_day.png";
import storm_day from "../../images/storm_day.png";
import snow_day from "../../images/snow_day.png";
import fog_day from "../../images/fog_day.png";

import sunny_night from "../../images/sunny_night.png";
import cloudy_night from "../../images/cloudy_night.png";
import rain_night from "../../images/rain_night.png";
import storm_night from "../../images/storm_night.png";
import snow_night from "../../images/snow_night.png";
import fog_night from "../../images/fog_night.png";

import getWeatherIcon from "../../utils/getWeatherIcon";

function WeatherCard({weather}) {

    const backgroundColor = getBackgroundColor(weather);
    const weatherIcon = getWeatherIcon(weather);

    return (
        <div className={`weathercard ${backgroundColor}`}>
            <h2 className="weathercard__temp">{weather.temp}  &#8457;</h2>
            <img src={weatherIcon} alt={weatherIcon.toString()}/>
        </div>
    )
}

export default WeatherCard;