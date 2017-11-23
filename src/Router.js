import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Navigation from './app/Navigation'
import Home from './app/Home'

class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <div id="outlet" className="view blue-background">
                    <Navigation />
                    <Route exact path="/" component={Home} />
                </div>
            </BrowserRouter>
        )
    }
}

export default AppRouter
