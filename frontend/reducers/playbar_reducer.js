import { RECEIVE_CURRENT_SONG, RECEIVE_PREVIOUS_SONG, RECEIVE_NEXT_SONG } from '../actions/song_actions'


const defaultState = {
    currentSong: null,
    prevSong: null,
    nextSong: null,
}

const PlaybarReducer = (oldState = defaultState, action) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)

    switch (action.type) {
        case RECEIVE_CURRENT_SONG:
            newState.currentSong = action.song
            return newState
        case RECEIVE_PREVIOUS_SONG:
            newState.prevSong = action.song
            return newState
        case RECEIVE_NEXT_SONG:
            newState.nextSong = action.song
            return newState
        default:
            return oldState
    }
}

export default PlaybarReducer;
