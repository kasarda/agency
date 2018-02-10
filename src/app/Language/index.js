import React, { Component } from 'react'
import './Language.css'

class Language extends Component {

    constructor() {
        super()

        this.state = {
            language: 'en'
        }
    }

    onClick(language) {
        this.setState({ language })
    }

    render() {
        const { language } = this.state
        return (
            <div id="Language">
                <div className="buttons flex justify-between">
                    <div
                        onClick={this.onClick.bind(this, 'en')}
                        className={`button primary-hover ${language === 'en' && 'active'}`}
                        role="button">EN</div>

                    <div className="divider"></div>

                    <div
                        onClick={this.onClick.bind(this, 'sk')}
                        className={`button primary-hover ${language === 'sk' && 'active'}`}
                        role="button">SK</div>
                </div>
            </div>
        )
    }
}

export default Language