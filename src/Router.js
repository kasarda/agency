import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { baseName, RouterType } from './services/local'
import { getListOf } from './services/pages'
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
        const links = getListOf('link')

        return (
            <RouterType basename={baseName}>
                <div id="outlet">
                    <Navigation onHomePage={this.onHomePage.bind(this)} />
                    <Switch>
                        <Route exact path="/" render={_ => <Home toHomePage={this.state.toHomePage} />} />
                        <Route exact path="/services" component={Services} />
                        <Route exact path="/projects" component={Projects} />
                        <Route exact path="/contacts" component={Contacts} />
                        {
                            links.map((link, key) => (
                                <Route exact path={link} component={Showcase} key={key} />
                            ))
                        }
                        <Route path="**" component={NotFound} />
                    </Switch>
                </div>
            </RouterType >
        )
    }
}

export default AppRouter