import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { openModal, closeModal } from '../../actions/modal_actions'
import { editSong, clearSongErrors } from '../../actions/song_actions'
import SongForm from './song_form'

const mSTP = (state, ownProps) => {
    return({
        currentUser: state.session.currentUser,
        errors: state.errors.song,
        formType: 'edit',
        song: ownProps.song,
        songs: Object.values(state.entities.songs)
    })
};

const mDTP = dispatch => ({
    processForm: song => dispatch(editSong(song)),
    closeModal: () => dispatch(closeModal()),
    clearSongErrors: () => dispatch(clearSongErrors())
});

export default withRouter(connect(mSTP, mDTP)(SongForm));
