import React from 'react'

import './Wheel.css'

function Wheel(props) {

    return (
        <div
            id="Wheel"
            className="hidden-sm-down"
        >
            <div
                className="mouse flex justify-center align-center"
                onClick={_ => props.onWheelClick('down')}
            >
                <div className="wheel"></div>
            </div>
        </div>
    )
}

export default Wheel
