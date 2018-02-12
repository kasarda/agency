import React, { Component } from 'react'
import { text, setTitle } from '../../services/common'
import './NotFound.css'

class NotFound extends Component {
    componentDidMount() {
        document.body.dataset.preventTouch = "true"
    }

    componentWillUnmount() {
        document.body.dataset.preventTouch = "false"
    }

    render() {
        setTitle('Not Found - Digital Agency', 'Nenašlo sa - Digital Agency', true)

        const { match } = this.props

        return (
            <div id="NotFound" className="flex flex-center">
                <h1>{match.url} {text('not found', 'nenašlo sa')}</h1>
            </div>
        )
    }
}

export default NotFound