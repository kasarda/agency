import React from 'react'

import './Wheel.css'

function Wheel(props) {

    return (
        <div
            id="Wheel"
        >
            <div
                className="mouse flex justify-center align-center hidden-sm-down"
                onClick={_ => props.onWheelClick('down')}
            >
                <div className="wheel"></div>
            </div>
        </div>
    )
}

export default Wheel
