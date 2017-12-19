import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import Letter from '../Letter'
import Side from '../Side'
import Navigator from '../Navigator'

import { onFakeScroll, resetScrollEvents } from '../../services/wheel'
import './Home.css'



class Home extends Component {
    constructor() {
        super()

        this.state = {
            to: 0,
            currentPage: 0,
            renderPage: 0,
            renderImage: 0,
            length: 4,
            sideReady: false,
            ready: false,
            down: undefined,
            from: undefined,
            redirect: false,
            canRedirect: false
        }
    }


    toPage(newPage) {
        const { to, ready } = this.state

        if (ready && to !== newPage) {
            this.setState({
                ready: false,
                sideReady: false,
                to: newPage,
                from: to,
                down: !(to > newPage)
            })
        }
    }
    setPage(type) {
        const { to, length, ready } = this.state

        if (ready) {
            if (!(to === 0 && type === 'up')) {
                this.setState({
                    sideReady: false,
                    ready: false
                })
            }

            if (type === 'down') {
                const nextPage = to + 1
                const newPage = nextPage <= length ? nextPage : 0
                this.setState({
                    to: newPage,
                    from: to,
                    down: true
                })
            }

            else if (type === 'up' && to > 0) {
                const prevPage = to - 1
                this.setState({
                    to: prevPage,
                    from: to,
                    down: false
                })
            }
        }
    }


    setReady({ animationName }) {
        const { to } = this.state

        if (/-SideReady/.test(animationName))
            this.setState({ sideReady: true })

        if (/-Ready/.test(animationName))
            this.setState({ ready: true, currentPage: to })

        if (/-RenderPage/.test(animationName))
            this.setState({ renderPage: to })

        if (/-RenderImage/.test(animationName))
            this.setState({ renderImage: to })

        if (/-Redirect/.test(animationName))
            this.setState({ canRedirect: true })
    }

    setRenderPage({ animationName }) {
        const { to } = this.state

        if (/-StartRender/.test(animationName))
            this.setState({ renderPage: to })
    }

    onCanRedirect(link) {
        this.setState({ redirect: true, link })
    }
    shouldComponentUpdate(_, { to, renderImage }) {
        if (renderImage === 0 && to !== 0)
            this.setState({ renderImage: to })

        return true
    }


    componentDidMount() {
        document.body.dataset.preventTouch = "true"

        onFakeScroll(50,
            _ => this.setPage('down'),
            _ => this.setPage('up')
        )
    }

    componentWillUnmount() {
        document.body.dataset.preventTouch = "false"
        resetScrollEvents()
    }

    render() {
        const {
            to,
            down,
            from,
            sideReady,
            ready,
            renderPage,
            currentPage,
            renderImage,
            redirect,
            canRedirect,
            link
        } = this.state

        const url = renderImage > 0 ? `url(${require(`./bg${renderImage}.jpg`)})` : null

        return (
            <div
                id="Home" className="view"
                data-home={to === 0}
                data-down={down}
                data-side-ready={sideReady}
                data-ready={ready}
                data-from={from}
                data-to={to}
                data-redirect={redirect}
                data-current-page={currentPage}
                onAnimationEnd={this.setReady.bind(this)}
                onAnimationStart={this.setRenderPage.bind(this)}
            >
                <Side renderPage={renderPage} onCanRedirect={this.onCanRedirect.bind(this)} />
                <Letter letter="C" id="Letter" />
                {canRedirect ? <Redirect to={link} /> : null}
                <div className="wrapper flex direction-col justify-end">
                    <div className="column flex">
                        <div className="rule">
                            <div
                                className="background"
                                style={{ backgroundImage: url }}></div>
                        </div>
                        <h1>Digital <br />
                            Creative Agency</h1>
                    </div>
                </div>

                <Navigator onPage={id => this.toPage(id)} currentPage={currentPage} />
            </div>
        )
    }
}

export default Home