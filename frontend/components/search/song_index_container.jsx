import React from 'react'
import { connect } from 'react-redux'
import { receiveAllSongs } from '../../actions/song_actions'
import { receiveArtist } from '../../actions/session_actions'
import { openModal } from '../../actions/modal_actions'
import SongIndex from './song_index'

const mSTP = (state, ownProps) => {
    return({
        currentUser: state.session.currentUser,
        songs: Object.values(state.entities.songs)
    })
}

const mDTP = dispatch => {
    return({
        receiveAllSongs: artistId => dispatch(receiveAllSongs(artistId)),
        openModal: (modal) => dispatch(openModal(modal))
    })
}

export default connect(mSTP, mDTP)(SongIndex);