import { RECEIVE_MODAL_SONG, CLOSE_MODAL } from '../actions/modal_actions'

const currentSongReducer = (state = [], action) => {
    Object.freeze(state)

    switch (action.type) {
        case CLOSE_MODAL:
            return []
        default:
            return state
    }
}

export default currentSongReducer;
