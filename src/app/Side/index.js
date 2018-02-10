import React, { Component } from 'react'
import { getPageById } from '../../services/pages'
import Description from '../Description'
import Letter from '../Letter'
import './Side.css'

class Side extends Component {

    constructor() {
        super()

        this.state = Object.assign({
            redirect: false
        }, getPageById(1))
    }

    onRedirect() {
        this.props.onCanRedirect(this.state.link)
    }

    componentWillReceiveProps({ renderPage }) {
        const id = (renderPage === 0 ? 1 : renderPage)
        this.setState(getPageById(id))
    }

    render() {
        const { theme, title, description, letter, id } = this.state
        return (
            <div
                id="Side"
                className="view flex"
                style={{ backgroundColor: theme }}
            >
                <Letter letter={letter} id="ContentLetter" />
                <div className="content">
                    <div className="heading">
                        <h2>{title}</h2>
                        <div className="hidden-sm-down hr"></div>
                    </div>
                    <Description
                        theme={theme}
                        description={description}
                        id={id}
                        onRedirect={this.onRedirect.bind(this)}
                    />
                </div>
            </div>
        )
    }
}

export default Side