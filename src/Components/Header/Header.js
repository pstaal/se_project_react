import './Header.css';
import logo from '../../images/Logo.png';
import avatar from '../../images/avatar.png'

function Header() {
    
    const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
  
    return (
        <header className="header">
            <div className="header__wrapper">
                <img className="header__logo" src={logo} alt="home" />
                <p className="header__date">{currentDate}, Culemborg</p>
            </div>
            <div className="header__wrapper">
                <button className="header__button">+ Add clothes</button>
                <p className="header__profileName">Terrence Tegegne</p>
                <img className="header__profileAvatar" alt="Terrence Tegegne" src={avatar}/> 
            </div>
        </header>
    );
}

export default Header;