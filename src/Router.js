import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { baseName, RouterType } from './services/local'
import { getListOf } from './services/pages'
import { getLang } from './services/common'
import Navigation from './app/Navigation'
import Language from './app/Language'
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
            toHomePage: false,
            language: getLang()
        }
    }

    onHomePage() {
        this.setState({
            toHomePage: true
        })
    }

    onLanguage(language) {
        this.setState({ language })
        document.documentElement.lang = language
        window.localStorage.setItem('lang', language)
        document.querySelectorAll('.language-item').forEach(elem => elem.style.animation = 'fadeInMoveIn-Reset .4s ease-out')
    }

    animationEnd({ animationName, target }) {
        if (/-Reset/.test(animationName))
            target.style.animation = 'none'
    }
    onHomePageTriggered() {
        this.setState({
            toHomePage: false
        })
    }

    render() {
        const links = getListOf('link')
        return (
            <RouterType basename={baseName}>
                <div id="outlet" onAnimationEnd={this.animationEnd.bind(this)}>
                    <Navigation onHomePage={this.onHomePage.bind(this)} />
                    <Language onLanguage={this.onLanguage.bind(this)} />
                    <Switch>
                        <Route exact path="/" render={_ => <Home toHomePage={this.state.toHomePage} onHomePageTriggered={this.onHomePageTriggered.bind(this)} />} />
                        <Route exact path="/services" component={Services} />} />
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