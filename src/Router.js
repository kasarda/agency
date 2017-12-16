import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navigation from './app/Navigation'
import Home from './app/Home'
import Projects from './app/Projects'
import Showcase from './app/Showcase'


class AppRouter extends Component {
    constructor() {
        super()

        this.state = {
            nav: undefined
        }
    }
    getNavRef(nav) {
        this.setState({ nav })
    }

    render() {
        const { nav } = this.state
        return (
            < BrowserRouter >
            <div id="outlet">
                <Navigation onMount={this.getNavRef.bind(this)} />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/services" render={() => <h1>Services</h1>} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/projects/:name" render={props => <Showcase router={props} nav={nav}/>} />
                    <Route exact path="/contacts" render={() => <h1>Contacts</h1>} />
                    <Route path="**" render={() => <h1>404</h1>} />
                </Switch>
            </div>
            </BrowserRouter >
        )
    }
}

export default AppRouter
