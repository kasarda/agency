import React from 'react'
import { preload, text } from '../../services/common'
import './Description.css'

function Description({ description, theme, id, onRedirect }) {

    function redirect(event) {
        event.preventDefault()
        onRedirect()

        preload(
            id,
            `bg${id}.jpg`,
            `mobile${id}.png`,
            `desktop${id}-1.jpg`,
            `desktop${id}-2.jpg`,
            `desktop${id}-3.jpg`,
            `desktop${id}-4.jpg`
        )
    }

    const descriptionList = description.map((text, key) =>
        (<p key={key} className={`anim anim-${key + 1}`}>{text}</p>)
    )

    return (
        <div id="Description">
            <div className="paragraphs hidden-sm-down">
                {descriptionList}
            </div>
            <div className={`button anim anim-${descriptionList.length + 1}`}>
                <div className="primary-button" style={{ color: theme }}>
                    <a onClick={redirect}>{text('view case', 'zobraziť')}</a>
                </div>
            </div>
        </div>
    )
}

export default Description