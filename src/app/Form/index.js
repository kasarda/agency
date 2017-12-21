import React, { Component } from 'react'

import './Form.css'

class Form extends Component {

    render() {
        return (
            <div id="Form" className="flex justify-center direction-col">
                <h3>Send <br />
                    a message</h3>
                <form action="javascript:void(0)" name="message" className="flex direction-col">
                    <input type="email" name="email" placeholder="Your Email"/>
                    <textarea name="message" placeholder="Message"></textarea>
                    <div className="button">
                        <button className="button-primary" type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form
