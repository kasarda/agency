import React, { Component } from 'react'
import { getConfig } from '../../services/pages'
import { setTitle, preventTouch } from '../../services/common'
import Letter from '../Letter'
import Anchor from './anchor'
import './Projects.css'

class Projects extends Component {
    constructor() {
        super()

        this.state = {
            enter: false, //* true if some of link is entered
            active: false, //* true if .links element is entered
            letter: 'C'
        }
    }

    updateLetter(enter, letter) {
        this.setState({
            enter,
            letter
        })
    }

    setActive() {
        this.setState({ active: true })
    }

    setDefault() {
        this.setState({
            active: false,
            letter: 'C'
        })
    }

    componentDidMount() {
        preventTouch(true)
    }

    componentWillUnmount() {
        preventTouch(false)
    }

    render() {
        setTitle('Projects - Digital Agency', 'Projekty - Digital Agency', true)
        const { enter, letter, active } = this.state

        const projectList = getConfig().map(({title, letter, link, id}, key) => (
            <Anchor
                key={key} title={title}
                link={link}
                delay={(id+1)/10}
                letter={letter}
                onMouse={this.updateLetter.bind(this)}
            />
        ))
        return (
            <div
                id="Projects"
                className="flex"
                data-enter={enter}
                data-active={active}
            >
                <div className="content flex align-center">
                    <div
                        onMouseEnter={this.setActive.bind(this)}
                        onMouseLeave={this.setDefault.bind(this)}
                        className="links flex direction-col">
                        {projectList}
                    </div>
                </div>
                <div className="letter flex flex-center">
                    <Letter letter={letter} />
                </div>
            </div>
        )
    }
}

export default Projects