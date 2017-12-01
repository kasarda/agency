import React, { Component } from 'react'

import './Home.css'

import Wheel from '../Wheel'
import Letter from '../Letter'
import Side from '../Side'

import { onFakeScroll } from '../../services/wheel'

class Home extends Component {

    constructor() {
        super()

        this.state = {
            page: 0,
            length: 4,
            ready: false,
            down: undefined,
            prevPage: undefined
        }
    }

    setPage(type) {
        const { page, length } = this.state

        if (this.state.ready) {
            this.setState({
                ready: false
            })
            if (type === 'down') {
                const nextPage = page + 1
                const newPage = nextPage <= length ? nextPage : 0
                this.setState({
                    page: newPage,
                    prevPage: page,
                    down: true
                })
            }

            else if (type === 'up' && page > 0) {
                const prevPage = page - 1
                this.setState({
                    page: prevPage,
                    prevPage: page,
                    down: false
                })
            }
        }
    }

    componentDidMount() {

        onFakeScroll(50,
            _ => this.setPage('down'),
            _ => this.setPage('up'),
        )

    }

    setReady(event) {
        if (/(Finish|(Next|Prev)PageBackWidthAnimation)/.test(event.animationName)) {
            this.setState({
                ready: true
            })
        }
    }

    render() {

        const { page, down, prevPage, ready } = this.state
        const home = this.state.page === 0

        return (
            <div
                id="Home"
                className="view"
                data-home={home}
                data-down={down}
                data-from={prevPage}
                data-to={page}
                data-ready={ready}
            >
                <Side page={page} ready={ready} onSideFinish={this.setReady.bind(this)}/>
                <Letter />
                <div className="wrapper flex direction-col justify-end">
                    <div className="column flex" onAnimationEnd={this.setReady.bind(this)}>
                        <div className="rule" ></div>
                        <h1 onAnimationEnd={this.setReady.bind(this)}>Digital <br />
                            Creative Agency</h1>
                    </div>
                </div>
                <Wheel onWheelClick={this.setPage.bind(this)} />
            </div>
        )
    }
}

export default Home