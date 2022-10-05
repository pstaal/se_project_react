import './ItemModal.css';
import React from 'react';

function ItemModal({isPopupOpen, item, closePopup}) {
    const {link, name, weather} = item;

    React.useEffect(() => {
        const closeOnEscape = (event) => {
          if (event.key === "Escape") {
            closePopup();
          }
        };
    
        const closeOnClick = (event) => {
          if (
            event.target.classList.contains("popup") &&
            !event.target.classList.contains("popup__container")
          ) {
            closePopup();
          }
        };
    
        window.addEventListener("click", closeOnClick);
        window.addEventListener("keydown", closeOnEscape);
    
        return () => {
          window.removeEventListener("click", closeOnClick);
          window.removeEventListener("keydown", closeOnEscape);
        };
      }, [closePopup]);


    return (
        <div className={`popup ${isPopupOpen ? "popup_opened" : ""}`}>
          <div className="popup__container">
            <button
            type="button"
            className="popup__close"
            onClick={closePopup}
            ></button>
            <img src={link} alt={name} className="popup__image"/>
            <p className="popup__itemName">{name}</p>
            <p className="popup__itemWeather">Weather: {weather}</p>
          </div>
        </div>
        )
}

export default ItemModal;