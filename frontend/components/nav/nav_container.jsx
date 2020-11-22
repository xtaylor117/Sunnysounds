import React from 'react'
import { connect } from 'react-redux'
import Nav from './nav'
import { logout } from '../../actions/session_actions'
import { openModal } from '../../actions/modal_actions';
import { receiveAllSongs, receiveAllArtists } from '../../actions/song_actions'


const mSTP = (state, ownProps) => {
    return({
        currentUser: state.session.currentUser,
        currentSong: state.ui.currentSong,
        artists: Object.values(state.entities.artists),
        songs: Object.values(state.entities.songs)
    })
}

const mDTP = dispatch => {
    return({
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal)),
        // receiveAllSongs: () => dispatch(receiveAllSongs()),
        // receiveAllArtists: () => dispatch(receiveAllArtists())
    })
}

export default connect(mSTP, mDTP)(Nav)