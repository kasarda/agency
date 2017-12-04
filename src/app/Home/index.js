import React, { Component } from 'react'

import './Home.css'

import Wheel from '../Wheel'
import Letter from '../Letter'
import Side from '../Side'

import { onFakeScroll, resetScrollEvents } from '../../services/wheel'


class Home extends Component {

    constructor() {
        super()

        this.state = {
            page: 0,
            renderPage: 0,
            length: 4,
            sideReady: false,
            ready: true,
            down: undefined,
            from: undefined
        }
    }


    toPage(newPage) {
        const { page, ready } = this.state

        if (ready && page !== newPage) {
            this.setState({
                ready: false,
                sideReady: false,
                page: newPage,
                from: page,
                down: page > newPage ? false : true,
                renderPage: newPage
            })
        }
    }
    setPage(type) {
        const { page, length, ready } = this.state

        if (ready) {
            if (!(page === 0 && type === 'up')) {
                this.setState({
                    sideReady: false,
                    ready: false
                })
            }
            if (type === 'down') {
                const nextPage = page + 1
                const newPage = nextPage <= length ? nextPage : 0
                this.setState({
                    page: newPage,
                    from: page,
                    down: true
                })
            }

            else if (type === 'up' && page > 0) {
                const prevPage = page - 1
                this.setState({
                    page: prevPage,
                    from: page,
                    down: false
                })
            }
        }
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

    setReady({ animationName }) {
        const { page } = this.state

        if (/(Finish|(Next|Prev)PageBackWidthAnimation)/.test(animationName)) {
            this.setState({
                sideReady: true
            })
        }

        if(/Render/.test(animationName)) {
            this.setState({
                ready: true
            })
        }

        if (/(NextPageLeftAnimation|PrevPageWidthAnimation|HeadingFinish)/.test(animationName)) {
            this.setState({
                renderPage: page === 0 ? 1 : page
            })
        }
    }

    render() {
        const { page, down, from, sideReady, ready, renderPage } = this.state
        const home = this.state.page === 0

        return (
            <div
                id="Home"
                className="view"
                data-home={home}
                data-down={down}
                data-from={from}
                data-to={page}
                data-side-ready={sideReady}
                data-ready={ready}
                onAnimationEnd={this.setReady.bind(this)}
            >
                <Side
                    renderPage={renderPage}
                />
                <Letter />
                <div className="wrapper flex direction-col justify-end">
                    <div className="column flex">
                        <div className="rule" ></div>
                        <h1>Digital <br />
                            Creative Agency</h1>
                    </div>
                </div>
                <Wheel
                    onWheelClick={this.setPage.bind(this)}
                />
            </div>
        )
    }
}

export default Home