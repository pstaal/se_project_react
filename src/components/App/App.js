import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import React from 'react';
import weatherApi from '../../utils/weatherApi';
import ItemModal from '../ItemModal/ItemModal';
import Footer from '../Footer/Footer';
import { CurrentTemperatureUnitContext } from '../../contexts/CurrentTemperatureUnitContext';
import Profile from '../Profile/Profile';
import AddItemModal from '../AddItemModal/AddItemModal';
import { Route, Switch } from 'react-router-dom';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import api from '../../utils/api';

function App() {

const [weather, setWeather] = React.useState({});
const [clothingItems, setClothingItems ] = React.useState([]);
const [isModalOpen, setIsModalOpen ] = React.useState(false);
const [isPopupOpen, setIsPopupOpen ] = React.useState(false);
const [isConfirmationModalOpen, setIsConfirmationModalOpen] = React.useState(false);
const [popupItem, setPopupItem ] = React.useState({name: '', weather: '', imageUrl:''});
const [currentTemperatureUnit, setCurrentTemperatureUnit] = React.useState('F'); 
const [deleteCard, setDeleteCard ] = React.useState(null);

 const onClose = () => {
  setIsModalOpen(false)
 };

 const openModal = () => {
  setIsModalOpen(true)
 };

 const openConfirmationModal = () => {
  setIsConfirmationModalOpen(true)
 };

 const closeConfirmationModal = () => {
  setIsConfirmationModalOpen(false)
  setDeleteCard(null);
};
 
 React.useEffect(() => {
  weatherApi.getWeather()
  .then((res) => {
    setWeather(res);
  })
  .catch((error) => {
    console.log(error)
  })

 },[])

 React.useEffect(() => {
  api.getItems()
  .then((res) => {
    setClothingItems(res);
  })
  .catch((error) => {
    console.log(error)
  })

 },[])

 const selectedClothingItems = React.useMemo(() => {
   return clothingItems.filter((item) => item.weather === weather.range);
 },[clothingItems, weather.range]);

 const handleCardClick = ({name, weather, imageUrl, id}) => {
    
    setPopupItem({name ,weather, imageUrl, id});
    setIsPopupOpen(true);
 };

 const closePopup = () => {
  setPopupItem({name: '', weather: '', link: '', id: ''});
  setIsPopupOpen(false);
 }

 const handleAddItemSubmit = (name, imageUrl, weather) => {
  api.addItem(name, imageUrl, weather).then((res) => {
    setClothingItems([res, ...clothingItems]); 
  }).catch((error) => {
    console.log(error)
  })
  
 }

 const handleToggleSwitchChange = () => {
  currentTemperatureUnit === 'F'
    ? setCurrentTemperatureUnit('C')
    : setCurrentTemperatureUnit('F');
}; 

const handleCardDelete = () => {
api.deleteItem(deleteCard).then((res) => {
  setClothingItems(clothingItems.filter((item) => item.id !== deleteCard))
  closeConfirmationModal();
  setDeleteCard(null);
}).catch((error) => {
  console.log(error)
})
 
};

  return (
    <div className="page">
       <CurrentTemperatureUnitContext.Provider value={{ currentTemperatureUnit, handleToggleSwitchChange }}>
          <Header weather={weather} openModal={openModal}/>
            <Switch>
              <Route path="/profile">
                <Profile clothingItems={clothingItems} handleCardClick={handleCardClick} openModal={openModal}/>
              </Route>
              <Route path="/">
                <Main weather={weather} selectedClothingItems={selectedClothingItems} handleCardClick={handleCardClick} />
              </Route>   
            </Switch>
          <Footer/>
          <AddItemModal onClose={onClose} isModalOpen={isModalOpen} onAddItem={handleAddItemSubmit} />
          <ItemModal isPopupOpen={isPopupOpen} item={popupItem} closePopup={closePopup} openConfirmationModal={openConfirmationModal} setDeleteCard={setDeleteCard}/>
          <ConfirmationModal isConfirmationModalOpen={isConfirmationModalOpen} closeConfirmationModal={closeConfirmationModal} handleCardDelete={handleCardDelete}/>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
