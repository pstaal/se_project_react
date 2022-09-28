import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import React from 'react';
import weatherApi from '../../utils/weatherApi';

function App() {

const [weather, setWeather] = React.useState({});

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
      <Main weather={weather}/>
    </div>
  );
}

export default App;
