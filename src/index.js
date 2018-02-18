import './polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './Router'
import registerSW from './sw'
import { scrollAnimation } from './services/animation'
import { getLang, activeInWrapper } from './services/common'
import './index.css'
import { version } from '../package.json'

document.documentElement.dataset.version = version
document.documentElement.lang = getLang()

/**
 *
 * load offline fonts if needed
 *
 */

if(!window.navigator.onLine)
    require('./fonts/fonts.css')


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
registerSW()