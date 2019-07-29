import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <h1>Expensify</h1>
            <NavLink exact to="/" activeClassName="selected">Dashboard</NavLink>
            <NavLink to="/create" activeClassName="selected">Create</NavLink>
            <NavLink to="/help" activeClassName="selected">Help</NavLink>
        </header>
    );
}