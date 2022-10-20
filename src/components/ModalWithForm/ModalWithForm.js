import "./ModalWithForm.css";
import React from 'react';

function ModalWithForm({title, name, buttonText, children, isModalOpen, onClose, handleSubmit}) {


    React.useEffect(() => {
        const closeOnEscape = (event) => {
          if (event.key === "Escape") {
            onClose();
          }
        };
    
    
        window.addEventListener("keydown", closeOnEscape);
    
        return () => {

          window.removeEventListener("keydown", closeOnEscape);
        };
      }, [onClose]);


   const closeModal = () => {
        onClose();
   }

    return (
    <div className={`modal modal_type_${name} ${isModalOpen ? "modal_opened" : ""}`} onClick={closeModal}>
      <div className="modal__container" onClick={e => e.stopPropagation()}>
        <h2 className="modal__title">{title}</h2>
        <button
          type="button"
          className="modal__close"
          onClick={closeModal}
        ></button>
        <form className="modal__form" name={name}>
            {children}     
            <button type="submit" onClick={(event) => handleSubmit(event)} className="modal__button">{buttonText}</button>
        </form>    
      </div>
    </div>
    )
}

export default ModalWithForm;