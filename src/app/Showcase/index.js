import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Letter from '../Letter'
import './Showcase.css'
import { scrollAnimation, resetScrollAnimation } from '../../services/animation'

class Showcase extends Component {
    scrollUp() {
        window.scrollTo(0, 0)
        resetScrollAnimation()
   }

    animationEnd({ animationName }) {
        if (/-Overflow/.test(animationName)) {
            scrollAnimation()
            document.body.style.overflowY = 'visible'
            document.documentElement.style.height = 'auto'
        }
    }

    componentDidMount() {
        scrollAnimation()
    }

    componentWillUnmount() {
        window.scrollTo(0, 0)
        document.body.style.overflowY = 'hidden'
        document.documentElement.style.height = '100%'
        document.querySelector('#Navigation').classList.remove('black-color')
    }


    render() {
        const {
            title,
            paragraphs,
            next,
            id,
            prev,
            letter
        } = this.props.data

        return (
            <div id="Showcase" onAnimationEnd={this.animationEnd.bind(this)}>
                <div
                    className="camera flex justify-center align-end"
                    data-active-navigation
                >
                    <Letter letter={letter} />
                </div>

                <section id="intro-section">
                    <div className="description">
                        <h3 data-animate="fadeUp" data-offset="200">{title}</h3>
                        <p data-animate="fadeUp" data-offset="100">
                            {paragraphs[0]}
                        </p>
                    </div>
                    <div
                        data-animate="fadeLeft" data-offset="-200"
                        className="mobile-showcase flex flex-center"
                        style={{ backgroundImage: `url(${require(`../../images/bg${id}.jpg`)})` }}>
                        <img src={require(`../../images/mobile${id}.png`)} alt="website on mobile" />
                    </div>
                </section>

                <section id="challenge-section">
                    <div className="description">
                        <h3 data-animate="fadeUp">Challenge</h3>
                        <p data-animate="fadeUp" data-offset="100">
                            {paragraphs[1]}
                        </p>
                    </div>
                    <div className="showcases">
                        <div data-animate="fadeLeft" data-offset="-200" className="desktop-showcase rect-after flex justify-center right">
                            <div className="row">
                                <img src={require(`../../images/desktop${id}-1.jpg`)} alt="website on dekstop" />
                            </div>
                        </div>
                        <div data-animate="fadeUp" className="desktop-showcase flex justify-center left">
                            <div className="row">
                                <img src={require(`../../images/desktop${id}-2.jpg`)} alt="website on dekstop" />
                            </div>
                        </div>
                        <div data-animate="fadeUp" data-offset="100" className="description between-showcases">
                            <p>
                                {paragraphs[2]}
                            </p>
                        </div>
                        <div data-animate="fadeLeft" data-offset="-200" className="desktop-showcase rect-after flex justify-center right">
                            <div className="row">
                                <img src={require(`../../images/desktop${id}-3.jpg`)} alt="website on dekstop" />
                            </div>
                        </div>
                        <div data-animate="fadeUp" className="desktop-showcase flex justify-center left">
                            <div className="row">
                                <img src={require(`../../images/desktop${id}-4.jpg`)} alt="website on dekstop" />
                            </div>
                        </div>
                    </div>
                </section>

                <footer>
                    <div className="consulation">
                        <a>
                            <h4 className="inline-block">Visit Website</h4>
                        </a>
                        <div className="container flex justify-center">
                            <div className="column next flex justify-end">
                                <Link to={prev ? prev : ''}>
                                    <div className="content" onClick={this.scrollUp.bind(this)}>
                                        <span>previously</span>
                                        <h4>{prev}</h4>
                                    </div>
                                </Link>
                            </div>
                            <div className="column prev flex justify-start">
                                <Link to={next ? next : ''}>
                                    <div className="content" onClick={this.scrollUp.bind(this)}>
                                        <span>next</span>
                                        <h4>{next}</h4>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        )
    }
}

export default Showcase