import React from 'react'
import Modal from './modal'
import NavContainer from './nav/nav_container'
import SplashContainer from './splash/splash_container'
import SongIndexContainer from './search/song_index_container'
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import ArtistShowContainer from './artist/artist_show_container'
import { Switch, Redirect, Route } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../utils/route_utils'


const App = () => (
    <div>
        <Modal />
        <header>
            <ProtectedRoute exact path='/discovery' component={NavContainer} />
            <ProtectedRoute exact path='/artists/:id' component={NavContainer} />
        </header>

        <Switch>
            <ProtectedRoute exact path='/artists/:id' component={ArtistShowContainer} />
            <ProtectedRoute exact path='/discovery' component={SongIndexContainer} />
            <AuthRoute path='/' component={SplashContainer} />
            <Redirect to='/' />
        </Switch>

    </div>
)

export default App;