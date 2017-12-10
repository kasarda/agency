import React, { Component } from 'react'

import Description from '../Description'
import Letter from '../Letter'

import './Side.css'

class Side extends Component {
    constructor(props) {
        super(props)

        this.state = {
            theme: '#757d7f',
            letter: 'E',
            heading: 'Post',
            description: [
                'Created a clever, high-end',
                'app which enables users to',
                'learn English words.'
            ],
            link: '/projects/social'
        }
    }

    componentWillReceiveProps({ renderPage }) {
        const index = (renderPage === 0 ? 1 : renderPage) - 1
        const config = [
            {
                theme: '#757d7f',
                letter: 'P',
                heading: 'Post',
                description: [
                    'Created a clever, high-end',
                    'app which enables users to',
                    'learn English words.'
                ],
                link: '/projects/social'
            },
            {
                theme: '#5f646a',
                letter: 'R',
                heading: 'Portfolio',
                description: [
                    'Created a clever, high-end',
                    'app which enables users to',
                    'learn English words.'
                ],
                link: '/projects'
            },

            {
                theme: '#676767',
                letter: 'T',
                heading: 'Artech',
                description: [
                    'Created a clever, high-end',
                    'app which enables users to',
                    'learn English words.'
                ],
                link: '/projects/artech'
            },

            {
                theme: '#b29992',
                letter: 'H',
                heading: 'HeadPhones',
                description: [
                    'Created a clever, high-end',
                    'app which enables users to',
                    'learn English words.'
                ],
                link: '/projects'
            }
        ]

        if (config[index])
            this.setState(config[index])

    }

    render() {
        const { theme, heading, description, link, letter } = this.state

        return (
            <div
                id="Side"
                className="view flex"
                style={{ backgroundColor: theme }}
            >

                <Letter letter={letter} id="ContentLetter" />

                <div className="content">

                    <div className="heading">
                        <h2>{heading}</h2>
                        <div className="hidden-sm-down hr"></div>
                    </div>

                    <Description link={link} theme={theme} description={description}/>
                </div>
            </div>
        )
    }

}

export default Side