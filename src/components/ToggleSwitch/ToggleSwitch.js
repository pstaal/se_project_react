import "./ToggleSwitch.css";
import { useState } from 'react'
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import React from "react";

function ToggleSwitch() {
    const [checked, setChecked] = useState(false);

    const { currentTemperatureUnit, handleToggleSwitchChange } = React.useContext(CurrentTemperatureUnitContext);

    const handleChange = (event) => {
        setChecked(event.target.checked);
        handleToggleSwitchChange();
    };

    return (
        <div className="container">
            <label className="switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" onChange={handleChange} />
                <div className="slider round">
                    <p className={`temp ${!checked && 'temp_active'}`}>F</p>
                    <p className={`temp ${checked && 'temp_active'}`}>C</p>
                </div>
            </label>
        </div>
    )
}

export default ToggleSwitch;