import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AppRouter from './Router'
import registerSW from './sw'
import { scrollAnimation } from './services/animation'

/**
 *
 * Prevent default behavior of scrolling on touch devices,
 * but only for components that are no scrollabel
 *
 */
document.addEventListener('touchmove', e => {
    const canPrevent = document.body.dataset.preventTouch === 'true'
    if (canPrevent)
        e.preventDefault()
}, {
    passive: false
})


/**
 *
 * Set to navigation black color on scrollable component
 * And activated scroll animation
 */
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

    scrollAnimation()

})





/**
 *
 * Render Main Component
 *
 */
ReactDOM.render(<AppRouter />, document.getElementById('root'))
registerSW()