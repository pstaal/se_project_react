import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({clothingItems, handleCardClick, openModal}) {
    return (
        <section className="profile">
            <SideBar/>
            <ClothesSection clothingItems={clothingItems} handleCardClick={handleCardClick} openModal={openModal}/>
        </section>
    )
}

export default Profile; 