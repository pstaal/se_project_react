import "./ToggleSwitch.css";

function ToggleSwitch() {

    return (
        <div className="container">
            <label className="switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" />
                <div className="slider round">
                    <p className="temp">F</p>
                    <p className="temp">C</p>
                </div>
            </label>
        </div>
    )
}

export default ToggleSwitch;