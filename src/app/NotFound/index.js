import React, { Component } from 'react'

import './NotFound.css'

class NotFound extends Component {
    componentDidMount() {
        document.body.dataset.preventTouch = "true"
    }

    componentWillUnmount() {
        document.body.dataset.preventTouch = "false"
    }
    render() {
        const { match } = this.props

        return (
            <div id="NotFound" className="flex flex-center">
                <h1>{match.url} not found</h1>
            </div>
        )
    }
}

export default NotFound