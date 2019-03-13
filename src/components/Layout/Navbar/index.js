import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser }) => {
    return (
        <nav className="navBar">
            <div className="container">
                <Link className="navBrand-link" to="/">Notes</Link>
                <span>
                    <Link className="navBar-link" to="/notes">Notes</Link>
                    <Link className="navBar-link" to="/user">User</Link>
                    <Link className="navBar-link" to="/edit">Edit User</Link>
                    <Link className="navBar-link" to="/logout">Logout</Link>
                </span>
            </div>
        </nav>
    )
};