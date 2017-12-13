import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import Letter from '../Letter'

import './Projects.css'


class Project extends Component {
    constructor() {
        super()
        this.state = {
            activeLink: false,
            active: false
        }


    }


    enter() {
        const { letter, onMouse } = this.props

        this.setState({ activeLink: true })
        onMouse(true, letter)
    }

    leave() {
        const { letter, onMouse } = this.props

        this.setState({ activeLink: false })
        onMouse(false, letter)
    }

    render() {
        const { name } = this.props
        const { activeLink } = this.state

        return (
            <h2
                data-active-link={activeLink}
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
            showLetter: false,
            active: false
        }
    }

    changeContentActive(contentActive, letterName, letterName2) {
        this.setState({
            contentActive,
            letter: letterName
        })


    }

    animationEnd({ animationName }) {
        const { letterName } = this.state
        if (/-Render/.test(animationName))
            this.setState({ letter: letterName })
        if (/-Back/.test(animationName))
            this.setState({ letter: 'C' })
    }

    enterLinks() {
        this.setState({
            active: true
        })
    }
    leaveLinks() {
        this.setState({
            active: false,
            letter: 'C'
        })
    }
    render() {

        const { contentActive, letter, active } = this.state

        const projectList = [
            ['headphones', 'H'],
            ['portfolio', 'R'],
            ['post', 'P'],
            ['artech', 'T']
        ].map(([name, lett], key) => (
            <Project key={key} name={name} letter={lett} onMouse={this.changeContentActive.bind(this)} />
        ))



        return (
            <div
                id="Projects"
                className="flex"
                data-enter={contentActive}
                data-active={active}
                onAnimationEnd={this.animationEnd.bind(this)}
            >
                <div className="content flex align-center">
                    <div
                        onMouseEnter={this.enterLinks.bind(this)}
                        onMouseLeave={this.leaveLinks.bind(this)}
                        className="links flex direction-col">
                        {projectList}
                    </div>
                </div>
                <div className="letter flex flex-center hidden-xs-down">
                    <Letter letter={letter} />
                </div>
            </div>
        )
    }
}

export default Projects