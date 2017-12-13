import React from 'react'

import C from './letters/C.letter'
import Definition from './letters/Definition'

import './Letter.css'

function Letter({ id, letter, style }) {

    const letterShape = letter === 'C' ? <C /> : <use xlinkHref={`#letter-${letter}`} />
    return (
        <svg
            viewBox="0 0 440 440"
            preserveAspectRatio="none"
            className="Letter"
            id={id}
            style={style}
            data-letter={letter}
        >
            <Definition letter={letter} />
            {letterShape}

        </svg>
    )
}

export default Letter