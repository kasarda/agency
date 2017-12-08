import React from 'react'

import './Navigator.css'

function Navigator({ onPage }) {

    return (
        <div id="Navigator">
            <div className="links flex justify-between">
                <div onClick={_ => onPage(0)}>C</div>
                <div onClick={_ => onPage(1)}>E</div>
                <div onClick={_ => onPage(2)}>Y</div>
                <div onClick={_ => onPage(3)}>H</div>
                <div onClick={_ => onPage(4)}>T</div>
            </div>
        </div>
    )
}

export default Navigator