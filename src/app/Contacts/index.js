import React, { Component } from 'react'
import './Contacts.css'
import Letter from '../Letter'
import Form from '../Form'

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
        document.body.dataset.preventTouch = "true"
    }

    componentWillUnmount() {
        document.body.dataset.preventTouch = "false"
    }

    render() {
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
                        <h5 className="init-animation init-animation-1 email primary-hover underline">
                            <a href="mailto:info@digital.com">info@digital.com</a>
                        </h5>
                        <address className="primary-hover">
                            <a href="https://www.google.sk/maps/place/Gule+Sider/@59.9073903,10.7458804,17.67z/data=!4m5!3m4!1s0x46416e89407f7d17:0x9e3d6703336455cc!8m2!3d59.9076269!4d10.7467514?hl=en" target="_blank" rel="noopener noreferrer">
                                <div className="init-animation init-animation-2">Revierstredet 2 OSLO</div>
                                <div className="init-animation init-animation-3">NO-0104 Norway</div>
                            </a>
                        </address>
                        <div className="phone init-animation init-animation-4 primary-hover">
                            <a href="tel:85000">(067) 85 000</a>
                        </div>
                        <div className="button primary-button init-animation init-animation-5">
                            <a onClick={this.toggleForm.bind(this, true)} >Contact Us</a>
                        </div>

                        <div className="icons flex justify-between">
                            <a className="primary-hover init-animation init-animation-6" href="https://www.instagram.com">
                                <svg width="18" height="18" viewBox="0 0 24 24">
                                    <use className="fill-light-color" xlinkHref="#icon-instagram" />
                                </svg>
                            </a>

                            <a className="primary-hover init-animation init-animation-7" href="https://www.twitter.com">
                                <svg width="18" height="18" viewBox="0 0 24 24">
                                    <use className="fill-light-color" xlinkHref="#icon-twitter" />
                                </svg>
                            </a>

                            <a className="primary-hover init-animation init-animation-8" href="https://www.youtube.com">
                                <svg width="18" height="18" viewBox="0 0 24 24">
                                    <use className="fill-light-color" xlinkHref="#icon-youtube" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    {active ? <Form onSend={this.send.bind(this)} onToggleForm={this.toggleForm.bind(this, false)} /> : null}

                </div>
                {sended ? (
                    <div className="badge">
                        Thanks for feedback
                    </div>
                ) : null}

            </div>
        )
    }
}

export default Contacts