import { RECEIVE_CURRENT_USER, RECEIVE_USER } from '../actions/session_actions'

const artistsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState[action.currentUser.id] = action.currentUser
            return newState;
        case RECEIVE_USER:
            newState[action.user.id] = action.user
            return newState;
        default:
            return oldState;
    }
}

export default artistsReducer;