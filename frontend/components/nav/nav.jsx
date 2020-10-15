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
                        <li>
                            <button>Upload</button>
                        </li>
                        <li>
                            <button>{currentUser.username}</button>
                        </li>
                        <li>
                            <button>Notifications</button>
                        </li>
                        <li>
                            <button>Messages</button>
                        </li>
                        <li>
                            <button onClick={this.props.logout}>•••</button>
                        </li>
                    </div>
                </ul>
            </nav>
        );
    }
}  

export default Nav;