import React, { Component } from 'react'
import './Description.css'

class Description extends Component {

    redirect(event) {
        event.preventDefault()
        this.props.onRedirect()
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