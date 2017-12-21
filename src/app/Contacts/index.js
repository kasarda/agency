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
            <div id="Contacts" className="flex flex-center direction-col">
                <Letter letter="C" />
                <div className="container">
                    <h4 className="email">
                        <a href="mailto:info@digital.com">info@digital.com</a>
                    </h4>
                    <address>
                        Revierstredet 2 <br />
                        NO-0104 OSLO <br />
                        Norway
                    </address>
                    <div className="phone">
                        (067) 85 000
                    </div>
                </div>
            </div>
        )
    }
}

export default Contacts