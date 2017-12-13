import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import Letter from '../Letter'

import './Projects.css'


class Project extends Component {
    constructor() {
        super()
        this.state = {
            activeLink: false
        }


    }


    enter() {
        const { letter, onMouse } = this.props
        this.setState({
            activeLink: true,
        })
        onMouse(true, letter)
    }

    leave() {
        const { letter, onMouse } = this.props
        this.setState({
            activeLink: false,
        })
        onMouse(false, letter)
    }

    render() {
        const { name } = this.props
        const { activeLink } = this.state

        return (
            <h2
                data-active={activeLink}
                onMouseEnter={this.enter.bind(this)}
                onMouseLeave={this.leave.bind(this)}
            >
                <Link to={`projects/${name}`}>
                    {name}
                </Link>
            </h2>
        )
    }
}




class Projects extends Component {
    constructor() {
        super()

        this.state = {
            contentActive: false,
            letter: 'C',
            showLetter: false
        }
    }

    changeContentActive(contentActive, letterName) {
        console.log(letterName)
        this.setState({
            contentActive,
            letterName
        })


    }

    animationEnd({animationName}) {
        const { letterName } = this.state
        if (/-Render/.test(animationName))
            this.setState({ letter: letterName })
        if (/-Back/.test(animationName))
            this.setState({ letter: 'C' })
    }

    render() {
        const { contentActive, letter, showLetter } = this.state



        return (
            <div
                id="Projects"
                className="flex"
                data-enter={contentActive}
                data-show={showLetter}
                onAnimationEnd={this.animationEnd.bind(this)}
            >
                <div
                    className="content flex justify-center direction-col">
                    <Project
                        onMouse={this.changeContentActive.bind(this)}
                        name="headphones"
                        letter="H"
                    />

                    <Project
                        onMouse={this.changeContentActive.bind(this)}
                        name="portfolio"
                        letter="R"
                    />
                    <Project
                        onMouse={this.changeContentActive.bind(this)}
                        name="post"
                        letter="P"
                    />
                    <Project
                        onMouse={this.changeContentActive.bind(this)}
                        name="artech"
                        letter="T"
                    />
                </div>
                <div className="letter flex flex-center hidden-xs-down">
                    <Letter letter={letter} />
                </div>
            </div>
        )
    }
}

export default Projects