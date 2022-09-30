import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import React from 'react';
import weatherApi from '../../utils/weatherApi';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { defaultClothingItems } from "../../utils/constants";

function App() {

const [weather, setWeather] = React.useState({});
const [clothingItems, setClothingItems ] = React.useState(defaultClothingItems);
const [isModalOpen, setIsModalOpen ] = React.useState(false);

 const onClose = () => {
  setIsModalOpen(false)
 };

 const openModal = () => {
  setIsModalOpen(true)
 };
 
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
      <Header weather={weather} openModal={openModal}/>
      <Main weather={weather} clothingItems={clothingItems}/>
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
    </div>
  );
}

export default App;
