import { RECEIVE_CURRENT_USER, RECEIVE_USER } from '../actions/session_actions'
import { RECEIVE_ALL_ARTISTS } from '../actions/song_actions'

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
        case RECEIVE_ALL_ARTISTS:
            return action.users
        default:
            return oldState;
    }
}

export default artistsReducer;