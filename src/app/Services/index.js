import React, { Component } from 'react'

import './Services.css'


class Services extends Component {
    componentDidMount() {
        document.body.style.overflowY = 'visible'
        document.documentElement.style.height = 'auto'
    }
    componentWillUnmount() {
        document.body.style.overflowY = 'hidden'
        document.documentElement.style.height = '100%'
    }
    render() {

        return (
            <div id="Services">
                <div className="wrapper flex flex-center">
                    <h1>We are creating apps for <br />
                        <span>mobile</span> and <span>web</span> </h1>
                </div>
                <section className="flex wrap" id="mobile-showcase">
                    <div className="column flex justify-start align-center direction-col">
                        <h3>Mobile</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam inventore non numquam optio, eveniet vero culpa animi in facilis consectetur, exercitationem ipsum aut placeat pariatur facere deleniti, perferendis veritatis ipsa.</p>

                    </div>
                    <div className="column showcase flex justify-center align-end">
                        <img src={require('../Showcase/images/mobile1.png')} alt="" />
                    </div>
                </section>

                <section className="flex wrap" id="web-showcase">
                    <div className="column showcase flex flex-center">
                        <img src={require('./web.png')} alt="" />
                    </div>
                    <div className="column flex flex-center direction-col">
                        <h3>Web</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam inventore non numquam optio, eveniet vero culpa animi in facilis consectetur, exercitationem ipsum aut placeat pariatur facere deleniti, perferendis veritatis ipsa.</p>

                    </div>
                </section>
            </div>
        )
    }
}

export default Services