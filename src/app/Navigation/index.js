import React from 'react'
import { NavLink } from 'react-router-dom'
import { isPath } from '../../services/local'
import { text } from '../../services/common'
import Icon from '../Icon'
import './Navigation.css'


function Link({ to, name, icon }) {
    return (
        <NavLink exact to={to}>
            <span className="hidden-sm-down">{name}</span>
            <span className="hidden-md-up">
                <Icon name={icon}/>
            </span>
        </NavLink>
    )
}

function Navigation({ onHomePage }) {
    return (
        <div id="Navigation">
            <div className="flex wrap">
                <div className="column brand logo flex align-center">
                    {
                        isPath('/') ?
                            <a aria-current="true" onClick={_ => onHomePage()}>Digital</a> :
                            <NavLink to="/" activeClassName="">Digital</NavLink>
                    }
                </div>
                <div className="column links link flex justify-end align-center">
                    <Link to="/services" name={text('services', 'servis')} icon="gear" />
                    <Link to="/projects" name={text('projects', 'projekty')} icon="project" />
                    <Link to="/contacts" name={text('contacts', 'kontakt')} icon="mail" />
                </div>
            </div>
        </div >
    )
}

export default Navigation