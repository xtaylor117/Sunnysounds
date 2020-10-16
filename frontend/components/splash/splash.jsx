import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return ( this.props.currentUser ? (<Redirect to='/discovery' />)
            : (<>
                <div className="splash-header">
                    <div className="splash-header-top">
                        <Link to='/'> Sunnysounds </Link>
                        <div className="splash-header-description">
                            <h1>Discover more with Sunnysounds!</h1>
                            <h2>
                                Sunnysounds brightens up your day no matter what time it is.
                                Upload, discover, and share music to your heart's content!
                            </h2>
                        </div>
                        <div className="login-signup">
                            <li>
                                <button onClick={() => this.props.openModal('login')}>Login</button>
                            </li>
                            <li>
                                <button onClick={() => this.props.openModal('signup')}>Signup</button>
                            </li>
                        </div>
                    </div>
                </div>
                <div className="splash-container">
                        
                </div>
            </>)
        );
    }   
}  



export default Splash;