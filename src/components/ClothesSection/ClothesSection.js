import "./ClothesSection.css";

import ItemCard from "../ItemCard/ItemCard"

function ClothesSection({clothingItems, handleCardClick}) {

    return (
        <div className="clothessection">
            <div className="clothessection__text">
                <h2 className="clothessection__title">Your Items</h2>
                <button className="clothessection__button">+ Add New</button>
            </div>
            <ul className="clothessection__cardlist">
                {clothingItems.map((clothingItem) => {
                    return <ItemCard clothingItem={clothingItem} key={clothingItem._id} handleCardClick={handleCardClick}/>
                })}
            </ul>
        </div>
    )
}

export default ClothesSection;