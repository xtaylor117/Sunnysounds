import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    constructor(props) {
        super(props)
    }
    

    render(){
        return (
            <>
                <nav className="nav-bar">
                    <ul className="nav-links">
                        <div className="left-nav">
                            <Link to='/'> Sunnysounds </Link>
                            <li className="home"><a href="#">Home</a></li>
                            <li className="stream"><a href="#">Stream</a></li>
                            <li className="library"><a href="#">Library</a></li>
                        </div>
                        <div className="search-bar-container">
                            <li>     
                                <input type="text" className="search-bar" placeholder='Search for Artists and Songs'/>
                                <input type="image" src="https://a-v2.sndcdn.com/assets/images/search-dbfe5cbb.svg" className="search-button"/>
                            </li>
                        </div>
                        <div className="right-nav">
                            <li className="upload"><a href="#">Upload</a></li>
                            <li>
                                <p>{this.props.currentUser.username}  <i className="fa fa-caret-down"></i></p>
                                <div className="user-dropdown">
                                    <p>Profile</p>
                                    <p>Likes</p>
                                    <p>Following</p>
                                    <p>Who to Follow</p>
                                </div>
                            </li>
                            <li>
                                <p>Notifications</p>
                                <div className="notifications-dropdown">
                                    <p>Someone liked your song!</p>
                                </div>
                            </li>
                            <li>
                                <p>Messages</p>
                                <div className="messages-dropdown">
                                    <p>Hey man!</p>
                                    <p>Cool!</p>
                                </div>
                            </li>
                            <li>
                                •••
                                <div className="settings-dropdown">
                                    <p>Settings</p>
                                    <p onClick={this.props.logout}>Logout</p>
                                </div>
                            </li>
                        </div>
                    </ul>
                </nav>
            </>
        );
    }
    
}  

export default Nav;