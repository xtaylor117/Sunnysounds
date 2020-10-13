import React from 'react';
import { connect } from 'react-redux'
import { signup } from '../../actions/session_actions'
import SessionForm from './session_form'
import { Link } from 'react-router-dom'

const mSTP = ({ errors }) => {
    return ({
        errors: errors.session,
        formType: 'signup'
    })
}

const mDTP = dispatch => {
    return ({
        processForm: (user) => dispatch(signup(user))
    })
}

export default connect(mSTP, mDTP)(SessionForm);