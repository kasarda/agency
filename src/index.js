import './polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './Router'
import registerSW from './sw'
import { scrollAnimation } from './services/animation'
import { getLang, activeInWrapper, isPreventTouch } from './services/common'
import { local } from './services/local'
import { version } from '../package.json'
import './index.css'

document.documentElement.dataset.version = version
document.documentElement.lang = getLang()

/**
 *
 * load offline fonts if needed
 *
 */

if (window.navigator.onLine === false) {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = './fonts/fonts.css'
    document.head.appendChild(link)
}

/**
*
* Set [data-loaded="true"] if page is loaded
*
*/
window.addEventListener("load", _ => {
    document.body.dataset.loaded = true
    // Hack for IE to call CSSOM rendering
    document.documentElement.lang = getLang()
})

/**
 *
 * Prevent default behavior of scrolling on touch devices,
 * but only for components that are not scrollabel
 *
 */
document.addEventListener('touchmove', event => {
    if (isPreventTouch())
        event.preventDefault()
}, {
        passive: false
    })

/**
 *
 * Set to navigation dark color on scrollable component
 * And activated scroll animation
 */
function scrollListener() {
    activeInWrapper()
    scrollAnimation()
}
window.addEventListener('scroll', scrollListener)
window.addEventListener("orientationchange", scrollListener)
scrollListener()


/**
*
* Render Main Component
*
*/
ReactDOM.render(<AppRouter />, document.getElementById('root'))

if(!local)
    registerSW()