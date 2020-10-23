import { RECEIVE_CURRENT_SONG } from '../actions/song_actions'

const currentSongReducer = (state = [], action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_CURRENT_SONG:
            return action.song
        default:
            return state
    }
}

export default currentSongReducer;
