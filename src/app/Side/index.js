import React, { Component } from 'react'
import Description from '../Description'
import Letter from '../Letter'
import './Side.css'

class Side extends Component {

    constructor() {
        super()

        this.state = {
            id: 1,
            theme: '#b29992',
            letter: 'H',
            heading: 'Headphones',
            description: [
                'We created a fast E-shop',
                'which provide quality',
                'headphones and speakers.'
            ],
            link: '/projects/headphnones',
            redirect: false,
        }
    }

    onRedirect() {
        this.props.onCanRedirect(this.state.link)
    }

    componentWillReceiveProps({ renderPage }) {
        const index = (renderPage === 0 ? 1 : renderPage) - 1
        const config = [
            {
                id: 1,
                theme: '#b29992',
                letter: 'H',
                heading: 'Headphones',
                description: [
                    'We created a fast E-shop',
                    'which provide quality',
                    'headphones and speakers.'
                ],
                link: '/projects/headphones'
            },
            {
                id: 2,
                theme: '#a0978a',
                letter: 'R',
                heading: 'Portfolio',
                description: [
                    'We created a portfolio',
                    'page for the designer',
                    'and the photographer.'
                ],
                link: '/projects/portfolio'
            },
            {
                id: 3,
                theme: '#a9998e',
                letter: 'P',
                heading: 'Post',
                description: [
                    'We created a clever social',
                    'network for sharing',
                    'posts, images or videos.'
                ],
                link: '/projects/post'
            },

            {
                id: 4,
                theme: '#c1ab9e',
                letter: 'T',
                heading: 'Artech',
                description: [
                    'We created business website',
                    'for architect company',
                    'called Artech'
                ],
                link: '/projects/artech'
            }
        ]

        if (config[index])
            this.setState(config[index])
    }

    render() {
        const { theme, heading, description, letter, id } = this.state
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

                    <Description
                        theme={theme}
                        description={description}
                        id={id}
                        onRedirect={this.onRedirect.bind(this)}
                    />
                </div>
            </div>
        )
    }

}

export default Side