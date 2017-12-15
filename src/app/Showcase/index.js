import React, { Component } from 'react'

import './Showcase.css'
class Showcase extends Component {
    render() {
        const { name } = this.props.match.params

        return (
            <h1>ShowCase {name}</h1>
        )
    }
}

export default Showcase