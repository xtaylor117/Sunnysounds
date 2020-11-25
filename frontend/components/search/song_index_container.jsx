import React from 'react'
import { connect } from 'react-redux'
import { receiveAllSongs, deleteSong, receiveAllArtists, receiveSong, receiveCurrentSong } from '../../actions/song_actions'
import { openModal, receiveModalSong } from '../../actions/modal_actions'
import { createComment } from '../../actions/comment_actions';
import SongIndex from './song_index'

const mSTP = (state, ownProps) => {
    const userSongs = Object.values(state.entities.songs).filter(song => song.artist_id === state.session.currentUser.id)
    const length = userSongs.length

    return({
        currentUser: state.session.currentUser,
        currentSong: state.ui.currentSong,
        artists: Object.values(state.entities.artists),
        songs: Object.values(state.entities.songs)
    })
}

const mDTP = dispatch => {
    return({
        receiveAllSongs: () => dispatch(receiveAllSongs()),
        receiveAllArtists: () => dispatch(receiveAllArtists()),
        openModal: (modal) => dispatch(openModal(modal)),
        deleteSong: songId => dispatch(deleteSong(songId)),
        receiveSong: songId => dispatch(receiveSong(songId)),
        receiveCurrentSong: songId => dispatch(receiveCurrentSong(songId)),
        createComment: song => dispatch(createComment(song))

    })
}

export default connect(mSTP, mDTP)(SongIndex);