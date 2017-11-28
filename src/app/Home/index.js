import React, { Component } from 'react'

import './Home.css'

import Wheel from '../Wheel'
import Letter from '../Letter'
import onMouseWheel from '../../services/wheel'

class Home extends Component {

    constructor() {
        super()

        this.state = {
            page: 0,
            length: 4,
        }


    }

    /**
     *
     * @param {down|up} type
     * Set current page
     * 0 is home
     * 1 - 4 is others page
     */
    setPage(type) {
        const { page, length } = this.state

        if (type === 'down') {
            const nextPage = page + 1
            const newPage = nextPage <= length ? nextPage : 0
            this.setState({
                page: newPage
            })
        }

        else if (type === 'up' && page > 0) {
            const prevPage = page - 1
            this.setState({
                page: prevPage
            })
        }
    }

    /**
     *
     * When wheel button is clicked update page
     *
     */

    onWheelClick() {
        this.setPage('down')
    }

    componentDidMount() {
        onMouseWheel(e => {
            const minOffset = e.wheelOffset >= 50

            if (e.wheelDown && minOffset) {
                this.setPage('down')
            }
            else if (!e.wheelDown && minOffset) {
                this.setPage('up')
            }
        })

    }


    render() {

        const { page } = this.state

        return (
            <div
                id="Home"
                className="view"
                data-page={page}
            >
                <div className="side-content view">
                </div>
                <Letter page={page} />
                <div className="wrapper flex direction-col justify-end">
                    <div className="column flex">
                        <div className="rule"></div>
                        <h1>Digital <br />
                            Creative Agency</h1>
                    </div>
                </div>
                <Wheel
                    page={page}
                    onWheelClick={this.onWheelClick.bind(this)}
                />
            </div>
        )
    }
}

export default Home