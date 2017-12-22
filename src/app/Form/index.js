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
        if(/-CloseForm/.test(animationName))
            this.props.onToggleForm()
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
                    <h3>Send <br />
                        a message</h3>
                    <form onSubmit={e => e.preventDefault()} name="message" className="flex direction-col">
                        <input type="email" name="email" placeholder="Your Email" />
                        <textarea name="message" placeholder="Message"></textarea>
                        <div className="button">
                            <button className="button-primary" type="submit">Send Message</button>
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}

export default Form
