import React from 'react'
import NavContainer from './nav/nav_container'
import Modal from './modal'
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import { Route, Link } from 'react-router-dom'
import { AuthRoute } from '../utils/route_utils'


const App = () => (
    <div>
        <Modal />
        <header>
            <Link to='/' className='header-link'>
                <h1>Soundcloud FSP</h1>
            </Link>
            <NavContainer />
            <AuthRoute path='/signup' component={SignupFormContainer} />
            <AuthRoute path='/login' component={LoginFormContainer} />

        </header>

    </div>
)

export default App;