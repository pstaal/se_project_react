import "./WeatherCard.css";
import getBackgroundColor from "../../utils/getBackGroundColor";

function WeatherCard({weather}) {

    const backgroundColor = getBackgroundColor(weather);

    return (
        <div className={`weathercard ${backgroundColor}`}>
            <h2 className="weathercard__temp">{weather.temp}  &#8457;</h2>
        </div>
    )
}

export default WeatherCard;