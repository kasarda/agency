import React from 'react'
import { NavLink } from 'react-router-dom'

import './navigation.css'


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

function Navigation() {

    return (
        <div id="Navigation">
            <div className="flex wrap">
                <div className="column brand">
                    <NavLink to="/" activeClassName="">Digital</NavLink>
                </div>
                <div className="column links flex justify-end">
                    <Link to="/services" name="services" icon="icon-gear" />
                    <Link to="/projects" name="projects" icon="icon-project" />
                    <Link to="/contacts" name="contacts" icon="icon-mail" />
                </div>
            </div>
        </div >
    )
}

export default Navigation