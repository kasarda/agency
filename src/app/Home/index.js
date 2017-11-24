import React, { Component } from 'react'
import onMouseWheel from './wheel'

import './Home.css'

import ScrollButton from './ScrollButton'


class Home extends Component {


    componentDidMount() {
        onMouseWheel(e => {
            if(e.wheelDown) {
                console.log(
                this.refs.rule.classList.add('slideIn')
                )
            }
        })
    }


    render() {

        return (
            <div id="Home" className="view">

                <svg viewBox="0 0 100 100" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="0">C</text>
                </svg>

                <div className="wrapper flex direction-col justify-end">
                    <div className="column flex">
                        <div className="rule hidden-sm-down" ref="rule"></div>
                        <h1 ref="heading" className="animate fadeIn delay">Digital <br />
                            Creative Agency</h1>
                    </div>
                </div>
                <ScrollButton />
            </div>
        )
    }
}

export default Home