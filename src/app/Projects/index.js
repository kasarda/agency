import React, { Component } from 'react'
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
        document.body.dataset.preventTouch = "true"
    }

    componentWillUnmount() {
        document.body.dataset.preventTouch = "false"
    }

    render() {

        const { enter, letter, active } = this.state

        const list = [
            ['headphones', 'H'],
            ['portfolio', 'R'],
            ['post', 'P'],
            ['artech', 'T']
        ]

        const projectList = list.map(([name, lett], key) => (
            <Anchor
                key={key} name={name}
                className={`link-${key + 1}`}
                letter={lett}
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