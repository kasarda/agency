import React, { Component } from 'react'
import Animation from 'animejs'

import './Home.css'


function ScrollButton() {

    function onClick() {
        console.log('Scroll Button clicked')
    }

    return (
        <div id="ScrollButton" className="hidden-sm-down">
            <div className="mouse flex justify-center align-center" onClick={onClick}>
                <div className="wheel"></div>
            </div>
        </div>
    )
}


class Home extends Component {

    constructor() {
        super()

        this.state = {
            ready: false
        }
    }

    componentDidMount() {

        this.setState({
            ready: true
        })

    
    }


    render() {

        const show_if_ready = this.state.ready ? '' : 'hide'

        return (
            <div id="Home" className="view">

                <svg viewBox="0 0 100 100" width="100" height="100" xmlns="http://www.w3.org/2000/svg">

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