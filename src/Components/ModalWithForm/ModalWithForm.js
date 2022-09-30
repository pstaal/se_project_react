import "./ModalWithForm.css";
import React from 'react';

function ModalWithForm({title, name, buttonText, children, isModalOpen, onClose}) {


    React.useEffect(() => {
        const closeOnEscape = (event) => {
          if (event.key === "Escape") {
            onClose();
          }
        };
    
        const closeOnClick = (event) => {
          if (
            event.target.classList.contains("modal") &&
            !event.target.classList.contains("modal__container")
          ) {
            onClose();
          }
        };
    
        window.addEventListener("click", closeOnClick);
        window.addEventListener("keydown", closeOnEscape);
    
        return () => {
          window.removeEventListener("click", closeOnClick);
          window.removeEventListener("keydown", closeOnEscape);
        };
      }, [onClose]);


   const closeModal = () => {
        onClose();
   }

    return (
    <div className={`modal modal_type_${name} ${isModalOpen ? "modal_opened" : ""}`}>
      <div className="modal__container">
        <h2 className="modal__title">{title}</h2>
        <button
          type="button"
          className="modal__close"
          onClick={closeModal}
        ></button>
        <form className="modal__form" name={name}>
            {children}
            <button type="submit" className="modal__button">{buttonText}</button>
        </form>    
      </div>
    </div>
    )
}

export default ModalWithForm;