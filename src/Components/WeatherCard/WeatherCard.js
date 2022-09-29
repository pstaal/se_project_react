import "./WeatherCard.css";
import getBackgroundColor from "../../utils/getBackGroundColor";

import getWeatherIcon from "../../utils/getWeatherIcon";
import { weatherConditions } from "../../utils/constants";

function WeatherCard({weather}) {

    const backgroundColor = getBackgroundColor(weather);
    const weatherArray = getWeatherIcon(weather);

    return (
        <div className={`weathercard ${backgroundColor}`}>
            <h2 className="weathercard__temp">{weather.temp}  &#8457;</h2>
            <div className="weathercard__wrapper">
                {weatherArray.map((item) => {
                    console.log(item);
                    return <img src={weatherConditions[item]} alt={item} className="weathercard__icon"/>
                })}
            </div>
        </div>
    )
}

export default WeatherCard;