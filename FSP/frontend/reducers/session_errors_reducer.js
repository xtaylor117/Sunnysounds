import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/session_actions'

const sessionErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return newState;
        case RECEIVE_SESSION_ERRORS:
            newState.errors = action.errors
            return newState;
        default:
            return oldState;
    }
}

export default sessionErrorsReducer;