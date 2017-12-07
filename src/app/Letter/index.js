import React, { Component } from 'react'

import C from './letters/c.letter'
import Definition from './letters/Definition'

import './Letter.css'

class Letter extends Component {

    render() {
        const { id, letter } = this.props
        const letterShape = letter === 'C' ? <C /> : <use xlinkHref={`#letter-${letter}`} />
        return (
            <svg
                viewBox="0 0 440 440"
                preserveAspectRatio="none"
                className="Letter"
                id={id}
                data-letter={letter}
            >
                <Definition letter={letter} />
                {letterShape}

            </svg>
        )
    }
}

export default Letter