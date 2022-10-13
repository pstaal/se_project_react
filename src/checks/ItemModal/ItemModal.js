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
    
        window.addEventListener("keydown", closeOnEscape);
    
        return () => {
          window.removeEventListener("keydown", closeOnEscape);
        };
      }, [closePopup]);


    return (
        <div className={`popup ${isPopupOpen ? "popup_opened" : ""}`} onClick={closePopup}>
          <div className="popup__container" onClick={e => e.stopPropagation()}>
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