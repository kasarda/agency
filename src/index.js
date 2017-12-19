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

ReactDOM.render(<AppRouter />, document.getElementById('root'))
registerSW()
