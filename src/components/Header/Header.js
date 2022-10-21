import './Header.css';
import logo from '../../images/Logo.png';
import avatar from '../../images/avatar.png'
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import { Link } from 'react-router-dom';

function Header({weather, openModal}) {
    
    const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
  
    return (
        <header className="header">
            <div className="header__wrapper">
                <Link to="/"><img className="header__logo" src={logo} alt="home" /></Link>
                <p className="header__date">{currentDate}, {weather.location}</p>
            </div>
            <div className="header__wrapper">
                <ToggleSwitch/>
                <button className="header__button" onClick={openModal}>+ Add clothes</button>
                <Link to="/profile" className="header__profileName">Terrence Tegegne</Link>
                <img className="header__profileAvatar" alt="Terrence Tegegne" src={avatar}/> 
            </div>
        </header>
    );
}

export default Header;