import React from 'react'
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions'
import { createSong, clearSongErrors } from '../../actions/song_actions'
import SongForm from './song_form'

const mSTP = (state, ownProps) => {
    debugger
    return({
        currentUser: state.session.currentUser,
        errors: state.errors.session,
        formType: 'create'
    })
};

const mDTP = dispatch => ({
    processForm: song => dispatch(createSong(song)),
    closeModal: () => dispatch(closeModal()),
    clearSongErrors: () => dispatch(clearSongErrors())
});

export default connect(mSTP, mDTP)(SongForm);
