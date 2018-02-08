import React, { Component } from 'react'
import preload from '../../services/preload'
import './Description.css'

class Description extends Component {

    redirect(event) {
        event.preventDefault()
        this.props.onRedirect()

        const { id } = this.props

        const data = document.head.dataset
        const preloaded = data.preloaded || '|'

        if(!preloaded.includes(`|${id}|`)) {

            preload(
                `bg${id}.jpg`,
                `mobile${id}.png`,
                `desktop${id}-1.jpg`,
                `desktop${id}-2.jpg`,
                `desktop${id}-3.jpg`,
                `desktop${id}-4.jpg`
            )

            data.preloaded = `${preloaded}${id}|`
        }

    }

    render() {
        const { description, theme } = this.props
        const descriptionList = description.map((text, key) =>
            (<p key={key} className={`init-animation init-animation-${key + 1}`}>{text}</p>)
        )

        return (
            <div id="Description">
                <div className="paragraphs hidden-sm-down">
                    {descriptionList}
                </div>
                <div className={`button init-animation init-animation-${descriptionList.length + 1}`}>
                    <div className="primary-button" style={{ color: theme }}>
                        <a onClick={this.redirect.bind(this)}>view case</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Description