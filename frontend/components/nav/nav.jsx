import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: ''
        }
    }

    // focusHome() {
    //     let home = document.getElementById('home')
    //     let stream = document.getElementById('stream')
    //     let library = document.getElementById('library')

    //     if (!home.classList.contains('nav-focused')) {
    //         home.classList.add('nav-focused')
    //     }

    //     stream.classList.remove('nav-focused')
    //     library.classList.remove('nav-focused')
    // }

    // focusStream(){
    //     let home = document.getElementById('home')
    //     let stream = document.getElementById('stream')
    //     let library = document.getElementById('library')

    //     if (!stream.classList.contains('nav-focused')) {
    //         stream.classList.add('nav-focused')
    //     }

    //     home.classList.remove('nav-focused')
    //     library.classList.remove('nav-focused')
    // }

    // focusLibrary(){
    //     let home = document.getElementById('home')
    //     let stream = document.getElementById('stream')
    //     let library = document.getElementById('library')

    //     if (!library.classList.contains('nav-focused')) {
    //         library.classList.add('nav-focused')
    //     }

    //     stream.classList.remove('nav-focused')
    //     home.classList.remove('nav-focused')
    // }

    render(){
        return (
            <>
                <nav className="nav-bar">
                    <ul className="nav-links">
                        <div className="left-nav">
                            <li><Link to='/'> Sunnysounds </Link></li>
                            <li /* onClick={() => this.focusHome()} id='home' */><Link  to='/discovery'> Home </Link></li>
                            <li /* onClick={() => this.focusStream()} id='stream' */><Link to='/stream'> Stream </Link></li>
                            <li /* onClick={() => this.focusLibrary()} id='library' */><Link to='/discovery'> Library </Link></li>
                        </div>
                        <div className="right-nav">
                            <li className="upload"><button onClick={() => this.props.openModal({formType: 'create'})}>Upload</button></li>
                            <li>
                                <p className="this-user">{this.props.currentUser.username}  <i className="fa fa-caret-down"></i></p>
                                <div className="user-dropdown">
                                    <p><Link to={`/artists/${this.props.currentUser.id}`}> Profile </Link></p>
                                    {/* <p><Link to={`/artists/${this.props.currentUser.id}`}> Likes </Link></p>
                                    <p><Link to={`/artists/${this.props.currentUser.id}`}> Follows </Link></p>
                                    <p><Link to={`/artists/${this.props.currentUser.id}`}> Who to Follow </Link></p> */}
                                </div>
                            </li>
                            {/* <li>
                                <p>Notifications</p>
                                <div className="notifications-dropdown">
                                    <p>Someone liked your song!</p>
                                </div>
                            </li> */}
                            {/* <li>
                                <p>Messages</p>
                                <div className="messages-dropdown">
                                    <p>Hey man! This is going to be a really long message to test things out!
                                        How are you doing today? I hope everything is well. You can do this!
                                    </p>
                                    <p>Cool!</p>
                                </div>
                            </li> */}
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