import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <p> Hello, {currentUser.username}</p>
            <button onClick={logout}>Logout!</button>
        </div>
    ) :
        (
            <div>
                <Link className="btn" to="/signup">Sign Up</Link>
                <Link className="btn" to="/login">Log In</Link>
            </div>
        );

    return (
        <header className="nav-bar">
            <h1 className="logo">Soundcloud FSP</h1>
            <div>
                {display}
            </div>
        </header>
    );
};

export default Nav