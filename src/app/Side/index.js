import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Side.css'


class Side extends Component {
    constructor(props) {
        super(props)

        this.state = {
            theme: '#634ae6',
            heading: 'Ewa',
            description: [
                'Created a clever, high-end',
                'app which enables users to',
                'learn English words.'
            ],
            link: '/projects'
        }

    }

    componentWillReceiveProps() {
        const { page } = this.props
        let config = [
            {
                theme: '#634ae6',
                heading: 'Ewa',
                description: [
                    'Created a clever, high-end',
                    'app which enables users to',
                    'learn English words.'
                ],
                link: '/projects'
            },
            {
                theme: '#4a93e6',
                heading: 'Yola',
                description: [
                    'Created a clever, high-end',
                    'app which enables users to',
                    'learn English words.'
                ],
                link: '/projects'
            },

            {
                theme: '#4ae6b8',
                heading: 'Hyphen',
                description: [
                    'Created a clever, high-end',
                    'app which enables users to',
                    'learn English words.'
                ],
                link: '/projects'
            },

            {
                theme: '#ccaf86',
                heading: 'Kasarda',
                description: [
                    'Created a clever, high-end',
                    'app which enables users to',
                    'learn English words.'
                ],
                link: '/projects'
            }

        ]

        if (config[page - 1])
            this.setState(config[page-1])

    }

    render() {
        const { theme, heading, description, link } = this.state
        return (
            <div
                id="Side"
                className="view flex"
                style={{ backgroundColor: theme }}
            >
                <div className="content">
                    <div className="heading">
                        <h2>{heading}</h2>
                        <hr className="hidden-sm-down" />
                    </div>

                    <div className="description">
                        <div className="hidden-sm-down">
                            {description.map((text, key) => <p key={key}>{text}</p>)}
                        </div>
                        <div className="button">
                            <Link to={link} className="button-primary">view case</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default Side