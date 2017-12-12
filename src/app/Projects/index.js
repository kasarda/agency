import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import Letter from '../Letter'

import './Projects.css'


function Project({ name }) {
    return (
        <h2>
            <Link to={`projects/${name}`}>
                {name}
            </Link>
        </h2>
    )
}


class Projects extends Component {
    render() {
        return (
            <div id="Projects" className="flex">
                <div className="content flex justify-center direction-col">
                    <Project name="headphones" />
                    <Project name="portfolio" />
                    <Project name="post" />
                    <Project name="artech" />
                </div>
                <div className="letter flex flex-center">
                    <Letter letter="H" />
                </div>
            </div>
        )
    }
}

export default Projects