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
            (<p key={key} className={`fadeIn fadeIn-${key + 1}`}>{text}</p>)
        )

        return (
            <div id="Description">
                <div className="paragraphs hidden-sm-down">
                    {descriptionList}
                </div>
                <div className={`button fadeIn fadeIn-${descriptionList.length + 1}`}>
                    <div className="button-container" style={{ color: theme }}>
                        <a className="button-primary" onClick={this.redirect.bind(this)}>view case</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Description