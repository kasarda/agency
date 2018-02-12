import React, { Component } from 'react'
import { text } from '../../services/common'
import Icon from '../Icon'
import './Form.css'

class Form extends Component {

    constructor() {
        super()
        this.state = {
            close: false,
            emailValidation: null,
            messageValidation: null,
            dirtyEmail: false,
            dirtyMessage: false,
            max: 400
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
        const { email, message } = this.refs

        const isEmailValid = this.emailValidation(email)
        const isMessageValid = this.messageValidation(message)


        if(isEmailValid && isMessageValid) {
            this.props.onSend()
            this.close.call(this)
        }
        else {
            this.setState({ dirtyEmail: true, dirtyMessage: true })
            if(!isEmailValid)
                email.focus()
            else
                message.focus()
        }
    }

    onBlur({ target }) {
        if(!this.state.dirtyEmail && target.name === 'email') {
            this.setState({ dirtyEmail: true })
            this.emailValidation(target)
        }

        if(!this.state.dirtyMessage && target.name === 'message') {
            this.setState({ dirtyMessage: true })
            this.messageValidation(target)
        }
    }


    onInput({ target }) {
        if(this.state.dirtyEmail && target.name === 'email')
            this.emailValidation(target)

        if(this.state.dirtyMessage && target.name === 'message')
            this.messageValidation(target)
    }


    emailValidation({ value }) {
        // eslint-disable-next-line
        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        let validation = null

        if(!value.length)
            validation = ['The Email cannot be empty', 'Email nemôže byť prázdny']


        else if(!pattern.test(value))
            validation = ['The incorrect email', 'Nesprávny email']

        this.setState({ emailValidation: validation })
        return validation === null
    }

    messageValidation({ value }) {
        const { length } = value.replace(/\n/gm, '')
        const { max } = this.state
        let validation = null

        if(!length)
            validation = ['The Message cannot be empty', 'Správa nemôže byť prázdna']

        else if(length < 10)
            validation = [`The message must have at least 10 characters and you have ${length}`, `Správa musí mať aspoň 10 znakova a ty máš ${length}`]

        else if(length > max)
            validation = [`The message can have a maximum of ${max} characters and you have ${length}`, `Správa môže mať maximálne ${max} znakov a ty máš ${length}`]

        this.setState({ messageValidation: validation })
        return validation === null
    }

    componentDidMount() {
        document.body.dataset.preventTouch = "false"
    }

    componentWillUnmount() {
        document.body.dataset.preventTouch = "true"
    }

    render() {
        const { close, messageValidation, emailValidation, max } = this.state
        return (
            <div
                id="Form"
                className="flex"
                data-close={close}
                onAnimationEnd={this.animationEnd.bind(this)}
            >
                <div onClick={this.close.bind(this)} className="row disabled-container"></div>
                <div className="row form flex justify-center direction-col">
                    <Icon name="arrow-right" className="primary-hover anim anim-1" onClick={this.close.bind(this)} />
                    <h3>
                        <div className="anim anim-2">{text('Send', 'Pošli')}</div>
                        <div className="anim anim-3">{text('a message', 'správu')}</div>
                    </h3>

                    <form onSubmit={this.submit.bind(this)} name="message" className="flex direction-col" noValidate>
                        <span className="validation">{emailValidation && text(...emailValidation)}</span>
                        <input
                            className="anim anim-4"
                            type="email" name="email" ref="email"
                            placeholder={text('Your Email', 'Tvoj Email', true)}
                            onInput={this.onInput.bind(this)}
                            onBlur={this.onBlur.bind(this)}
                        />
                        <span className="validation">{messageValidation && text(...messageValidation)}</span>
                        <textarea
                            className="anim anim-5"
                            name="message" ref="message"
                            placeholder={text('Message', 'Správa', true)}
                            maxLength={max}
                            onInput={this.onInput.bind(this)}
                            onBlur={this.onBlur.bind(this)}
                        ></textarea>
                        <div className="anim anim-6">
                            <div className="primary-button button outline-color">
                                <button type="submit">{text('Send Message', 'Odoslať Správu')}</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form
