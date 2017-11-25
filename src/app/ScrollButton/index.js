import React from 'react'

import './ScrollButton.css'

function ScrollButton() {

    function onClick() {
        // TODO "scroll" to next page
        console.log('Scroll Button clicked')
    }

    return (
        <div id="ScrollButton" className="hidden-sm-down">
            <div className="mouse flex justify-center align-center" onClick={onClick}>
                <div className="wheel"></div>
            </div>
        </div>
    )
}

export default ScrollButton
