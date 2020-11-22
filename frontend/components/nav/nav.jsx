import React from 'react';
import { Link } from 'react-router-dom';
import SongList from './search'

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
                            <li><Link to='/'> Sunnysounds </Link></li>
                            <li><Link to='/discovery'> Home </Link></li>
                            <li><Link to='/stream'> Stream </Link></li>
                            <li className="library"><a href="#">Library</a></li>
                        </div>
                        <div className="search-bar-container">
                            <SongList songs={this.props.songs} artists={this.props.artists} />
                        </div>
                        <div className="right-nav">
                            <li className="upload"><button onClick={() => this.props.openModal({formType: 'create'})}>Upload</button></li>
                            <li>
                                <p className="this-user">{this.props.currentUser.username}  <i className="fa fa-caret-down"></i></p>
                                <div className="user-dropdown">
                                    <p><Link to={`/artists/${this.props.currentUser.id}`}> Profile </Link></p>
                                    <p><Link to={`/artists/${this.props.currentUser.id}`}> Likes </Link></p>
                                    <p><Link to={`/artists/${this.props.currentUser.id}`}> Follows </Link></p>
                                    <p><Link to={`/artists/${this.props.currentUser.id}`}> Who to Follow </Link></p>
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
                                    <p>Hey man! This is going to be a really long message to test things out!
                                        How are you doing today? I hope everything is well. You can do this!
                                    </p>
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