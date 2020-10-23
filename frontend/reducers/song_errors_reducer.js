import { RECEIVE_SONG_ERRORS, CLEAR_SONG_ERRORS, RECEIVE_SONG } from '../actions/song_actions'

const songErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SONG:
            return [];
        case RECEIVE_SONG_ERRORS:
            return action.errors || []
        case CLEAR_SONG_ERRORS:
            return [];
        default:
            return state;
    }
}

export default songErrorsReducer;
