import React, { Component } from 'react'
import { text, setTitle, preventTouch } from '../../services/common'
import './NotFound.css'

class NotFound extends Component {
    componentDidMount() {
        preventTouch(true)
    }

    componentWillUnmount() {
        preventTouch(false)
    }

    render() {
        setTitle('Not Found - Digital Agency', 'Nenašlo sa - Digital Agency')

        const { match } = this.props

        return (
            <div id="NotFound" className="flex flex-center">
                <h1>{match.url} {text('not found', 'nenašlo sa')}</h1>
            </div>
        )
    }
}

export default NotFound