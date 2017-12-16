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

    getContent(name) {

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

                        <Route exact path="/projects/headphones" render={props => (
                            <Showcase
                                data={this.getContent('headphones')}
                                nav={nav} />
                        )} />

                        <Route exact path="/projects/artech" render={props =>
                            (<Showcase
                                data={this.getContent('artech')}
                                nav={nav} />
                            )} />

                        <Route exact path="/projects/portfolio" render={props =>
                            (<Showcase
                                data={this.getContent('portfolio')}
                                nav={nav} />
                            )} />

                        <Route exact path="/projects/post" render={props =>
                            (<Showcase
                                data={this.getContent('post')}
                                nav={nav} />
                            )} />

                        <Route exact path="/contacts" render={() => <h1>Contacts</h1>} />
                        <Route path="**" render={() => <h1>404</h1>} />
                    </Switch>
                </div>
            </BrowserRouter >
        )
    }
}

export default AppRouter
