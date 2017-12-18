import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './Navigation.css'

function Link({ to, name, icon }) {
    return (
        <NavLink to={to}>
            <span className="hidden-sm-down">{name}</span>
            <span className="hidden-md-up">
                <svg width="18" height="18" viewBox="0 0 24 24">
                    <use className="icon" xlinkHref={'#' + icon} />
                </svg>
            </span>
        </NavLink>
    )
}

class Navigation extends Component {
    componentDidMount() {
        this.props.onMount(this.refs.nav)
    }
    render() {
        return (
            <div
                id="Navigation"
                ref="nav"
            >
                <div className="flex wrap">
                    <div className="column brand flex align-center">
                        <NavLink to="/" activeClassName="">Digital</NavLink>
                    </div>
                    <div className="column links flex justify-end align-center">
                        <Link to="/services" name="services" icon="icon-gear" />
                        <Link to="/projects" name="projects" icon="icon-project" />
                        <Link to="/contacts" name="contacts" icon="icon-mail" />
                    </div>
                </div>
            </div >
        )
    }
}

export default Navigation