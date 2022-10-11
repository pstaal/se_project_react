import "./WeatherCard.css";
import getBackgroundColor from "../../utils/getBackGroundColor";

import getWeatherIcon from "../../utils/getWeatherIcon";
import { weatherConditions, weatherIcons } from "../../utils/constants";

function WeatherCard({weather}) {

    const backgroundColor = getBackgroundColor(weather);
    const weatherArray = getWeatherIcon(weather);

    return (
        <div className={`weathercard ${backgroundColor}`}>
            <h2 className="weathercard__temp">{weather.temp}  &#8457;</h2>
            <div className="weathercard__wrapper">
                {weatherArray.map((item, index) => {
                    return <img key={item} src={process.env.PUBLIC_URL + weatherConditions[item]} alt={item} className={weatherIcons[index]}/>
                })}
            </div>
        </div>
    )
}

export default WeatherCard;