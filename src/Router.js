import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { baseName, RouterType } from './services/local'
import Navigation from './app/Navigation'
import Home from './app/Home'
import Projects from './app/Projects'
import Showcase from './app/Showcase'
import Services from './app/Services'
import Contacts from './app/Contacts'
import NotFound from './app/NotFound'

class AppRouter extends Component {

    constructor() {
        super()
        this.state = {
            toHomePage: false
        }
    }

    onHomePage() {
        this.setState({
            toHomePage: true
        })
    }

    render() {

        return (
            <RouterType basename={baseName}>
                <div id="outlet">
                    <Navigation onHomePage={this.onHomePage.bind(this)} />
                    <Switch>
                        <Route exact path="/" render={_ => <Home toHomePage={this.state.toHomePage} />} />
                        <Route exact path="/services" component={Services} />
                        <Route exact path="/projects" component={Projects} />
                        <Route exact path="/projects/headphones" component={Showcase} />
                        <Route exact path="/projects/portfolio" component={Showcase} />
                        <Route exact path="/projects/post" component={Showcase} />
                        <Route exact path="/projects/artech" component={Showcase} />
                        <Route exact path="/contacts" component={Contacts} />
                        <Route path="**" component={NotFound} />
                    </Switch>
                </div>
            </RouterType >
        )
    }
}

export default AppRouter