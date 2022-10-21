import React from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({weather, selectedClothingItems, handleCardClick}) {

    const { currentTemperatureUnit } = React.useContext(CurrentTemperatureUnitContext);

    return (
        <main className="main">
            <WeatherCard weather={weather}/>
            <p className="main__text">Today is {weather.temp?.[currentTemperatureUnit]} / You may want to wear:</p>
            <ul className="main__cardlist">
                {selectedClothingItems.map((clothingItem) => {
                    return <ItemCard clothingItem={clothingItem} key={clothingItem.id} handleCardClick={handleCardClick}/>
                })}
            </ul>
        </main>
    )
}

export default Main;