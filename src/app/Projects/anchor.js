import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Anchor extends Component {

    constructor() {
        super()
        this.state = {
            activeLink: false
        }

    }

    enter() {
        const { letter, onMouse } = this.props

        this.setState({ activeLink: true })
        onMouse(true, letter)
    }

    leave() {
        const { letter, onMouse } = this.props

        this.setState({ activeLink: false })
        onMouse(false, letter)
    }

    render() {
        const { title, delay } = this.props
        const { activeLink } = this.state

        return (
            <h2
                data-active-link={activeLink}
                style={{
                    animationDelay: `${delay}s`
                }}
                onMouseEnter={this.enter.bind(this)}
                onMouseLeave={this.leave.bind(this)}
            >
                <Link to={`projects/${title}`}>
                    {title}
                </Link>
            </h2>
        )
    }
}

export default Anchor