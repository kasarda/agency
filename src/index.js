import './polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './Router'
import registerSW from './sw'
import { scrollAnimation } from './services/animation'
import { preload, getLang, activeInWrapper } from './services/common'
import './index.css'
import { version } from '../package.json'

document.documentElement.dataset.version = version
document.documentElement.lang = getLang()

/**
 *
 * Preload main images
 *
 */

preload(
    'project1.jpg',
    'project2.jpg',
    'project3.jpg',
    'project4.jpg'
)

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
function scrollListener() {
    activeInWrapper()
    scrollAnimation()
}
window.addEventListener('scroll', scrollListener)
scrollListener()

/**
*
* Set [data-loaded="true"] if page is loaded
* Render Main Component
*
*/


window.addEventListener("load", _ => {
    document.body.dataset.loaded = true
})

document.addEventListener('DOMContentLoaded', _ => {
    //document.body.dataset.loaded = true
})

ReactDOM.render(<AppRouter />, document.getElementById('root'))
registerSW()