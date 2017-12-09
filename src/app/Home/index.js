import React, { Component } from 'react'

import Letter from '../Letter'
import Side from '../Side'
import Navigator from '../Navigator'

import {
    onFakeScroll,
    resetScrollEvents
} from '../../services/wheel'

import './Home.css'

class Home extends Component {

    constructor() {
        super()

        this.state = {
            to: 0,
            currentPage: 0,
            renderPage: 0,
            length: 4,
            sideReady: false,
            ready: false,
            down: undefined,
            from: undefined
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

        if (/-Render/.test(animationName))
            this.setState({ renderPage: to })

    }
    setRenderPage({ animationName }) {
        const { to } = this.state

        if (/-StartRender/.test(animationName))
            this.setState({ renderPage: to })
    }

    componentDidMount() {
        onFakeScroll(50,
            _ => this.setPage('down'),
            _ => this.setPage('up')
        )
    }

    componentWillUnmount() {
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
            currentPage
        } = this.state

        return (
            <div
                id="Home"
                className="view"
                data-home={to === 0}
                data-down={down}
                data-from={from}
                data-to={to}
                data-side-ready={sideReady}
                data-ready={ready}
                onAnimationEnd={this.setReady.bind(this)}
                onAnimationStart={this.setRenderPage.bind(this)}
            >
                <Side renderPage={renderPage} />
                <Letter letter="C" id="Letter" />

                <div className="wrapper flex direction-col justify-end">
                    <div className="column flex">
                        <div className="rule"></div>
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