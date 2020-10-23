import React from 'react'
import { connect } from 'react-redux'
import { receiveAllSongs, deleteSong, receiveAllArtists, receiveSong } from '../../actions/song_actions'
import { openModal, receiveModalSong } from '../../actions/modal_actions'
import SongIndex from './song_index'

const mSTP = (state, ownProps) => {
    const userSongs = Object.values(state.entities.songs).filter(song => song.artist_id === state.session.currentUser.id)
    const length = userSongs.length

    return({
        currentUser: state.session.currentUser,
        artists: Object.values(state.entities.artists),
        songs: Object.values(state.entities.songs),
        latestSong: userSongs[length - 1]
    })
}

const mDTP = dispatch => {
    return({
        receiveAllSongs: () => dispatch(receiveAllSongs()),
        receiveAllArtists: () => dispatch(receiveAllArtists()),
        openModal: (modal) => dispatch(openModal(modal)),
        deleteSong: songId => dispatch(deleteSong(songId)),
        receiveSong: songId => dispatch(receiveSong(songId))

    })
}

export default connect(mSTP, mDTP)(SongIndex);