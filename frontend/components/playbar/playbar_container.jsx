import React from 'react'
import Playbar from './playbar'
import { connect } from 'react-redux'
import { receiveCurrentSong, receiveNextSong, receivePrevSong } from '../../actions/song_actions'

const mSTP = (state, ownProps) => {
    return({
        currentUser: state.session.currentUser,
        currentSong: state.ui.playbar.currentSong,
        prevSong: state.ui.playbar.prevSong,
        nextSong: state.ui.playbar.nextSong,
        songs: Object.values(state.entities.songs),
        song: ownProps.song
    })
};

const mDTP = dispatch => ({
    receiveCurrentSong: songId => dispatch(receiveCurrentSong(songId)),
    receivePrevSong: songId => dispatch(receivePrevSong(songId)),
    receiveNextSong: songId => dispatch(receiveNextSong(songId))
});

export default connect(mSTP, mDTP)(Playbar);