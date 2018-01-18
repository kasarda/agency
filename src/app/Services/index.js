import React, { Component } from 'react'
import './Services.css'
import { scrollAnimation } from '../../services/animation'

class Services extends Component {

    componentDidMount() {
        scrollAnimation()
        document.body.style.overflowY = 'visible'
        document.documentElement.style.height = 'auto'
    }

    componentWillUnmount() {
        window.scrollTo(0, 0)
        document.body.style.overflowY = 'hidden'
        document.documentElement.style.height = '100%'
        document.querySelector('#Navigation').classList.remove('black-color')
    }

    render() {

        return (
            <div id="Services">
                <div className="camera flex flex-center" data-active-navigation>
                    <h1>
                        We are creating mobile and web apps
                    </h1>
                </div>
                <section className="flex wrap" id="mobile-showcase">
                    <div className="column flex justify-start align-center direction-col">
                        <h3 data-animate="fadeUp" data-offset="200">Mobile</h3>
                        <p data-animate="fadeUp" data-offset="100">
                            We are creating mobile apps for iOS and Android. We are making hybrid apps with Ionic, native cross platform apps with React and native apps with Swift and Java.
                        </p>
                    </div>
                    <div className="column showcase flex justify-center align-end" data-animate="fadeLeft">
                        <img src={require('../../images/mobile1.png')} alt="" />
                    </div>
                </section>

                <section className="flex wrap" id="web-showcase">
                    <div className="column showcase flex flex-center" data-animate="fadeRight" data-offset="-200">
                        <img src={require('../../images/web.png')} alt="" />
                    </div>
                    <div className="column flex flex-center direction-col">
                        <h3 data-animate="fadeUp" data-offset="200">Web</h3>
                        <p data-animate="fadeUp" data-offset="100">
                            We are also creating web app with HTML5, CSS3, JavaScript and Node. Our web app are fully responsive and supported by all major browsers. We can create standart web page, Single page app or even progressive web app.
                        </p>
                    </div>
                </section>
            </div>
        )
    }
}

export default Services