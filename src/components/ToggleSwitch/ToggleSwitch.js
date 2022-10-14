import "./ToggleSwitch.css";
import { useState } from 'react'

function ToggleSwitch() {
    const [checked, setChecked] = useState(false)
    return (
        <div className="container">
            <label className="switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" onChange={((e) => setChecked(e.target.checked))} />
                <div className="slider round">
                    <p className={`temp ${!checked && 'temp_active'}`}>F</p>
                    <p className={`temp ${checked && 'temp_active'}`}>C</p>
                </div>
            </label>
        </div>
    )
}

export default ToggleSwitch;