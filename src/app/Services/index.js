import React, { Component } from 'react'
import { scrollAnimation } from '../../services/animation'
import { setScrollablePage, resetToDefaultPage, image, text, setTitle } from '../../services/common'
import './Services.css'


class Services extends Component {

    componentDidMount() {
        scrollAnimation()
        setScrollablePage()
    }

    componentWillUnmount() {
        resetToDefaultPage()
    }

    render() {
        setTitle('Services - Digital Agency', 'Servis - Digital Agency')

        return (
            <div id="Services">
                <div className="camera flex flex-center" data-active-navigation>
                    <h1>
                        {text('We are creating mobile and web apps', 'Vytvárame mobilné a webové aplikácie')}
                    </h1>
                </div>
                <section className="flex wrap" id="mobile-showcase">
                    <div className="column flex justify-start align-center direction-col">
                        <h3 data-animate="fadeUp" data-offset="200">{text('Mobile', 'Mobil')}</h3>
                        <p data-animate="fadeUp" data-offset="100">
                            {text(
                                'We are creating mobile apps for iOS and Android. We are making hybrid apps with Ionic, native cross platform apps with React and native apps with Swift and Java.',
                                'Vytvárame mobilné aplikácie pre iOS a Android. Robíme hybridné aplikácie pomocou Ionicu, natívne JS aplikácie pomocou Reactu a natívne aplikácie pomocou Swiftu a Javy.'
                            )}
                        </p>
                    </div>
                    <div className="column showcase flex justify-center align-end" data-animate="fadeLeft">
                        <img src={image('mobile1.png')} alt="mobile application" />
                    </div>
                </section>

                <section className="flex wrap" id="web-showcase">
                    <div className="column showcase flex flex-center" data-animate="fadeRight" data-offset="-200">
                        <img src={image('web.png')} alt="desktop web page" />
                    </div>
                    <div className="column flex flex-center direction-col">
                        <h3 data-animate="fadeUp" data-offset="200">Web</h3>
                        <p data-animate="fadeUp" data-offset="100">
                            {text(
                                'We are also creating web app with HTML5, CSS3, JavaScript and Node. Our web app are fully responsive and supported by all major browsers. We can create standart web page, single page app or even progressive web app.',
                                'Taktiež vytvárame web aplikácie pomocou HTML5, CSS3, JavaScriptu a Nodu. Naše web aplikácie sú plne responzívne a funkčné na všetkých popredných prehliadačoch. Vytvárame štandardné web aplikácie, SPA alebo PWA aplikácie.'
                            )}
                        </p>
                    </div>
                </section>
            </div>
        )
    }
}

export default Services