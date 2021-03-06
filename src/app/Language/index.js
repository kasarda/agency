import React, { Component } from 'react'
import { getLang } from '../../services/common'
import './Language.css'

class Language extends Component {

    constructor() {
        super()
        this.state = {
            language: getLang()
        }
    }

    onClick(language) {
        this.setState({ language })
        this.props.onLanguage(language)
        document.querySelectorAll('.test-anim').forEach(elem => elem.style.animation = 'XXX .4s ease-out')

    }

    render() {
        const { language } = this.state
        const nextLang = language === 'en' ? 'sk' : 'en'
        return (
            <div id="Language">
                <div
                    onClick={this.onClick.bind(this, nextLang)}
                    className="button secondary-hover"
                    data-text={nextLang}
                    role="button">
                    {nextLang}
                </div>
            </div>
        )
    }
}

export default Language