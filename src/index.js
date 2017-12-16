import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AppRouter from './Router'
import registerSW from './sw'

document.addEventListener('touchmove', e => {
    const isProjectPage = /\/projects\/.{1,}/.test(window.location.pathname)
    if (!isProjectPage)
        e.preventDefault()
}, {
    passive: false
})

ReactDOM.render(<AppRouter />, document.getElementById('root'))
registerSW()
