import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navigation from './app/Navigation'
import Home from './app/Home'


//TODO -> Create component contact, projects, services and 404

class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter basename="digital-agency/build">
                <div id="outlet" className="view primary-background">
                    <Navigation />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/services" render={() => <h1>Services</h1>} />
                        <Route path="/projects" render={() => <h1>Projects</h1>} />
                        <Route path="/contacts" render={() => <h1>Contacts</h1>} />
                        <Route path="**" render={() => <h1>404</h1>} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default AppRouter
