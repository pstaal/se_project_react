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
        <div className="switch__container">
            <label className="switch__label" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" onChange={handleChange} />
                <div className="switch__slider round">
                    <p className={`switch__text ${!checked && 'switch__text-active'}`}>F</p>
                    <p className={`switch__text ${checked && 'switch__text-active'}`}>C</p>
                </div>
            </label>
        </div>
    )
}

export default ToggleSwitch;