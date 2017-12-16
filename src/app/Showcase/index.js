import React, { Component } from 'react'

import Letter from '../Letter'
import './Showcase.css'

class Showcase extends Component {
    componentDidMount() {
        document.body.style.overflowY = 'visible'
        document.documentElement.style.height = 'auto'

    }
    render() {
        const { name } = this.props.match.params

        return (
            <div id="Showcase">
                <div className="wrapper flex justify-center align-end">
                    <Letter letter="H" />
                </div>

                <section id="first-section">
                    <div className="description">
                        <h3>Headphones</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus facilis molestiae ipsam dolores hic debitis, quas quisquam veniam officiis ipsa possimus earum harum aliquid et fugiat accusantium ullam sint a!
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempora non magni beatae et voluptates! Quae incidunt eum sint corporis tempora! Soluta eum aspernatur at earum possimus expedita iste officiis.
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
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempora non magni beatae et voluptates! Quae incidunt eum sint corporis tempora! Soluta eum aspernatur at earum possimus expedita iste officiis.
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
                                    <a href="">
                                        <span>previously</span>
                                        <h4>Portfolio</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="column prev flex justify-start">
                                <div className="content">
                                    <a href="">
                                        <span>next</span>
                                        <h4>Post</h4>

                                    </a>
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