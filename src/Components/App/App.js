import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import React from 'react';
import weatherApi from '../../utils/weatherApi';
import { defaultClothingItems } from "../../utils/constants";

function App() {

const [weather, setWeather] = React.useState({});
const [clothingItems, setClothingItems ] = React.useState(defaultClothingItems);
 
 React.useEffect(() => {
 

  weatherApi.getWeather()
  .then((res) => {
    console.log(res);
    setWeather(res);
  })
  .catch((error) => {
    console.log(error)
  })

 },[])

  return (
    <div className="page">
      <Header weather={weather}/>
      <Main weather={weather} clothingItems={clothingItems}/>
    </div>
  );
}

export default App;
