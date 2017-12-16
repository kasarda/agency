import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Letter from '../Letter'
import './Showcase.css'

class Showcase extends Component {

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

        const elems = document.querySelectorAll('[data-animate]')
        console.log(elems)
    }
    scrollUp() {
        window.scrollTo(0, 0)
    }

    animationEnd({ animationName }) {
        if (/-Overflow/.test(animationName)) {
            document.body.style.overflowY = 'visible'
            document.documentElement.style.height = 'auto'
        }

    }
    componentDidMount() {
        this.activeNavigation.call(this)
        document.body.onscroll = this.activeNavigation.bind(this)
    }
    componentWillUnmount() {
        document.body.onscroll = null
        document.body.style.overflowY = 'hidden'
        document.documentElement.style.height = '100%'
    }


    render() {
        const {
            title,
            id,
            paragraphs,
            next,
            prev,
            letter
        } = this.props.data

        return (
            <div id="Showcase" onAnimationEnd={this.animationEnd.bind(this)}>
                <div
                    className="wrapper flex justify-center align-end"
                    ref="wrapper"
                >

                    <Letter letter={letter} />
                </div>

                <section id="first-section">
                    <div className="description" data-animate>
                        <h3>{title}</h3>
                        <p>
                            {paragraphs[0]}
                        </p>
                    </div>
                    <div data-animate className="mobile-showcase flex flex-center">
                        <img src={require('./mobile1.png')} alt="" />
                    </div>
                </section>

                <section id="second-section">
                    <div className="description" data-animate>
                        <h3>Challenge</h3>
                        <p>
                            {paragraphs[1]}
                        </p>
                    </div>
                    <div className="showcases">
                        <div data-animate className="desktop-showcase rect-after flex justify-center right">
                            <div className="row">
                                <img src={require('./desktop1-3.jpg')} alt="" />
                            </div>
                        </div>
                        <div data-animate className="desktop-showcase flex justify-center left">
                            <div className="row">
                                <img src={require('./desktop1-1.jpg')} alt="" />
                            </div>
                        </div>
                        <div data-animate className="description between-showcases">
                            <p>
                                {paragraphs[2]}
                            </p>
                        </div>
                        <div data-animate className="desktop-showcase rect-after flex justify-center right">
                            <div className="row">
                                <img src={require('./desktop1-4.jpg')} alt="" />
                            </div>
                        </div>
                        <div data-animate className="desktop-showcase flex justify-center left">
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
                                <div className="content" onClick={this.scrollUp}>
                                    <Link to={prev ? prev : ''}>
                                        <span>previously</span>
                                        <h4>{prev}</h4>
                                    </Link>
                                </div>
                            </div>
                            <div className="column prev flex justify-start">
                                <div className="content" onClick={this.scrollUp}>
                                    <Link to={next ? next : ''}>
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