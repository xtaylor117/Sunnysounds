import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions'

const sessionReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    const _nullSession = { currentUser: null }

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState.currentUser = action.currentUser
            return newState
        case LOGOUT_CURRENT_USER:
            return _nullSession
        default:
            return oldState;
    }
}

export default sessionReducer;