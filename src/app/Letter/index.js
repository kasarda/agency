import React from 'react'

import C from './letters/c.letter'
import E from './letters/e.letter'
import T from './letters/t.letter'
import Y from './letters/y.letter'
import H from './letters/h.letter'
import Definition from './letters/Definition'

import './Letter.css'

function Letter({ letter, id }) {

    const letters = { C, E, T, Y, H }

    return (
        <svg
            viewBox="0 0 440 440"
            preserveAspectRatio="none"
            className="Letter"
            id={id}
            data-letter={letter}
        >
            <Definition letter={letter}/>
            {letters[letter] || null}
        </svg>
    )
}

export default Letter