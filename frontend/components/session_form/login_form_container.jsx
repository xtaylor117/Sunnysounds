import React from 'react';
import { connect } from 'react-redux'
import { login, clearSessionErrors } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions'
import SessionForm from './session_form'
import { Link } from 'react-router-dom'


const mSTP = (state, ownProps) => {
    return({
        errors: state.errors.session,
        formType: 'login',
    })
}

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        otherForm: (
            <button className="demo-button" onClick={() => dispatch(openModal('signup'))}>
                Sign Up!
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP, mDTP)(SessionForm);