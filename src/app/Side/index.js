import React from 'react'

import './Side.css'


function Side(props) {
    return (
        <div id="Side" className="view">
            <h2>{props.page}</h2>
        </div>
    )
}

export default Side