import React from 'react';
import { connect } from 'react-redux'
import { login } from '../../actions/session_actions'
import SessionForm from './session_form'
import { Link } from 'react-router-dom'

const mSTP = ({ errors }) => {
    return({
        errors: errors.session,
        formType: 'login'
    })
}

const mDTP = dispatch => {
    return({
        processForm: (user) => dispatch(login(user))
    })
}

export default connect(mSTP, mDTP)(SessionForm);