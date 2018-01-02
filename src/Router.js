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
console.log(baseName, process)

function RenderShowCase(name) {

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

    return () => (<Showcase data={getContent(name)} />)
}




class AppRouter extends Component {

    render() {
        return (
            <RouterType basename={baseName}>
                <div id="outlet">
                    <Navigation />
                    <Switch>
                        <Route exact path="/" component={Home} />
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
