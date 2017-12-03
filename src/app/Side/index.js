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
            link: '/projects/ewa'
        }

    }

    componentWillReceiveProps({ renderPage }) {
        const index = renderPage - 1

        const config = [
            {
                theme: '#634ae6',
                heading: 'Ewa',
                description: [
                    'Created a clever, high-end',
                    'app which enables users to',
                    'learn English words.'
                ],
                link: '/projects/ewa'
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

        if (config[index])
            this.setState(config[index])

    }

    render() {
        const { theme, heading, description, link } = this.state
        const descriptionList = description.map((text, key) =>
            (<p key={key} className={`fadeIn fadeIn-${key + 1}`}>{text}</p>)
        )

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
                            {descriptionList}
                        </div>
                        <div className={`button fadeIn fadeIn-${descriptionList.length + 1}`}>
                            <Link to={link} className="button-primary">view case</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default Side