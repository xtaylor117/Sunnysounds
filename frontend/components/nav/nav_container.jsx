import React from 'react'
import { connect } from 'react-redux'
import Nav from './nav'
import { logout } from '../../actions/session_actions'
import { openModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
    return({
        currentUser: state.session.currentUser,
        authPath: ownProps.location.pathname === "/login" || ownProps.location.pathname === "/signup",
        path: ownProps.location.pathname === '/'
    })
}

const mDTP = dispatch => {
    return({
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal))
    })
}

export default connect(mSTP, mDTP)(Nav)