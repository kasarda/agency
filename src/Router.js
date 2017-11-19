import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import App from './app/App.js'

class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path="/" component={App} />
            </BrowserRouter>
        )
    }
}

export default AppRouter
