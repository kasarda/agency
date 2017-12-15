import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navigation from './app/Navigation'
import Home from './app/Home'
import Projects from './app/Projects'
import Showcase from './app/Showcase'


class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <div id="outlet" className="view primary-background">
                    <Navigation />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/services" render={() => <h1>Services</h1>} />
                        <Route exact path="/projects" component={Projects} />
                        <Route exact path="/projects/:name" component={Showcase} />
                        <Route exact path="/contacts" render={() => <h1>Contacts</h1>} />
                        <Route path="**" render={() => <h1>404</h1>} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default AppRouter
