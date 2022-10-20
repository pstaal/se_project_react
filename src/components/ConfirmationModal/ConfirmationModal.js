import "./ConfirmationModal.css";
import React from "react";


function ConfirmationModal({isConfirmationModalOpen, closeConfirmationModal, handleCardDelete}) {

    React.useEffect(() => {
        const closeOnEscape = (event) => {
          if (event.key === "Escape") {
            closeConfirmationModal();
          }
        };
    
        window.addEventListener("keydown", closeOnEscape);
    
        return () => {
          window.removeEventListener("keydown", closeOnEscape);
        };
      }, [closeConfirmationModal]);

    return (
        <div className={`confirmationModal ${isConfirmationModalOpen ? "confirmationModal_opened" : ""}`} onClick={closeConfirmationModal}>
            <div className="confirmationModal__container" onClick={e => e.stopPropagation()}>
                <button
                    type="button"
                    className="confirmationModal__close"
                    onClick={closeConfirmationModal}
                ></button>
                <p className="confirmationModal__text">Are you sure you want to delete this item? This action is irreversible.</p>
                <button onClick={handleCardDelete} className="confirmationModal__confirmButton">Yes, delete item</button>
                <button onClick={closeConfirmationModal} className="confirmationModal__cancelButton">Cancel</button>
            </div>
        </div>
    )
}

export default ConfirmationModal;