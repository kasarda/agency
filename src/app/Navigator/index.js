import React from 'react'

import './Navigator.css'


function Item({ id, letter, currentPage, onPage }) {
    const setActive = page => currentPage === page ? 'active' : ''

    return (
        <div
            className={setActive(id)}
            onClick={_ => onPage(id)}>
            {letter}
        </div>
    )
}



function Navigator({ onPage, currentPage }) {


    const letters = ['C', 'E', 'Y', 'H', 'T']
    const items = letters.map((letter, key) => (
        <Item
            id={key} key={key}
            letter={letter}
            currentPage={currentPage}
            onPage={onPage}
        />
    ))


    return (
        <div id="Navigator">
            <div className="links flex justify-between">
                {items}
            </div>
        </div>
    )
}

export default Navigator