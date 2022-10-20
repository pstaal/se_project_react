import './ItemModal.css';
import React from 'react';

function ItemModal({isPopupOpen, item, closePopup, openConfirmationModal, setDeleteCard}) {
    const {link, name, weather} = item;

    const handleClick = () => {
      closePopup();
      openConfirmationModal();
      setDeleteCard({name, weather, link})
    }

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
            <button className="popup__deleteButton" onClick={handleClick}>Delete item</button>
          </div>
        </div>
        )
}

export default ItemModal;