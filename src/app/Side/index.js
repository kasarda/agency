import React, { Component } from 'react'
import Description from '../Description'
import Letter from '../Letter'
import './Side.css'

class Side extends Component {

    constructor() {
        super()

        this.state = {
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
        const { theme, heading, description, letter } = this.state
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
                        onRedirect={this.onRedirect.bind(this)}
                    />
                </div>
            </div>
        )
    }

}

export default Side