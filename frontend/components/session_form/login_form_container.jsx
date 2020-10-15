import React from 'react';
import { connect } from 'react-redux'
import { login } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions'
import SessionForm from './session_form'
import { Link } from 'react-router-dom'

const mSTP = ({ errors }) => {
    return({
        errors: errors.session,
        formType: 'login',
        oppositeType: 'signup'
    })
}

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
                Signup
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP, mDTP)(SessionForm);