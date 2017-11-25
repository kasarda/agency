import React, { Component } from 'react'
import onMouseWheel from '../../services/wheel'

import './Home.css'

import ScrollButton from '../ScrollButton'
import Letter from '../Letter'

class Home extends Component {


    componentDidMount() {
        onMouseWheel(e => {
            if (e.wheelDown) {
                // ...
            }
        })
    }


    render() {

        return (
            <div id="Home" className="view">
                <Letter />
                <div className="wrapper flex direction-col justify-end">
                    <div className="column flex">
                        <div className="rule" ref="rule"></div>
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