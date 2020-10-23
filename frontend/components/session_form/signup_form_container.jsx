import React from 'react';
import { connect } from 'react-redux'
import { signup, clearSessionErrors } from '../../actions/session_actions'
import SessionForm from './session_form'
import { Link } from 'react-router-dom'
import { openModal, closeModal } from '../../actions/modal_actions'

const mSTP = ({ errors }) => {
    return ({
        errors: errors.session,
        formType: 'signup'
    })
}

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        otherForm: (
            <button className="demo-button" onClick={() => dispatch(openModal({formType: 'login'}))}>
                Login!
            </button>
        ),
        closeModal: () => dispatch(closeModal()), 
        clearSessionErrors: () => dispatch(clearSessionErrors())
    };
};

export default connect(mSTP, mDTP)(SessionForm);