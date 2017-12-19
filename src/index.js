import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AppRouter from './Router'
import registerSW from './sw'

document.addEventListener('touchmove', e => {
    const canPrevent = document.body.dataset.preventTouch === 'true'

    if (canPrevent)
        e.preventDefault()
}, {
    passive: false
})


window.addEventListener('scroll', () => {

    const nav = document.querySelector('#Navigation')
    const wrapper = document.querySelector('[data-active-navigation]')

    if (wrapper && nav) {
        const position = document.documentElement.scrollTop || document.body.scrollTop
        const wrapperHeight = wrapper.offsetHeight
        const marginTop = parseFloat(getComputedStyle(nav).marginTop) || 0

        if (position >= wrapperHeight - marginTop)
            nav.classList.add('black-color')

        else
            nav.classList.remove('black-color')
    }

})

ReactDOM.render(<AppRouter />, document.getElementById('root'))
registerSW()
