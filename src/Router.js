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
                    'We created a fast E-shop which provides headphones and speakers of great quality. The website includes beautiful landing pages for all products and also is fully responsive. The website uses notifications so you will know about new products really quickly.',
                    'Our challenge was to create really fast website which will be working across all platforms and devices which are available to us. Our priority was user experience as always.',
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
                    'We created a portfolio page for the designer and the photographer. The website includes dynamic gallery for photos and videos. The page is fully responsive and also it is progressive web application which means that page is like native application.',
                    'Our goal was to create portfolio page which will be progressive web app with gallery. The page uses parallax effects which can increase user experience.',
                    'The website wins couple of awards for example CSS Master awards, Site of the day on Awwwards and much more.'
                ]
                state.next = 'post'
                state.prev = 'headphones'
                break

            case 'post':
                state.id = 3
                state.letter = 'P'
                state.theme = '#a9998e'
                state.paragraphs = [
                    'We created a clever social network for sharing posts, images or videos. The website uses secure auth system and is able to post anonymous posts. It is fully responsive website.',
                    'Our goals was to create secure social network for posting posts for group of people without caring about security. App is useful for school classes, work stuff or just friends group.',
                    'The website was designed to be very simple and clear where every post has its own space where you can write comments or like the post.'
                ]
                state.next = 'artech'
                state.prev = 'portfolio'
                break

        case 'artech':
                state.id = 4
                state.letter = 'T'
                state.theme = '#c1ab9e'
                state.paragraphs = [
                    'We created business website for architect company called Artech. It is fully responsive progressive web app with very fast loading of content.',
                    'Our goal was to create modern portfolio for architecture company. We decided to create progressive web app to increase user experience and loading of the content.',
                    'The website was designed to be very simple and clear without any noise in background so user can focus on content not on less important things.'
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
