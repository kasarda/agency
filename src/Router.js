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

function RenderShowCase(name) {

    function getContent(name) {

        let state = {
            title: name,
        }

        switch (name) {
            case 'headphones':
                state.id = 1
                state.letter = 'H'
                state.theme = '#b29992'
                state.paragraphs = [
                    'We created a fast E-shop which provide quality headphones and speakers. The website includes beautiful landing pages for all products and also is fully responsive. The website is using notification so you will be know about new products really quickly.',
                    'Challenge what we had was to create really fast website which will be working across all platforms and devices what are avaible to us. Our priority was User experience as always.',
                    'Design of the page was designed to be clear and loading of the page to be fast as possible and the landing pages was designed to be representing as much as possible the given product.'
                ]
                state.next = 'portfolio'
                state.prev = 'artech'
                break

            case 'portfolio':
                state.id = 2
                state.letter = 'R'
                state.theme = '#a0978a'
                state.paragraphs = [
                    'We created a portfolio page for the designer and the photographer. The website includes dynamic gallery for photos and videos. The page is fully responsive and is progressive web application it means that page is like native application.',
                    'Our goals was to create porfolio page which will be progressive web app with gallery. The page is using parallax effects which can increase user exprerience.',
                    'The website wins couple of awards for example CSS Master awards, Site of the day on Awwwards and much more.'
                ]
                state.next = 'post'
                state.prev = 'headphones'
                break

            case 'post':
                state.id = 3
                state.letter = 'P'
                state.theme = '#908076'
                state.paragraphs = [
                    'We created a clever social network for sharing posts, images or videos. The website using secure auth system and has functionality to post anonymouse posts. It is fully responsive website.',
                    'Our goals was to create secure social network for posting posts for group of people without caring about security. App is usefull for school classes, work stuff or just friends group.',
                    'We designed to be simple and clear where every post has they own space where you can write comments and liking the post.'
                ]
                state.next = 'artech'
                state.prev = 'portfolio'
                break

        case 'artech':
                state.id = 4
                state.letter = 'T'
                state.theme = '#867d73'
                state.paragraphs = [
                    'We created business website for architect company called Artech. It is fully responsive progressive web app with very fast loading of content.',
                    'Our goals was to create modern portfolio for architecture company. We desided to create progressive web app to increase user experience and loading of the content.',
                    'We designed to be very simple and clear without noise in background so user can focus on content not on less important things.'
                ]
                state.next = 'headphones'
                state.prev = 'post'
                break

            default:
                state = {}


        }
        return state

    }

    return () => (<Showcase data={getContent(name)} />)
}




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
                        <Route exact path="/projects/headphones" render={RenderShowCase('headphones')} />
                        <Route exact path="/projects/portfolio" render={RenderShowCase('portfolio')} />
                        <Route exact path="/projects/post" render={RenderShowCase('post')} />
                        <Route exact path="/projects/artech" render={RenderShowCase('artech')} />
                        <Route exact path="/contacts" component={Contacts} />
                        <Route path="**" component={NotFound} />
                    </Switch>
                </div>
            </RouterType >
        )
    }
}

export default AppRouter
