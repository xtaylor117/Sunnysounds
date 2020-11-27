import React from 'react'
import { connect } from 'react-redux'
import { receiveAllSongs, deleteSong, receiveAllArtists, receiveSong, receiveCurrentSong } from '../../actions/song_actions'
import { openModal, receiveModalSong } from '../../actions/modal_actions'
import { createComment, receiveAllComments, deleteComment } from '../../actions/comment_actions';
import SongShow from './song_show'

const mSTP = (state, ownProps) => {
    const userSongs = Object.values(state.entities.songs).filter(song => song.artist_id === state.session.currentUser.id)
    const length = userSongs.length
    
    const comments = Object.values(state.entities.comments)

    return({
        currentUser: state.session.currentUser,
        currentSong: state.ui.currentSong,
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
        createComment: comment => dispatch(createComment(comment)),
        deleteComment: commentId => dispatch(deleteComment(commentId)),
        receiveAllComments: () => dispatch(receiveAllComments())

    })
}

export default connect(mSTP, mDTP)(SongShow);