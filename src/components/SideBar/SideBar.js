import "./SideBar.css";
import avatar from '../../images/avatar.png'

function SideBar(){
    return (
        <div className="sidebar">
            <img className="sidebar__profileAvatar" alt="Terrence Tegegne" src={avatar}/> 
            <p className="sidebar__profileName">Terrence Tegegne</p>
        </div>
    )
}

export default SideBar;