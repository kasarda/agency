import React from 'react'

import './Wheel.css'


function Wheel(props) {

    return (
        <div id="Wheel">
            <div className="mouse flex flex-center hidden-sm-down">
                <div className="wheel"></div>
            </div>
        </div>
    )
}

export default Wheel