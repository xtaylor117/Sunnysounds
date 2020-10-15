import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    constructor(props) {
        super(props)
    }

    
    render(){
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
                        <li>     
                            <input type="text" className="search-bar" placeholder='Search for Artists and Songs'/>
                            <input type="image" src="https://a-v2.sndcdn.com/assets/images/search-dbfe5cbb.svg" className="search-button"/>
                        </li>
                    </div>
                    <div className="right-nav">
                        <li className="upload"><a href="#">Upload</a></li>
                        <li className="user-actions-dropdown"><p>{this.props.currentUser.username}  <i className="fa fa-caret-down"></i></p></li>
                        <li className="notifications-dropdown"><p>Notifications</p></li>
                        <li className="messages-dropdown"><p>Messages</p></li>
                        <li onClick={this.props.logout}>•••</li>
                    </div>
                </ul>
            </nav>
        );
    }
}  

export default Nav;