import React from 'react';
import { Link } from 'react-router-dom';

const Splash = ({ currentUser, logout, openModal }) => {


    return (
        <>
            <div className="splash-header">
                <Link to='/'> Sunnysounds </Link>
                <div className="login-signup">
                    <li>
                        <button onClick={() => openModal('login')}>Login</button>
                    </li>
                    <li>
                        <button onClick={() => openModal('signup')}>Signup</button>
                    </li>
                </div>
                {/* <div className="splash-header-description">
                    <h1>Discover more with SunnySounds!</h1>
                    <h2>
                        SunnySounds brightens up your day no matter what time it is.
                        Upload, discover, and share music to your heart's content!
                    </h2>
                </div> */}
            </div>
            <div className="splash-container">
                    dis
            </div>
        </>
    );
};



export default Splash;