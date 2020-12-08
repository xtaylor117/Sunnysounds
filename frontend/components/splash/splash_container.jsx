import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions'
import { receiveAllSongs, receiveCurrentSong, receivePrevSong, receiveNextSong, receiveAllArtists } from '../../actions/song_actions'
import Splash from './splash'

const mSTP = state => {
    return ({
        currentUser: state.session.currentUser,
        songs: Object.values(state.entities.songs),
        artists: Object.values(state.entities.artists),
        currentSong: state.ui.playbar.currentSong
    })
}

const mDTP = dispatch => {
    return ({
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal)),
        receiveAllSongs: () => dispatch(receiveAllSongs()),
        receiveAllArtists: () => dispatch(receiveAllArtists()),
        receiveCurrentSong: songId => dispatch(receiveCurrentSong(songId)),
        receivePrevSong: songId => dispatch(receivePrevSong(songId)),
        receiveNextSong: songId => dispatch(receiveNextSong(songId))
    })
}

export default connect(mSTP, mDTP)(Splash);