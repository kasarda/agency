import './polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './Router'
import registerSW from './sw'
import { scrollAnimation } from './services/animation'
import { path } from './services/local'
import './index.css'


/**
 *
 * Preload main images
 *
 */

const images = [
    'images/project1.jpg',
    'images/project2.jpg',
    'images/project3.jpg',
    'images/project4.jpg'
 ]


images.forEach(image => {
    const link = document.createElement('link')
    link.href = path(require('./'+image))
    link.rel = 'preload'
    link.as = 'image'
    document.head.appendChild(link)
})


//<link rel="preload" href="./static/media/project1.622fe270.jpg" as="image">

/**
 *
 * Set [data-loaded="true"] if content is loaded
 *
 */
document.addEventListener('DOMContentLoaded', _ => {
    document.body.dataset.loaded = true
})

/**
 *
 * Prevent default behavior of scrolling on touch devices,
 * but only for components that are no scrollabel
 *
 */
document.addEventListener('touchmove', event => {
    const canPrevent = document.body.dataset.preventTouch === 'true'
    if (canPrevent)
        event.preventDefault()
}, {
    passive: false
})


/**
 *
 * Set to navigation black color on scrollable component
 * And activated scroll animation
 */
window.addEventListener('scroll', _ => {

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