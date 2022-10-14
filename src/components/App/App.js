import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import React from 'react';
import weatherApi from '../../utils/weatherApi';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import ItemModal from '../ItemModal/ItemModal';
import Footer from '../Footer/Footer';
import { defaultClothingItems } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from '../../contexts/CurrentTemperatureUnitContext';

function App() {

const [weather, setWeather] = React.useState({});
const [clothingItems, setClothingItems ] = React.useState(defaultClothingItems);
const [isModalOpen, setIsModalOpen ] = React.useState(false);
const [isPopupOpen, setIsPopupOpen ] = React.useState(false);
const [popupItem, setPopupItem ] = React.useState({name: '', weather: '', link:''});
const [currentTemperatureUnit, setCurrentTemperatureUnit] = React.useState('F'); 

 const onClose = () => {
  setIsModalOpen(false)
 };

 const openModal = () => {
  setIsModalOpen(true)
 };
 
 React.useEffect(() => {
 

  weatherApi.getWeather()
  .then((res) => {
    setWeather(res);
  })
  .catch((error) => {
    console.log(error)
  })

 },[])

 const handleCardClick = ({name, weather, link}) => {
    
    setPopupItem({name ,weather, link});
    setIsPopupOpen(true);
 };

 const closePopup = () => {
  setPopupItem({name: '', weather: '', link: ''});
  setIsPopupOpen(false);
 }

 const handleToggleSwitchChange = () => {
  currentTemperatureUnit === 'F'
    ? setCurrentTemperatureUnit('C')
    : setCurrentTemperatureUnit('F');
}; 

  return (
    <div className="page">
       <CurrentTemperatureUnitContext.Provider value={{ currentTemperatureUnit, handleToggleSwitchChange }}>
          <Header weather={weather} openModal={openModal}/>
          <Main weather={weather} clothingItems={clothingItems} handleCardClick={handleCardClick} />
          <Footer/>
          <ModalWithForm title={"New garment"} name={"garment"} buttonText={"Add garment"} onClose={onClose} isModalOpen={isModalOpen}>
            <label className="modal__label" htmlFor="name">Name</label>
            <input className="modal__inputtext" type="text" id="name" placeholder="Name" required/>
            <label className="modal__label" htmlFor="image">Image</label>
            <input className="modal__inputtext" type="text" id="image" placeholder="Image URL" required/>
            <label className="modal__label" htmlFor="weathertype">Select the weather type:</label>
            <div className="modal__radiocontainer">
              <input className="modal__inputradio" type="radio" id="hot" name="weathertype" value="hot"/>
              <label className="modal__radiolabel" htmlFor="hot">Hot</label>
            </div>
            <div className="modal__radiocontainer">
              <input className="modal__inputradio" type="radio" id="warm" name="weathertype" value="warm"/>
              <label className="modal__radiolabel" htmlFor="warm">Warm</label>
            </div>
            <div className="modal__radiocontainer">
              <input className="modal__inputradio" type="radio" id="cold" name="weathertype" value="cold"/>
              <label className="modal__radiolabel" htmlFor="cold">Cold</label>
            </div>
          </ModalWithForm>
          <ItemModal isPopupOpen={isPopupOpen} item={popupItem} closePopup={closePopup}/>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
