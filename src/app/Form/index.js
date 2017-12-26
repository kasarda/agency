import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            close: false
        }
    }

    close() {
        this.setState({
            close: true
        })
    }

    animationEnd({ animationName }) {
        if (/-CloseForm/.test(animationName)) {
            this.setState({ sended: false })
            this.props.onToggleForm()
        }
    }
    submit(event) {
        event.preventDefault()
        this.props.onSend()
        this.close.call(this)
    }

    componentDidMount() {
        document.body.dataset.preventTouch = "false"
    }
    componentWillUnmount() {
        document.body.dataset.preventTouch = "true"
    }

    render() {
        const { close } = this.state
        return (
            <div
                id="Form"
                className="flex"
                data-close={close}
                onAnimationEnd={this.animationEnd.bind(this)}
            >
                <div onClick={this.close.bind(this)} className="row disabled-container"></div>
                <div className="row form flex justify-center direction-col">
                    <svg
                        width="18" height="18" viewBox="0 0 24 24"
                        className="clickable init-animation init-animation-1"
                        onClick={this.close.bind(this)}
                    >
                        <use xlinkHref="#icon-arrow-right" />
                    </svg>
                    <h3>
                        <span className="init-animation init-animation-2">Send</span>
                        <span className="init-animation init-animation-3">a message</span>
                    </h3>
                    <form onSubmit={this.submit.bind(this)} name="message" className="flex direction-col">
                        <input className="init-animation init-animation-4" type="email" name="email" placeholder="Your Email" required />
                        <textarea className="init-animation init-animation-5" name="message" placeholder="Message" required></textarea>
                        <div className="init-animation init-animation-6">
                            <div className="primary-button button outline-color">
                                <button type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}

export default Form
