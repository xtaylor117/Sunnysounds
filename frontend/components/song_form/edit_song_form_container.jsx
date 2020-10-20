import React from 'react'
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions'
import { editSong, clearSongErrors } from '../../actions/song_actions'
import SongForm from './song_form'

const mSTP = (state, ownProps) => ({
    currentUser: state.session.currentUser,
    errors: state.errors.session,
    formType: 'edit'
});

const mDTP = dispatch => ({
    processForm: song => dispatch(editSong(song)),
    closeModal: () => dispatch(closeModal()),
    clearSongErrors: () => dispatch(clearSongErrors())
});

export default connect(mSTP, mDTP)(SongForm);
