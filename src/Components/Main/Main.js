import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

function Main({weather}) {
    return (
        <main className="main">
            <WeatherCard weather={weather}/>
            <ul>

            </ul>
        </main>
    )
}

export default Main;