import React from 'react'
import { getListOf } from '../../services/pages'
import './Navigator.css'

function Button({ id, letter, currentPage, onPage }) {
    const setActive =  currentPage === id ? 'active' : ''

    return (
        <div
            role="button"
            aria-current={currentPage === id}
            className={setActive}
            onClick={_ => onPage(id)}>
            {letter}
        </div>
    )
}

function Navigator({ onPage, currentPage }) {

    const letterFromPages = getListOf('letter')

    const letters = ['C'].concat(letterFromPages)
    const items = letters.map((letter, key) => (
        <Button
            id={key} key={key}
            letter={letter}
            currentPage={currentPage}
            onPage={onPage}
        />
    ))

    return (
        <div id="Navigator">
            <div className="buttons flex justify-between">
                {items}
            </div>
        </div>
    )
}

export default Navigator