import React from 'react'
import Modal from './modal'
import NavContainer from './nav/nav_container'
import SplashContainer from './splash/splash_container'
import SongIndexContainer from './search/song_index_container'
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import ArtistShowContainer from './artist/artist_show_container'
import DiscoveryContainer from './discovery/discovery_container'
import SongShowContainer from './song_show/song_show_container'
import { Switch, Redirect, Route } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../utils/route_utils'


const App = () => (
    <div>
        <Modal />
        <header>
            <ProtectedRoute exact path='/artists/:artistId' component={NavContainer} />
            <ProtectedRoute exact path='/songs/:songId' component={NavContainer} />
            <ProtectedRoute exact path='/discovery' component={NavContainer} />
            <ProtectedRoute exact path='/stream' component={NavContainer} />
        </header>

        <Switch>
            <ProtectedRoute exact path='/artists/:artistId' component={ArtistShowContainer} />
            <ProtectedRoute exact path='/songs/:songId' component={SongShowContainer} />
            <ProtectedRoute exact path='/discovery' component={DiscoveryContainer} />
            <ProtectedRoute exact path='/stream' component={SongIndexContainer} />
            <AuthRoute path='/' component={SplashContainer} />
            <Redirect to='/' />
        </Switch>

    </div>
)

export default App;