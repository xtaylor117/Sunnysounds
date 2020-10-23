import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions'
import Splash from './splash'

const mSTP = state => {
    return ({
        currentUser: state.session.currentUser
    })
}

const mDTP = dispatch => {
    return ({
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal))
    })
}

export default connect(mSTP, mDTP)(Splash);