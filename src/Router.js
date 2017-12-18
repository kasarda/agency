import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navigation from './app/Navigation'
import Home from './app/Home'
import Projects from './app/Projects'
import Showcase from './app/Showcase'
import Services from './app/Services'
import Contacts from './app/Contacts'
import NotFound from './app/NotFound'


function RenderShowCase(name, nav) {

    function getContent(name) {

        let state = {
            title: name,
        }

        switch (name) {
            case 'headphones':
                state.id = 1
                state.letter = 'H'
                state.paragraphs = [
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus facilis molestiae ipsam dolores hic debitis, quas quisquam veniam officiis ipsa possimus earum harum aliquid et fugiat accusantium ullam sint a!',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus facilis molestiae ipsam dolores hic debitis, quas quisquam veniam officiis ipsa possimus earum harum aliquid et fugiat accusantium ullam sint a!',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus facilis molestiae ipsam dolores hic debitis, quas quisquam veniam officiis ipsa possimus earum harum aliquid et fugiat accusantium ullam sint a!'
                ]
                state.next = 'portfolio'
                state.prev = 'artech'

                break
            case 'portfolio':
                state.id = 2
                state.letter = 'R'
                state.paragraphs = [
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus facilis molestiae ipsam dolores hic debitis, quas quisquam veniam officiis ipsa possimus earum harum aliquid et fugiat accusantium ullam sint a!',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus facilis molestiae ipsam dolores hic debitis, quas quisquam veniam officiis ipsa possimus earum harum aliquid et fugiat accusantium ullam sint a!',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus facilis molestiae ipsam dolores hic debitis, quas quisquam veniam officiis ipsa possimus earum harum aliquid et fugiat accusantium ullam sint a!'
                ]
                state.next = 'post'
                state.prev = 'headphones'

                break

            case 'post':
                state.id = 3
                state.letter = 'P'
                state.paragraphs = [
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus facilis molestiae ipsam dolores hic debitis, quas quisquam veniam officiis ipsa possimus earum harum aliquid et fugiat accusantium ullam sint a!',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus facilis molestiae ipsam dolores hic debitis, quas quisquam veniam officiis ipsa possimus earum harum aliquid et fugiat accusantium ullam sint a!',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus facilis molestiae ipsam dolores hic debitis, quas quisquam veniam officiis ipsa possimus earum harum aliquid et fugiat accusantium ullam sint a!'
                ]
                state.next = 'artech'
                state.prev = 'portfolio'
                break

            case 'artech':
                state.id = 4
                state.letter = 'T'
                state.paragraphs = [
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus facilis molestiae ipsam dolores hic debitis, quas quisquam veniam officiis ipsa possimus earum harum aliquid et fugiat accusantium ullam sint a!',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus facilis molestiae ipsam dolores hic debitis, quas quisquam veniam officiis ipsa possimus earum harum aliquid et fugiat accusantium ullam sint a!',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus facilis molestiae ipsam dolores hic debitis, quas quisquam veniam officiis ipsa possimus earum harum aliquid et fugiat accusantium ullam sint a!'
                ]
                state.next = 'headphones'
                state.prev = 'post'
                break
            default:
                state = {}


        }
        return state

    }

    return () => (
        <Showcase
            data={getContent(name)}
            nav={nav}
        />
    )
}




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
                        <Route exact path="/services" component={Services} />
                        <Route exact path="/projects" component={Projects} />
                        <Route exact path="/projects/headphones" render={RenderShowCase('headphones', nav)} />
                        <Route exact path="/projects/portfolio" render={RenderShowCase('portfolio', nav)} />
                        <Route exact path="/projects/post" render={RenderShowCase('post', nav)} />
                        <Route exact path="/projects/artech" render={RenderShowCase('artech', nav)} />
                        <Route exact path="/contacts" component={Contacts} />
                        <Route path="**" component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter >
        )
    }
}

export default AppRouter
