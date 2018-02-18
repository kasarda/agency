import React, { Component } from 'react'
import { text, setTitle, preventTouch } from '../../services/common'
import Letter from '../Letter'
import Form from '../Form'
import Icon from '../Icon'
import './Contacts.css'

class Contacts extends Component {

    constructor() {
        super()
        this.state = {
            active: false,
            sended: false
        }
    }

    toggleForm(value) {
        this.setState({
            active: value
        })
        if(value)
            document.body.classList.add('active-form')
        else
            document.body.classList.remove('active-form')
    }

    send() {
        this.setState({
            sended: true
        })
    }

    animationEnd({ animationName }) {
        if (/-ResetBadge/.test(animationName))
            this.setState({ sended: false })
    }
    componentDidMount() {
        preventTouch(true)
    }

    componentWillUnmount() {
        preventTouch(false)
    }

    render() {
        setTitle('Contacts - Digital Agency', 'Kontakt - Digital Agency', true)
        const { active, sended } = this.state
        return (
            <div
                id="Contacts"
                onAnimationEnd={this.animationEnd.bind(this)}
            >
                <div className="camera flex flex-center">
                    <div className="hidden-sm-down">
                        <Letter letter="C" />
                    </div>

                    <div className="container">
                        <h5 className="anim anim-1 email primary-hover">
                            <a href="mailto:info@digital.com">info@digital.com</a>
                        </h5>
                        <address className="primary-hover">
                            <a href="https://www.google.sk/maps/place/Gule+Sider/@59.9073903,10.7458804,17.67z/data=!4m5!3m4!1s0x46416e89407f7d17:0x9e3d6703336455cc!8m2!3d59.9076269!4d10.7467514?hl=en" target="_blank" rel="noopener noreferrer">
                                <div className="anim anim-2">Revierstredet 2 OSLO</div>
                                <div className="anim anim-3">NO-0104 Norway</div>
                            </a>
                        </address>
                        <div className="phone anim anim-4 primary-hover">
                            <a href="tel:85000">(067) 85 000</a>
                        </div>
                        <div className="button primary-button anim anim-5" role="button">
                            <a onClick={this.toggleForm.bind(this, true)} >{text('Contact Us', 'Napíš Nám')}</a>
                        </div>

                        <div className="icons flex justify-between">
                            <a className="primary-hover anim anim-6" href="https://www.instagram.com">
                                <Icon name="instagram" light/>
                            </a>

                            <a className="primary-hover anim anim-7" href="https://www.twitter.com">
                                <Icon name="twitter" light />
                            </a>

                            <a className="primary-hover anim anim-8" href="https://www.youtube.com">
                                <Icon name="youtube" light />
                            </a>
                        </div>
                    </div>
                    {active ? <Form onSend={this.send.bind(this)} onToggleForm={this.toggleForm.bind(this, false)} /> : null}

                </div>
                {sended ? (
                    <div className="badge">
                        {text('Thanks for feedback', 'Ďakujeme za správu')}
                    </div>
                ) : null}

            </div>
        )
    }
}

export default Contacts