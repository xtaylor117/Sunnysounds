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
                        <li>
                            <p>{this.props.currentUser.username}  <i className="fa fa-caret-down"></i></p>
                            <div className="user-dropdown">

                            </div>
                        </li>
                        <li>
                            <p>Notifications</p>
                            <div className="notification-dropdown">

                            </div>
                        </li>
                        <li>
                            <p>Messages</p>
                            <div className="message-dropdown">

                            </div>
                        </li>
                        <li onClick={this.props.logout}>
                            •••
                            <div className="logout-dropdown">

                            </div>
                        </li>
                    </div>
                </ul>
            </nav>
        );
    }
    
}  

export default Nav;