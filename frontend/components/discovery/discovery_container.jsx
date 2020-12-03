import React from 'react'
import { connect } from 'react-redux'
import { receiveAllSongs, deleteSong, receiveAllArtists, receiveSong, receiveCurrentSong, receivePrevSong } from '../../actions/song_actions'
import { receiveAllComments } from '../../actions/comment_actions'
import { openModal, receiveModalSong } from '../../actions/modal_actions'
import Discovery from './discovery'

const mSTP = (state, ownProps) => {
    const userSongs = Object.values(state.entities.songs).filter(song => song.artist_id === state.session.currentUser.id)
    const length = userSongs.length

    const comments = Object.values(state.entities.comments)

    return({
        currentUser: state.session.currentUser,
        currentSong: state.ui.playbar.currentSong,
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
        receiveAllComments: () => dispatch(receiveAllComments())
    })
}

export default connect(mSTP, mDTP)(Discovery);