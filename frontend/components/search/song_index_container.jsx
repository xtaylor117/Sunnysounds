import React from 'react'
import { connect } from 'react-redux'
import { receiveAllSongs, deleteSong } from '../../actions/song_actions'
import { receiveArtist } from '../../actions/session_actions'
import { openModal } from '../../actions/modal_actions'
import SongIndex from './song_index'

const mSTP = (state, ownProps) => {
    const userSongs = Object.values(state.entities.songs).filter(song => song.artist_id === state.session.currentUser.id)
    const length = userSongs.length
    return({
        currentUser: state.session.currentUser,
        songs: Object.values(state.entities.songs),
        latestSong: userSongs[length - 1]
    })
}

const mDTP = dispatch => {
    return({
        receiveAllSongs: artistId => dispatch(receiveAllSongs(artistId)),
        openModal: (modal) => dispatch(openModal(modal)),
        deleteSong: songId => dispatch(deleteSong(songId))
    })
}

export default connect(mSTP, mDTP)(SongIndex);