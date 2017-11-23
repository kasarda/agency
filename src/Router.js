import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import App from './app/App'
import Navigation from './app/Navigation'

class AppRouter extends Component {
    render() {
        return (
            <div className="view">
                <Navigation />
                <BrowserRouter>
                    <div id="outlet">
                        <Route exact path="/" component={App} />
                    </div>
                </BrowserRouter>
            </div>

        )
    }
}

export default AppRouter
