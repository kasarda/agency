import React, { Component } from 'react'

import './Contacts.css'

import Letter from '../Letter'
class Contacts extends Component {

    componentDidMount() {
        document.body.dataset.preventTouch = "true"
    }

    componentWillUnmount() {
        document.body.dataset.preventTouch = "false"
    }

    render() {
        return (
            <div id="Contacts" className="flex flex-center">
                <div className="hidden-sm-down">
                    <Letter letter="C" />
                </div>

                <div className="container">
                    <h4 className="email typography">
                        <a href="mailto:info@digital.com">info@digital.com</a>
                    </h4>
                    <address className="typography">
                        Revierstredet 2 OSLO <br />
                        NO-0104 Norway
                    </address>
                    <div className="phone typography">
                        (067) 85 000
                    </div>
                    <div className="button">
                        <a className="button-primary">Contact Us</a>
                    </div>

                    <div className="icons flex justify-between">
                        <a href="https://www.instagram.com">
                            <svg width="18" height="18" viewBox="0 0 24 24">
                                <use className="fill-light-color" xlinkHref="#icon-instagram" />
                            </svg>
                        </a>

                        <a href="https://www.twitter.com">
                            <svg width="18" height="18" viewBox="0 0 24 24">
                                <use className="fill-light-color" xlinkHref="#icon-twitter" />
                            </svg>
                        </a>

                        <a href="https://www.youtube.com">
                            <svg width="18" height="18" viewBox="0 0 24 24">
                                <use className="fill-light-color" xlinkHref="#icon-youtube" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contacts