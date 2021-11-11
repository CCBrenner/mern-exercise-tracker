import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="container navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">ExerTracker</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Exercises</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/create">Create Exercise</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/user">Create User</Link>
                    </li>
                </ul>
                </div>
            </nav>
        )
    }
}
