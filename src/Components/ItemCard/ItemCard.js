import "./ItemCard.css";

function ItemCard({clothingItem, handleCardClick}) {

    const {link, name, weather} = clothingItem;

    const handleClick = () => {
        handleCardClick(link, name, weather)
    }

    return (
        <li className="itemcard" onClick={handleClick}>
            <img className="itemcard__image" src={link} alt={name}/>
            <h3 className="itemcard__title">{name}</h3>
        </li>
    )
}

export default ItemCard;