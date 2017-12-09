import React from 'react'
import { Link } from 'react-router-dom'

import './Description.css'

function Description({ description, theme, link}) {

    const descriptionList = description.map((text, key) =>
        (<p key={key} className={`fadeIn fadeIn-${key + 1}`}>{text}</p>)
    )

    return (
        <div id="Description">
            <div className="hidden-sm-down">
                {descriptionList}
            </div>
            <div className={`button fadeIn fadeIn-${descriptionList.length + 1}`}>
                <div className="button-container" style={{ color: theme }}>
                    <Link to={link} className="button-primary">view case</Link>
                </div>
            </div>
        </div>
    )
}

export default Description