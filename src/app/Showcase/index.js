import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Letter from '../Letter'
import './Showcase.css'

class Showcase extends Component {

    constructor() {
        super()
        this.state = {
            title: undefined,
            id: undefined,
            paragraphs: [],
            mobileImages: [],
            desktopImages: [],
            next: undefined,
            prev: undefined,
            letter: undefined
        }
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
        this.setState(state)



    }

    activeNavigation() {
        const { nav } = this.props

        if (nav) {
            const position = document.documentElement.scrollTop
            const { offsetHeight } = this.refs.wrapper
            const marginTop = parseFloat(getComputedStyle(nav).marginTop) || 0
            if (position >= offsetHeight - marginTop)
                nav.classList.add('black-color')
            else
                nav.classList.remove('black-color')
        }
    }
    componentDidMount() {
        document.body.style.overflowY = 'visible'
        document.documentElement.style.height = 'auto'
        this.activeNavigation.call(this)
        document.body.onscroll = this.activeNavigation.bind(this)

    }
    componentWillUnmount() {
        document.body.onscroll = null
    }
    componentWillReceiveProps() {
        const { name } = this.props.router.match.params
        this.getContent.call(this, name)

    }

    render() {
        const {
            title,
            id,
            paragraphs,
            next,
            prev,
            letter
        } = this.state

        return (
            <div id="Showcase">
                <div
                    className="wrapper flex justify-center align-end"
                    ref="wrapper"
                >

                    <Letter letter={letter} />
                </div>

                <section id="first-section">
                    <div className="description">
                        <h3>{title}</h3>
                        <p>
                            {paragraphs[0]}
                        </p>
                    </div>
                    <div className="mobile-showcase flex flex-center">
                        <img src={require('./mobile1.png')} alt="" />
                    </div>
                </section>

                <section id="second-section">
                    <div className="description">
                        <h3>Challenge</h3>
                        <p>
                            {paragraphs[1]}
                        </p>
                    </div>
                    <div className="showcases">
                        <div className="desktop-showcase rect-after flex justify-center right">
                            <div className="row">
                                <img src={require('./desktop1-3.jpg')} alt="" />
                            </div>
                        </div>
                        <div className="desktop-showcase flex justify-center left">
                            <div className="row">
                                <img src={require('./desktop1-1.jpg')} alt="" />
                            </div>
                        </div>
                        <div className="description between-showcases">
                            <p>
                                {paragraphs[2]}
                            </p>
                        </div>
                        <div className="desktop-showcase rect-after flex justify-center right">
                            <div className="row">
                                <img src={require('./desktop1-4.jpg')} alt="" />
                            </div>
                        </div>
                        <div className="desktop-showcase flex justify-center left">
                            <div className="row">
                                <img src={require('./desktop1-2.jpg')} alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="third-section">
                    <div className="consulation">
                        <a href="http://headphones.com">
                            <h4>Visit Website</h4>
                        </a>
                        <div className="container flex">
                            <div className="column next flex justify-end">
                                <div className="content">
                                    <Link to={prev ? prev: ''}>
                                        <span>previously</span>
                                        <h4>{prev}</h4>
                                    </Link>
                                </div>
                            </div>
                            <div className="column prev flex justify-start">
                                <div className="content">
                                    <Link to={next ? next: ''}>
                                        <span>next</span>
                                        <h4>{next}</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }

}

export default Showcase