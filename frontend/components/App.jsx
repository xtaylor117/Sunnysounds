import React from 'react'
import NavContainer from './nav/nav_container'
import SplashContainer from './splash/splash_container'
import Modal from './modal'
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import { Switch, Redirect } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../utils/route_utils'


const App = () => (
    <div>
        <Modal />
        <header>
        </header>

        <Switch>
            <ProtectedRoute exact path='/discovery' component={NavContainer} />
            <AuthRoute path='/' component={SplashContainer} />
            <Redirect to='/' />
        </Switch>

    </div>
)

export default App;