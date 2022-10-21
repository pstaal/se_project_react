import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import React from "react";

function AddItemModal({onClose, isModalOpen, onAddItem}) {

    const [name, setName] = React.useState('');
    const [imageUrl, setImageUrl] = React.useState('');
    const [weather, setWeather] = React.useState('');

    React.useEffect(() => {
        setName('');
        setImageUrl('');
    },[isModalOpen])

    const handleWeatherUnitChange = (event) => {
        setWeather(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddItem(name, imageUrl, weather);
        onClose();
    }

    return (
        <ModalWithForm title={"New garment"} name={"garment"} onClose={onClose} isModalOpen={isModalOpen} onAddItem={onAddItem} buttonText={"Add garment"} handleSubmit={handleSubmit}>
            <label className="modal__label" htmlFor="name">Name</label>
            <input className="modal__inputtext" type="text" id="name" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} required/>
            <label className="modal__label" htmlFor="image">Image</label>
            <input className="modal__inputtext" type="text" id="image" placeholder="Image URL" onChange={(e) => setImageUrl(e.target.value)} value={imageUrl} required/>
            <label className="modal__label" htmlFor="weathertype">Select the weather type:</label>
            <div className="modal__radiocontainer">
              <input className="modal__inputradio" type="radio" id="hot" name="weathertype" onChange={handleWeatherUnitChange} value="hot"/>
              <label className="modal__radiolabel" htmlFor="hot">Hot</label>
            </div>
            <div className="modal__radiocontainer">
              <input className="modal__inputradio" type="radio" id="warm" name="weathertype" onChange={handleWeatherUnitChange} value="warm"/>
              <label className="modal__radiolabel" htmlFor="warm">Warm</label>
            </div>
            <div className="modal__radiocontainer">
              <input className="modal__inputradio" type="radio" id="cold" name="weathertype" onChange={handleWeatherUnitChange} value="cold"/>
              <label className="modal__radiolabel" htmlFor="cold">Cold</label>
            </div>
        </ModalWithForm>
    )
}

export default AddItemModal;