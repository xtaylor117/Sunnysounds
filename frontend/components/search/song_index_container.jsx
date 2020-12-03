import React from 'react'
import { connect } from 'react-redux'
import { receiveAllSongs, deleteSong, receiveAllArtists, receiveSong, receiveCurrentSong, receivePrevSong, receiveNextSong } from '../../actions/song_actions'
import { openModal, receiveModalSong } from '../../actions/modal_actions'
import { createComment, receiveAllComments } from '../../actions/comment_actions';
import SongIndex from './song_index'

const mSTP = (state, ownProps) => {
    const userSongs = Object.values(state.entities.songs).filter(song => song.artist_id === state.session.currentUser.id)
    const length = userSongs.length
    
    const comments = Object.values(state.entities.comments)

    return({
        currentUser: state.session.currentUser,
        currentSong: state.ui.playbar.currentSong,
        prevSong: state.ui.playbar.prevSong,
        nextSong: state.ui.playbar.nextSong,
        artists: Object.values(state.entities.artists),
        songs: Object.values(state.entities.songs),
        comments
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
        receivePrevSong: songId => dispatch(receivePrevSong(songId)),
        receiveNextSong: songId => dispatch(receiveNextSong(songId)),
        createComment: song => dispatch(createComment(song)),
        receiveAllComments: () => dispatch(receiveAllComments())

    })
}

export default connect(mSTP, mDTP)(SongIndex);