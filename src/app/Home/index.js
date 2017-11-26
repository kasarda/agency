import React, { Component } from 'react'
import onMouseWheel from '../../services/wheel'
import './Home.css'

import ScrollButton from '../ScrollButton'
import Letter from '../Letter'

class Home extends Component {

    constructor() {
        super()

        this.state = {
            page: 0,
            length: 4,
        }


    }

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

        return (
            <div id="Home" className="view" ref="home" data-transition-to={this.state.page}>
                <Letter />
                <div className="wrapper flex direction-col justify-end">
                    <div className="column flex">
                        <div className="rule" ref="rule"></div>
                        <h1 ref="heading" className="animate fade-in delay">Digital <br />
                            Creative Agency</h1>
                    </div>
                </div>
                <ScrollButton />
            </div>
        )
    }
}

export default Home