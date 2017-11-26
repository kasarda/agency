import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AppRouter from './Router'
import registerSW from './sw'

document.addEventListener('touchmove', e => e.preventDefault(), {
    passive: false
})

ReactDOM.render(<AppRouter />, document.getElementById('root'))
registerSW()
