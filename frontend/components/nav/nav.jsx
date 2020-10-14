import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ currentUser, logout, openModal }) => {

    const display = currentUser ? (
        <div className="greeting">
            <li>
                <h2 className="header-name">{currentUser.username}</h2>
            </li>
            <li>
                <button className="header-button" onClick={logout}>Log Out</button>
            </li>
        </div>

    ) :
        (
            <div className="login-signup">
                <li>
                    <button onClick={() => openModal('login')}>Login</button>
                </li>
                &nbsp;or&nbsp;
                <li>
                    <button onClick={() => openModal('signup')}>Signup</button>
                </li>
            </div>
        );

    return (
        <header className="nav-bar">
            <nav>
                <ul className="nav-links">
                    <Link to='/' className='header-link'>
                        Sunnysounds
                    </Link>
                    <div className="left-nav">
                        <li className="home"><a href="#">Home</a></li>
                        <li className="stream"><a href="#">Stream</a></li>
                        <li className="library"><a href="#">Library</a></li>
                    </div>
                    {display}
                </ul>
            </nav>
        </header>
    );
};

export default Nav;