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
                <li>
                    <button onClick={() => openModal('signup')}>Signup</button>
                </li>
            </div>
        );

    return (
        <nav className="nav-bar">
            <ul className="nav-links">
                <div className="left-nav">
                    <Link to='/'> Sunnysounds </Link>
                    <li className="home"><a href="#">Home</a></li>
                    <li className="stream"><a href="#">Stream</a></li>
                    <li className="library"><a href="#">Library</a></li>
                </div>
                <div className="search-bar-container">     
                    <input type="text" className="search-bar" placeholder='Search for Artists and Songs'/>
                    <input type="image" src="https://a-v2.sndcdn.com/assets/images/search-dbfe5cbb.svg" className="search-button"/>
                </div>
                {display}
            </ul>
        </nav>
    );
};

export default Nav;