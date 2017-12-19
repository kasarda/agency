import React, { Component } from 'react'

import './Contacts.css'

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
                <h1>Contacts</h1>
            </div>
        )

    }
}

export default Contacts