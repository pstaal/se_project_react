import WeatherCard from "../WeatherCard/WeatherCard";
import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";

function Main({weather, clothingItems, handleCardClick}) {
    return (
        <main className="main">
            <WeatherCard weather={weather}/>
            <p className="main__text">Today is {weather.temp}  &#8457; / You may want to wear:</p>
            <ul className="main__cardlist">
                {clothingItems.map((clothingItem) => {
                    return <ItemCard clothingItem={clothingItem} key={clothingItem._id} handleCardClick={handleCardClick}/>
                })}
            </ul>
        </main>
    )
}

export default Main;