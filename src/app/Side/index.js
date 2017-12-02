import React from 'react'

import './Side.css'


function Side(props) {
    return (
        <div id="Side" className="view flex flex-center">
            <h2>{props.ready && props.page}</h2>
        </div>
    )
}

export default Side