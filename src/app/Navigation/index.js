import React from 'react'
import { NavLink } from 'react-router-dom'

import './navigation.css'


function Link({ to, name, icon }) {
    return (
        <NavLink to={to}>
            <span className="hidden-sm-down">{name}</span>
            <span className="hidden-md-up">
                <svg width="18" height="18" viewBox="0 0 24 24">
                    <use xlinkHref={'#' + icon} />
                </svg>
            </span>
        </NavLink>
    )
}

function Navigation() {

    return (
        <div className="container-fluid" id="Navigation">
            <div className="row">
                <div className="col brand">
                    <NavLink to="/" activeClassName="">Digital</NavLink>
                </div>
                <div className="col links flex justify-end">
                    <Link to="/services" name="services" icon="icon-gear" />
                    <Link to="/projects" name="projects" icon="icon-project" />
                    <Link to="/contacts" name="contacts" icon="icon-mail" />
                </div>
            </div>
        </div >
    )
}

export default Navigation