import "./ItemCard.css";

function ItemCard({clothingItem, handleCardClick}) {

    const handleClick = (event) => {
        event.preventDefault();
        handleCardClick(clothingItem)
    }

    return (
        <li className="itemcard" onClick={handleClick}>
            <img className="itemcard__image" src={clothingItem.link} alt={clothingItem.name}/>
            <h3 className="itemcard__title">{clothingItem.name}</h3>
        </li>
    )
}

export default ItemCard;